external http_get_with_status : string -> (int * string) = "caml_js_http_get_with_status"
let http_get url = snd (http_get_with_status url)

module Dom = struct
  open Js.Obj

  class type ['node] nodeList = object
    method item : int -> 'node t meth
    method length : int readonly_prop
  end

  class type node = object
    method nodeName : Js.string readonly_prop
    method nodeValue : Js.string Nullable.t readonly_prop
    method nodeType : int readonly_prop
    method parentNode : node t Nullable.t prop
    method childNodes : node nodeList t prop
    method firstChild : node t Nullable.t prop
    method lastChild : node t Nullable.t prop
    method previousSibling : node t Nullable.t prop
    method nextSibling : node t Nullable.t prop

    method insertBefore : node t -> node t Nullable.t -> node t meth
    method replaceChild : node t -> node t -> node t meth
    method removeChild : node t -> node t meth
    method appendChild : node t -> node t meth
    method hasChildNodes : Js.bool meth
    method cloneNode : Js.bool -> node t meth
  end

  let appendChild (p : #node t) (n : #node t) =
    ignore (p##appendChild ((n :> node t)))

  let removeChild (p : #node t) (n : #node t) =
    ignore (p##removeChild ((n :> node t)))

  let replaceChild (p : #node t) (n : #node t) (o : #node t) =
    ignore (p##replaceChild ((n :> node t), (o :> node t)))

  class type element = object
    inherit node
    method tagName : Js.string readonly_prop
    method getAttribute : Js.string -> Js.string meth
    method setAttribute : Js.string -> Js.string -> unit meth
    method removeAttribute : Js.string -> unit meth
    method hasAttribyte : Js.string -> Js.bool meth
  end

  class type characterData =
  object
    inherit node
    method data : Js.string prop
    method length : int readonly_prop
    method substringData : int -> int -> Js.string meth
    method appendData : Js.string -> unit meth
    method insertData : int -> Js.string -> unit meth
    method deleteData : int -> int -> unit meth
    method replaceData : int -> int -> Js.string meth
  end

  class type text = characterData

  class type documentFragment = node

  class type ['element] document = object
    inherit element
    method documentElement : 'element t readonly_prop
    method createDocumentFragment : documentFragment t meth
    method createElement : Js.string -> 'element t meth
    method createTextNode : Js.string -> text t meth
    method getElementById : Js.string -> 'element t Nullable.t meth
  end
end

module HTML = struct
  open Js.Obj

  class type cssStyleDeclaration = object
    method background : Js.string prop
    method backgroundAttachment : Js.string prop
    method backgroundColor : Js.string prop
    method backgroundImage : Js.string prop
    method backgroundPosition : Js.string prop
    method backgroundRepeat : Js.string prop
    method border : Js.string prop
    method borderBottom : Js.string prop
    method borderBottomColor : Js.string prop
    method borderBottomStyle : Js.string prop
    method borderBottomWidth : Js.string prop
    method borderCollapse : Js.string prop
    method borderColor : Js.string prop
    method borderLeft : Js.string prop
    method borderLeftColor : Js.string prop
    method borderLeftStyle : Js.string prop
    method borderLeftWidth : Js.string prop
    method borderRight : Js.string prop
    method borderRightColor : Js.string prop
    method borderRightStyle : Js.string prop
    method borderRightWidth : Js.string prop
    method borderSpacing : Js.string prop
    method borderStyle : Js.string prop
    method borderTop : Js.string prop
    method borderTopColor : Js.string prop
    method borderTopStyle : Js.string prop
    method borderTopWidth : Js.string prop
    method borderWidth : Js.string prop
    method bottom : Js.string prop
    method captionSide : Js.string prop
    method clear : Js.string prop
    method clip : Js.string prop
    method color : Js.string prop
    method content : Js.string prop
    method counterIncrement : Js.string prop
    method counterReset : Js.string prop
    method cssText : Js.string prop
    method cursor : Js.string prop
    method direction : Js.string prop
    method display : Js.string prop
    method emptyCells : Js.string prop
    method font : Js.string prop
    method fontFamily : Js.string prop
    method fontSize : Js.string prop
    method fontStyle : Js.string prop
    method fontVariant : Js.string prop
    method fontWeight : Js.string prop
    method height : Js.string prop
    method left : Js.string prop
    method letterSpacing : Js.string prop
    method lineHeight : Js.string prop
    method listStyle : Js.string prop
    method listStyleImage : Js.string prop
    method listStylePosition : Js.string prop
    method listStyleType : Js.string prop
    method margin : Js.string prop
    method marginBottom : Js.string prop
    method marginLeft : Js.string prop
    method marginRight : Js.string prop
    method marginTop : Js.string prop
    method maxHeight : Js.string prop
    method maxWidth : Js.string prop
    method minHeight : Js.string prop
    method minWidth : Js.string prop
    method opacity : Js.string prop (*FIX: may be absent*)
    method outline : Js.string prop
    method outlineColor : Js.string prop
    method outlineOffset : Js.string prop
    method outlineStyle : Js.string prop
    method outlineWidth : Js.string prop
    method overflow : Js.string prop
    method overflowX : Js.string prop
    method overflowY : Js.string prop
    method padding : Js.string prop
    method paddingBottom : Js.string prop
    method paddingLeft : Js.string prop
    method paddingRight : Js.string prop
    method paddingTop : Js.string prop
    method pageBreakAfter : Js.string prop
    method pageBreakBefore : Js.string prop
    method position : Js.string prop
    method right : Js.string prop
    method tableLayout : Js.string prop
    method textAlign : Js.string prop
    method textDecoration : Js.string prop
    method textIndent : Js.string prop
    method textTransform : Js.string prop
    method top : Js.string prop
    method verticalAlign : Js.string prop
    method visibility : Js.string prop
    method whiteSpace : Js.string prop
    method width : Js.string prop
    method wordSpacing : Js.string prop
    method zIndex : Js.string prop
  end

  class type event = object
    method _type : Js.string readonly_prop
    method target : element t Nullable.t readonly_prop
    method srcElement : element t Nullable.t readonly_prop
  end

  and mouseEvent = object
  end

  and element = object
    inherit Dom.element
    method id : Js.string prop
    method title : Js.string prop
    method lang : Js.string prop
    method dir : Js.string prop
    method className : Js.string prop
    method style : cssStyleDeclaration t prop

    method innerHTML : Js.string prop

    (* FIX: event? / might be undefined! *)
    method onclick : (unit -> Js.bool) Nullable.t prop
    method onmouseover : (unit -> Js.bool) Nullable.t prop
    method onmouseout : (unit -> Js.bool) Nullable.t prop
  end

(*XXX
  let event_target (e : #event t) =
    let targ =
      match Nullable.maybe e##target with
        Some t ->
          t
      | None ->
          match Nullable.maybe e##srcElement with
            Some t -> t
           | None  -> assert false
    in
    if targ##nodeType = 3 then targ##parentNode else targ
*)

  class type document = object
    inherit [element] Dom.document
    method title : Js.string prop
    method referrer : Js.string readonly_prop
    method domain : Js.string readonly_prop
    method _URL : Js.string readonly_prop
    method body : element prop
(*XXX
 readonly attribute HTMLCollection  images;
 readonly attribute HTMLCollection  applets;
 readonly attribute HTMLCollection  links;
 readonly attribute HTMLCollection  forms;
 readonly attribute HTMLCollection  anchors;
*)
    method cookie : Js.string prop
  end

  let unsafeCreateElement (doc : document t) name =
    Js.Obj.unsafe_coerce (doc##createElement(JsString.of_string name))

  class type ['node] collection = object
    method length : int readonly_prop
    method item : int -> 'node t Nullable.t meth
    method namedItem : Js.string -> 'node t Nullable.t meth
  end

  class type formElement = object
    inherit element
    method elements : element collection t readonly_prop
    method length : int readonly_prop
    method name : Js.string prop
    method acceptCharset : Js.string prop
    method action : Js.string prop
    method enctype : Js.string prop
    method _method : Js.string prop
    method target : Js.string prop
    method submit : unit meth
    method reset : unit meth
  end

  let createFormElement doc : formElement t = unsafeCreateElement doc "form"

  class type optGroupElement = object
    inherit element
    method disabled : Js.bool prop
    method label : Js.string prop
  end

  let createOptGroupElement doc : optGroupElement t =
    unsafeCreateElement doc "optgroup"

  class type optionElement = object
    inherit element
    method form : formElement t Nullable.t readonly_prop
    method defaultSelected : Js.bool prop
    method text : Js.string readonly_prop
    method index : int readonly_prop
    method disabled : bool prop
    method label : Js.string prop
    method selected : bool prop
    method value : Js.string prop
  end

  let createOptionElement doc : optionElement t =
    unsafeCreateElement doc "option"

  class type selectElement = object
    inherit element
    method _type : Js.string readonly_prop
    method selectedIndex : int prop
    method value : Js.string prop
    method length : int prop
    method form : formElement t Nullable.t readonly_prop
    method options : optionElement collection t readonly_prop
    method disabled : Js.bool prop
    method multiple : Js.bool prop
    method name : Js.string prop
    method size : int prop
    method tabIndex : int prop
    method add : #element -> #element Nullable.t -> unit meth
    method remove : int -> unit meth
    method blur : unit meth
    method focus : unit meth

    method onchange : (unit -> Js.bool) Nullable.t prop
  end

  let createSelectElement doc : selectElement t =
    unsafeCreateElement doc "select"

  class type inputElement = object
    inherit element
    method defaultValue : Js.string prop
    method defaultChecked : Js.string prop
    method form : formElement Nullable.t readonly_prop
    method accept : Js.string prop
    method accessKey : Js.string prop
    method align : Js.string prop
    method alt : Js.string prop
    method checked : Js.bool prop
    method disabled : Js.bool prop
    method maxLength : int prop
    method name : Js.string prop
    method readOnly : Js.bool prop
    method size : int prop
    method src : Js.string prop
    method tabIndex : int prop
    method _type : Js.string prop
    method useMap : Js.string prop
    method value : Js.string prop
    method blur : unit meth
    method focus : unit meth
    method select : unit meth
    method click : unit meth

    method onchange : (unit -> Js.bool) Nullable.t prop
  end

  let createInputElement doc : inputElement t = unsafeCreateElement doc "input"

  class type imageElement = object
    inherit element
    method alt : Js.string prop
    method height : int prop
    method isMap : Js.bool prop
    method longDesc : Js.string prop
    method src : Js.string prop
    method useMap : Js.string prop
    method width : int prop
  end

  let createImageElement doc : imageElement t = unsafeCreateElement doc "img"

  class type tableCellElement = object
    inherit element
    method cellIndex : int readonly_prop
    method abbr : Js.string prop
    method align : Js.string prop
    method axis : Js.string prop
    method ch : Js.string prop
    method chOff : Js.string prop
    method colSpan : int prop
    method headers : Js.string prop
    method rowSpan : int prop
    method scope : Js.string prop
    method vAlign : Js.string prop
  end

  class type tableRowElement = object
    inherit element
    method rowIndex : int readonly_prop
    method sectionRowIndex : int readonly_prop
    method cells : tableCellElement collection t readonly_prop
    method align : Js.string prop
    method ch : Js.string prop
    method chOff : Js.string prop
    method vAlign : Js.string prop
    method insertCell : int -> tableCellElement t meth
    method deleteCell : int -> unit meth
  end

  class type tableSectionElement = object
    inherit element
    method align : Js.string prop
    method ch : Js.string prop
    method chOff : Js.string prop
    method vAlign : Js.string prop
    method rows : tableRowElement collection t readonly_prop
    method insertRow : int -> tableRowElement t meth
    method deleteRow : int -> unit meth
  end

  class type tableCaptionElement = element

  class type tableElement = object
    inherit element
    method caption : tableCaptionElement t prop
    method tHead : tableSectionElement t prop
    method tFood : tableSectionElement t prop
    method rows : tableRowElement collection t readonly_prop
    method tbodies : tableSectionElement collection t readonly_prop
    method align : Js.string prop
    method border : Js.string prop
    method cellPadding : Js.string prop
    method cellSpacing : Js.string prop
    method frame : Js.string prop
    method rules : Js.string prop
    method summary : Js.string prop
    method width : Js.string prop
    method createTHead : tableSectionElement t meth
    method deleteTHead : unit meth
    method createTFoot : tableSectionElement t meth
    method deleteTFoot : unit meth
    method createCaption : tableCaptionElement t meth
    method deleteCaption : unit meth
    method insertRow : int -> tableRowElement t meth
    method deleteRow : int -> unit meth
  end

  let createTableElement doc : tableElement t = unsafeCreateElement doc "table"

  class type divElement = object
    inherit element
    method align : Js.string prop
  end

  let createDivElement doc : divElement t = unsafeCreateElement doc "div"

  let createH1Element doc : element t = unsafeCreateElement doc "h1"
  let createH2Element doc : element t = unsafeCreateElement doc "h2"
  let createH3Element doc : element t = unsafeCreateElement doc "h3"
  let createH4Element doc : element t = unsafeCreateElement doc "h4"
  let createH5Element doc : element t = unsafeCreateElement doc "h5"
  let createH6Element doc : element t = unsafeCreateElement doc "h6"

  let createBrElement doc : element t = unsafeCreateElement doc "br"

  type interval_id
  type timeout_id

  class type location = object
    method hash : Js.string prop
    method host : Js.string prop
    method hostname : Js.string prop
    method href : Js.string prop
    method pathname : Js.string prop
    method protocol : Js.string prop
    method search : Js.string prop

    method reload : Js.bool -> unit meth
    method replace : Js.string -> unit meth
  end

  class type window = object
    method onload : (unit -> unit) prop
    method onbeforeunload : (unit -> Js.string) prop
    method location : location t prop

    method alert : Js.string -> unit meth
    method confirm : Js.string -> Js.bool meth

    method setInterval : (unit -> unit) -> float -> interval_id meth
    method clearInterval : interval_id -> unit meth

    method setTimeout : (unit -> unit) -> float -> timeout_id meth
    method clearTimeout : timeout_id -> unit meth
  end
(*XXX Creation functions a la lablgtk... *)

  let window : window t = Js.extract (Js.variable "window")
  let document : document t = Js.extract (Js.variable "document")

end

module XMLHttpRequest = struct
  open Js.Obj

  type readyState = UNSENT | OPENED | HEADERS_RECEIVED | LOADING | DONE

  class type xmlHttpRequest = object
    method onreadystatechange : (unit -> unit) prop
    method readyState : readyState readonly_prop
    method _open :
      Js.string -> Js.string -> Js.bool ->
      Js.string Nullable.t -> Js.string Nullable.t -> unit meth
    method setRequestHeader : Js.string -> Js.string -> unit meth
    method send : Js.string Nullable.t -> unit meth
    method _send : #Dom.element #Dom.document -> unit meth (* overloading! *)
(*
  void send(Document data);
  void send([AllowAny] DOMString? data);
*)
    method abort : unit meth
    method status : int readonly_prop
    method statusText : Js.string readonly_prop
    method getResponseHeader : Js.string -> Js.string meth
    method getAllResponseHeaders : Js.string meth
    method responseText : Js.string readonly_prop
    method responseXML : Dom.element Dom.document t readonly_prop
  end

  external create : unit -> xmlHttpRequest t = "createXMLHTTPObject"

  let js = JsString.of_string

  let send_request url callback postData =
    let req = create () in
    let meth = js (if postData = Nullable.null then "GET" else "POST") in
    req##_open (meth, url, Js._true, Nullable.null, Nullable.null);
    req##setRequestHeader (js"User-Agent", js"XMLHTTP/1.0");
    begin match Nullable.maybe postData with
      None   -> ()
    | Some d -> req##setRequestHeader
                  (js"Content-type",js"application/x-www-form-urlencoded")
    end;
    req##onreadystatechange <-
      (fun () ->
         if
           req##readyState = DONE && (req##status = 200 || req##status = 304)
         then
           callback req);
    if req##readyState <> DONE then req##send (postData)

end
