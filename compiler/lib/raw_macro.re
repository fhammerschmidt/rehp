open Stdlib;

type macroData = {
  macro: string,
  backend: string,
  callerLoc: option(Parse_info.t),
};

/**
 * When finding a raw-macro, we will:
 * - Grab the string that comes immediately after raw-macro.
 * - Remove one possible newline after the word raw-macro.
 * - Remove one possible newline at the end of the string.
 * - Trim all leading whitespace on all lines according to the smallest amount
 * of whitespace found on any of the non-empty lines.
 * - Then within each macro we will also remove one potential leading newline
 * and ending newline inside the tags.
 *
 * So the following:
 *
 * external foo : type = "
 *     raw-macro:
 *     <js>
 *       stuff here
 *     </js>
 * ";
 *
 * Is equivalent to:
 *
 * external foo : type = "raw-macro:<js>stuff here</js>";
 *
 * - You may force there to be a newline in any by writing two newlines.
 *
 * external foo : type = "
 *     raw-macro:
 *
 *     <js>
 *
 *       stuff here
 *
 *     </js>
 * ";
 *
 * external foo : type = "
 *   raw-macro:
 * ";
 */
let removeLeadingNewline = s => {
  let len = String.length(s);
  len === 0 ? s : s.[0] === '\n' ? String.sub(s, ~pos=1, ~len=len - 1) : s;
};

let removeTrailingNewline = s => {
  let len = String.length(s);
  len === 0
    ? s : s.[len - 1] === '\n' ? String.sub(s, ~pos=0, ~len=len - 1) : s;
};

let removeBookendNewlines = s =>
  removeLeadingNewline(removeTrailingNewline(s));

let rec minLeadingNonEmptySpaces = (minSoFar, l) => {
  String.is_empty(l)
    ? minSoFar : min(String.num_leading_char(' ', l), minSoFar);
};

let rec normalizeLeading = text => {
  let lines = String.split(~sep="\n", text);
  let min = List.fold_left(~f=minLeadingNonEmptySpaces, ~init=100, lines);
  let lines =
    List.map(lines, ~f=line =>
      String.(
        is_empty(line) ? line : sub(~pos=min, ~len=length(line) - min, line)
      )
    );
  String.concat(~sep="\n", lines);
};

let formatForError = s => {
  let s = removeBookendNewlines(s);
  let s = normalizeLeading(s);
  String.split_on_char('\n', s)
  |> List.map(~f=ln => "    " ++ ln)
  |> String.concat(~sep="\n");
};

/**
 * Exception for problems that the user is responsible for - something wrong
 * with their code for example.
 * Could be used beyond macros as well. Used to surface a user facing message
 * with potential file/lineno.
 */
exception UserError(string, option(Parse_info.t));

let commonError = {|There is a problem with the macro being called at this approximate location.|};

type tokens =
  | TOpen(string)
  | TClose(string)
  | TSelfClose(string)
  | TRaw(string);

type node =
  | Node(string, list(node))
  | Raw(string);

type tokenizedTag =
  | Nothing
  | Gt(string, list(char))
  | SlashGt(string, list(char));

let raiseMacroUnsupportedTag = (tagName, macroData) => {
  let msg =
    Printf.sprintf(
      {|%s
  The macro being called was defined using unsupported tag (%s).
  The only supported macros are ones that specify portions to be used in backends such
  as <@js>...</@js> or argument substitution <@1 />. You can also supply multiple
  backends in one macro such as: external x : type = "raw-macro:<@js>...</@js><@php>...<@/php>)
  The macro contents are:
%s
|},
      commonError,
      tagName,
      formatForError(macroData.macro),
    );
  raise(UserError(msg, macroData.callerLoc));
};

let raiseMalformedMacro = (specificError, macroData) => {
  let msg =
    Printf.sprintf(
      {|%s
  The macro being called has a parse error: %s.
  The macro contents are:
%s
|},
      commonError,
      specificError,
      formatForError(macroData.macro),
    );
  raise(UserError(msg, macroData.callerLoc));
};

let raiseMacroCallIndexNotSupported = (i, len, macroData) => {
  let msg =
    Printf.sprintf(
      {|%s
  The macro being called uses index %d, but it should not.
  It can only use indices 1 - %d. Hint: The number of arguments in the `external`'s
  type has to be compatible with the macro nodes referenced (<@1> - <@%d/>).
  The macro contents are:
%s
|},
      commonError,
      i,
      len,
      len,
      formatForError(macroData.macro),
    );
  raise(UserError(msg, macroData.callerLoc));
};

let is = nm => {
  let trimmed = String.trim(nm);
  switch (String.find_substring("raw-macro:", trimmed, 0)) {
  | exception Not_found => false
  | 0 => true
  | _ => false
  };
};

let extract = (~forBackend, ~loc=?, nm) => {
  let trimmed = String.trim(nm);
  let macro =
    switch (String.find_substring("raw-macro:", trimmed, 0)) {
    | exception Not_found => ""
    | 0 =>
      let posInNonTrimmed = String.find_substring("raw-macro:", nm, 0);
      let everythingAfterRawMacro =
        String.sub(
          ~pos=posInNonTrimmed + 10,
          ~len=String.length(nm) - 10 - posInNonTrimmed,
          nm,
        )
        |> removeBookendNewlines;
      normalizeLeading(everythingAfterRawMacro);
    | _ => ""
    };
  {macro, backend: forBackend, callerLoc: loc};
};

let rec nonEmptyUntilGt = (~rev=[], chars) =>
  switch (chars) {
  | [] => Nothing
  | ['/', '>', ...tl] => SlashGt(String.from_char_list(List.rev(rev)), tl)
  /* Ignore one newline after opening tag or before closing tag,
   * in this case it's after an opening tag. */
  | ['>', '\n', ...tl]
  | ['>', ...tl] => Gt(String.from_char_list(List.rev(rev)), tl)
  | [hd, ...tl] => nonEmptyUntilGt(~rev=[hd, ...rev], tl)
  };

let rec tokenize = (rawStack, next) => {
  let appendRawToHead = (rawStack, lst) =>
    switch (rawStack) {
    | [] => lst
    | [_, ..._] => [
        TRaw(String.from_char_list(List.rev(rawStack))),
        ...lst,
      ]
    };
  switch (rawStack, next) {
  | ([], [])
  | ([_, ..._], []) => appendRawToHead(rawStack, [])
  /* Ignore one newline after opening tag or before closing tag, in this case
   * it's before a closing tag */
  | (_, ['\n', '<' as first, '@' as second, '/' as third as kind, ...rest])
  | (_, ['\n', '<' as first, '/' as second as kind, '@' as third, ...rest])
  | (_, ['<' as first, '@' as second, '/' as third as kind, ...rest])
  | (_, ['<' as first, '/' as second as kind, '@' as third, ...rest])
  | (_, ['<' as first, '@' as second, _ as third as kind, ...rest]) =>
    let kindStr = String.make(1, kind);
    switch (nonEmptyUntilGt(rest)) {
    | Nothing => tokenize([first, second, third, ...rawStack], rest)
    | Gt(tag, rest) =>
      let token = kind === '/' ? TClose(tag) : TOpen(kindStr ++ tag);
      appendRawToHead(rawStack, [token, ...tokenize([], rest)]);
    | SlashGt(tag, rest) =>
      let token =
        kind === '/' ? TSelfClose(tag) : TSelfClose(kindStr ++ tag);
      appendRawToHead(rawStack, [token, ...tokenize([], rest)]);
    };
  | (_, [hd, ...rest]) => tokenize([hd, ...rawStack], rest)
  };
};

let rec parseNodeListImpl = (macroData, tokens) =>
  switch (tokens) {
  | [] => ([], [])
  | [TRaw(_), ...tl]
  | [TSelfClose(_), ...tl]
  | [TOpen(_), ...tl] =>
    let (node, remaining) = parseNodeImpl(macroData, tokens);
    let (otherChilren, remaining) = parseNodeListImpl(macroData, remaining);
    ([node, ...otherChilren], remaining);
  | [TClose(_), ..._] => ([], tokens)
  }
and parseNodeImpl = (macroData, tokens) =>
  switch (tokens) {
  | [] => raiseMalformedMacro("Inbalanced opening or closing tags", macroData)
  | [TClose(c), ...tl] =>
    raiseMalformedMacro("Closing token " ++ c ++ " has no opening", macroData)
  | [TRaw(r), ...tl] => (Raw(r), tl)
  | [TOpen(t), ...tl] =>
    let (nodeList, remaining) = parseNodeListImpl(macroData, tl);
    switch (remaining) {
    | [] =>
      raiseMalformedMacro(
        "Opening token " ++ t ++ " has no closing",
        macroData,
      )
    | [TClose(c), ...tl] when c == t => (Node(t, nodeList), tl)
    | _ =>
      raiseMalformedMacro(
        "Opening token " ++ t ++ " has mismatched or missing closing",
        macroData,
      )
    };
  | [TSelfClose(sc), ...tl] => (Node(sc, []), tl)
  }
and parseNodeList = macroData => {
  let tokens = tokenize([], String.to_char_list(macroData.macro));
  let (parsedNodeList, remaining) = parseNodeListImpl(macroData, tokens);
  if (remaining !== []) {
    raiseMalformedMacro(
      "The macro contains unmatched macro nodes at the end.",
      macroData,
    );
  };
  parsedNodeList;
};

let rec inOrderNode = (f, init, node) => {
  switch (node) {
  | Raw(r) => f(init, node)
  | Node(t, nodeList) =>
    let next = f(init, node);
    foldInOrder(f, next, nodeList);
  };
}
and foldInOrder = (f, init, nodeList) => {
  List.fold_left(~f=inOrderNode(f), ~init, nodeList);
};

/**
 * To turn a nodelist that has no depth beyond terminal nodes into a list.
 */
let flattenNodeList = (flattener, nodeList) => {
  foldInOrder((cur, next) => [flattener(next), ...cur], [], nodeList);
};

let expandIntoMultipleArguments = (macroData, argsToExpand, nodeList) => {
  /**
   * To turn a nodelist that has no depth beyond terminal nodes into a list.
   */
  let rec expandNodeIntoMultipleArgumentsImpl =
          ((curExpandedArgs, nodeListSoFar), curNode) => {
    switch (curNode) {
    | Raw(r) => (curExpandedArgs, [Raw(r), ...nodeListSoFar])
    | Node(t, subNodeList) =>
      switch (int_of_string_opt(t)) {
      | Some(i) =>
        let arg =
          switch (List.nth_opt(argsToExpand, i - 1)) {
          | None =>
            raiseMacroCallIndexNotSupported(
              i,
              List.length(argsToExpand),
              macroData,
            )
          | Some(a) => a
          };
        let expandedArgsWithThis = [arg, ...curExpandedArgs];
        let nextExpandedArgsLen = List.length(expandedArgsWithThis);
        let (nextExpandedArgs, mappedChildren) =
          expandIntoMultipleArgumentsImpl(expandedArgsWithThis, subNodeList);
        (
          nextExpandedArgs,
          [Node(string_of_int(nextExpandedArgsLen), []), ...nodeListSoFar],
        );
      | None => raiseMacroUnsupportedTag(t, macroData)
      }
    };
  }
  and expandIntoMultipleArgumentsImpl = (curExpandedArgs, nodeList) => {
    let (expandedArgs, mappedNodeList) =
      List.fold_left(
        ~f=expandNodeIntoMultipleArgumentsImpl,
        ~init=(curExpandedArgs, []),
        nodeList,
      );
    (expandedArgs, List.rev(mappedNodeList));
  };
  expandIntoMultipleArgumentsImpl([], nodeList);
};

/**
 * Filters nodes that have non-empty children based on cb. If the cb returns
 * true for a parent, the parent's children are spliced into the parent's
 * previous location. Nodes with no children are left in tact.
 */
let rec evalContainers = (nodeList, cb) => {
  let taken =
    List.fold_left(
      ~init=[],
      ~f=
        (cur, child) =>
          switch (child) {
          | Raw(_) as r => [r, ...cur]
          | Node(_, []) as n => [n, ...cur]
          | Node(n, [_, ..._] as sub) =>
            cb(n) ? List.rev_append(evalContainers(sub, cb), cur) : cur
          },
      nodeList,
    );
  List.rev(taken);
};

let rec printNode =
  fun
  | Node(t, []) => "<@" ++ t ++ "/>"
  | Node(t, [_, ..._] as nodeList) =>
    "<@" ++ t ++ ">" ++ printNodeList(nodeList)
  | Raw(r) => r

and printNodeList = nodes => {
  String.concat(~sep="", List.map(printNode, nodes));
};

let printMacro = nodeList => "raw-macro:" ++ printNodeList(nodeList);
