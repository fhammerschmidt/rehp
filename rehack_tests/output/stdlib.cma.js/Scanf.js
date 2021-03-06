/**
 * @flow strict
 * Scanf
 */

// @ts-check


"use strict";

var runtime = require("../runtime/runtime.js");

function call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

function call2(f, a0, a1) {
  return f.length === 2 ? f(a0, a1) : runtime["caml_call_gen"](f, [a0,a1]);
}

function call3(f, a0, a1, a2) {
  return f.length === 3 ?
    f(a0, a1, a2) :
    runtime["caml_call_gen"](f, [a0,a1,a2]);
}

function call4(f, a0, a1, a2, a3) {
  return f.length === 4 ?
    f(a0, a1, a2, a3) :
    runtime["caml_call_gen"](f, [a0,a1,a2,a3]);
}

var caml_bytes_get = runtime["caml_bytes_get"];
var caml_int_of_string = runtime["caml_int_of_string"];
var caml_ml_string_length = runtime["caml_ml_string_length"];
var string = runtime["caml_new_string"];
var caml_string_get = runtime["caml_string_get"];
var caml_string_notequal = runtime["caml_string_notequal"];
var caml_trampoline = runtime["caml_trampoline"];
var caml_trampoline_return = runtime["caml_trampoline_return"];
var caml_wrap_thrown_exception = runtime["caml_wrap_thrown_exception"];
var caml_wrap_thrown_exception_reraise = runtime
 ["caml_wrap_thrown_exception_reraise"];
var cst_end_of_input_not_found = string("end of input not found");
var cst_scanf_bad_conversion_a = string('scanf: bad conversion "%a"');
var cst_scanf_bad_conversion_t = string('scanf: bad conversion "%t"');
var cst_scanf_missing_reader = string("scanf: missing reader");
var cst_scanf_bad_conversion_custom_converter = string(
  'scanf: bad conversion "%?" (custom converter)'
);
var cst_scanf_bad_conversion = string('scanf: bad conversion "%*"');
var cst_scanf_bad_conversion__1 = string('scanf: bad conversion "%*"');
var cst_scanf_bad_conversion__0 = string('scanf: bad conversion "%-"');
var cst_scanf_bad_conversion__2 = string('scanf: bad conversion "%*"');
var cst__2 = string('"');
var cst__3 = string('"');
var cst__1 = string('"');
var cst_in_format = string(' in format "');
var cst_an = string("an");
var cst_x = string("x");
var cst_nfinity = string("nfinity");
var cst_digits = string("digits");
var cst_decimal_digits = string("decimal digits");
var cst_0b = string("0b");
var cst_0o = string("0o");
var cst_0u = string("0u");
var cst_0x = string("0x");
var cst_false = string("false");
var cst_true = string("true");
var cst_not_a_valid_float_in_hexadecimal_notation = string(
  "not a valid float in hexadecimal notation"
);
var cst_no_dot_or_exponent_part_found_in_float_token = string(
  "no dot or exponent part found in float token"
);
var cst__0 = string("-");
var cst_unnamed_function = string("unnamed function");
var cst_unnamed_character_string = string("unnamed character string");
var cst_unnamed_Pervasives_input_channel = string(
  "unnamed Pervasives input channel"
);
var cst = string("-");
var cst_Scanf_Scan_failure = string("Scanf.Scan_failure");
var cst_binary = string("binary");
var cst_octal = string("octal");
var cst_hexadecimal = string("hexadecimal");
var cst_a_Char = string("a Char");
var cst_a_String = string("a String");
var CamlinternalFormat = require("./CamlinternalFormat.js");
var CamlinternalFormatBasics = require("./CamlinternalFormatBasics.js");
var String = require("./String.js");
var Failure = require("../runtime/Failure.js");
var Pervasives = require("./Pervasives.js");
var Assert_failure = require("../runtime/Assert_failure.js");
var Buffer = require("./Buffer.js");
var End_of_file = require("../runtime/End_of_file.js");
var Invalid_argument = require("../runtime/Invalid_argument.js");
var Printf = require("./Printf.js");
var List = require("./List.js");
var Not_found = require("../runtime/Not_found.js");
var r_ = [0,91];
var q_ = [0,123];
var s_ = [0,string("scanf.ml"),1455,13];
var t_ = [0,[3,0,[10,0]],string("%S%!")];
var p_ = [0,37,string("")];
var o_ = [
  0,
  [
    11,
    string("scanf: bad input at char number "),
    [4,3,0,0,[11,string(": "),[2,0,0]]]
  ],
  string("scanf: bad input at char number %i: %s")
];
var n_ = [
  0,
  [11,string("the character "),[1,[11,string(" cannot start a boolean"),0]]],
  string("the character %C cannot start a boolean")
];
var m_ = [
  0,
  [11,string("bad character hexadecimal encoding \\"),[0,[0,0]]],
  string("bad character hexadecimal encoding \\%c%c")
];
var l_ = [
  0,
  [11,string("bad character decimal encoding \\"),[0,[0,[0,0]]]],
  string("bad character decimal encoding \\%c%c%c")
];
var k_ = [
  0,
  [
    11,
    string("character "),
    [1,[11,string(" is not a valid "),[2,0,[11,string(" digit"),0]]]]
  ],
  string("character %C is not a valid %s digit")
];
var j_ = [
  0,
  [11,string("character "),[1,[11,string(" is not a decimal digit"),0]]],
  string("character %C is not a decimal digit")
];
var i_ = [0,string("scanf.ml"),555,9];
var h_ = [
  0,
  [11,string("invalid boolean '"),[2,0,[12,39,0]]],
  string("invalid boolean '%s'")
];
var g_ = [
  0,
  [11,string("looking for "),[1,[11,string(", found "),[1,0]]]],
  string("looking for %C, found %C")
];
var f_ = [
  0,
  [
    11,
    string("scanning of "),
    [
      2,
      0,
      [
        11,
        string(" failed: premature end of file occurred before end of token"),
        0
      ]
    ]
  ],
  string(
    "scanning of %s failed: premature end of file occurred before end of token"
  )
];
var e_ = [
  0,
  [
    11,
    string("scanning of "),
    [
      2,
      0,
      [11,string(" failed: the specified length was too short for token"),0]
    ]
  ],
  string("scanning of %s failed: the specified length was too short for token"
  )
];
var d_ = [
  0,
  [11,string("illegal escape character "),[1,0]],
  string("illegal escape character %C")
];
var null_char = 0;

function next_char(ib) {
  var c;
  try {
    c = call1(ib[7], 0);
    ib[2] = c;
    ib[3] = 1;
    ib[4] = ib[4] + 1 | 0;
    if (10 === c) {ib[5] = ib[5] + 1 | 0;}
    return c;
  }
  catch(bH_) {
    bH_ = runtime["caml_wrap_exception"](bH_);
    if (bH_ === End_of_file) {
      ib[2] = null_char;
      ib[3] = 0;
      ib[1] = 1;
      return null_char;
    }
    throw caml_wrap_thrown_exception_reraise(bH_);
  }
}

function peek_char(ib) {return ib[3] ? ib[2] : next_char(ib);}

function checked_peek_char(ib) {
  var c = peek_char(ib);
  if (ib[1]) {throw caml_wrap_thrown_exception(End_of_file);}
  return c;
}

function end_of_input(ib) {peek_char(ib);return ib[1];}

function eof(ib) {return ib[1];}

function beginning_of_input(ib) {return 0 === ib[4] ? 1 : 0;}

function name_of_input(ib) {
  var fname;
  var bG_ = ib[9];
  if (typeof bG_ === "number") return 0 === bG_ ?
    cst_unnamed_function :
    cst_unnamed_character_string;
  else {
    if (0 === bG_[0]) {return cst_unnamed_Pervasives_input_channel;}
    fname = bG_[1];
    return fname;
  }
}

function char_count(ib) {return ib[3] ? ib[4] + -1 | 0 : ib[4];}

function line_count(ib) {return ib[5];}

function reset_token(ib) {return call1(Buffer[9], ib[8]);}

function invalidate_current_char(ib) {ib[3] = 0;return 0;}

function token_string(ib) {
  var token_buffer = ib[8];
  var tok = call1(Buffer[2], token_buffer);
  call1(Buffer[8], token_buffer);
  ib[6] = ib[6] + 1 | 0;
  return tok;
}

function token_count(ib) {return ib[6];}

function skip_char(width, ib) {invalidate_current_char(ib);return width;}

function ignore_char(width, ib) {return skip_char(width + -1 | 0, ib);}

function store_char(width, ib, c) {
  call2(Buffer[10], ib[8], c);
  return ignore_char(width, ib);
}

var default_token_buffer_size = 1024;

function create(iname, next) {
  return [
    0,
    0,
    null_char,
    0,
    0,
    0,
    0,
    next,
    call1(Buffer[1], default_token_buffer_size),
    iname
  ];
}

function from_string(s) {
  var i = [0,0];
  var len = caml_ml_string_length(s);
  function next(param) {
    if (len <= i[1]) {throw caml_wrap_thrown_exception(End_of_file);}
    var c = caml_string_get(s, i[1]);
    i[1] += 1;
    return c;
  }
  return create(1, next);
}

var a_ = 0;

function from_function(bF_) {return create(a_, bF_);}

var len = 1024;

function scan_close_at_end(ic) {
  call1(Pervasives[81], ic);
  throw caml_wrap_thrown_exception(End_of_file);
}

function scan_raise_at_end(ic) {
  throw caml_wrap_thrown_exception(End_of_file);
}

function from_ic(scan_close_ic, iname, ic) {
  var buf = runtime["caml_create_bytes"](1024);
  var i = [0,0];
  var lim = [0,0];
  var eof = [0,0];
  function next(param) {
    var c;
    if (i[1] < lim[1]) {c = caml_bytes_get(buf, i[1]);i[1] += 1;return c;}
    if (eof[1]) {throw caml_wrap_thrown_exception(End_of_file);}
    lim[1] = call4(Pervasives[72], ic, buf, 0, len);
    if (0 === lim[1]) {eof[1] = 1;return call1(scan_close_ic, ic);}
    i[1] = 1;
    return caml_bytes_get(buf, 0);
  }
  return create(iname, next);
}

function from_ic_close_at_end(bD_, bE_) {
  return from_ic(scan_close_at_end, bD_, bE_);
}

function from_ic_raise_at_end(bB_, bC_) {
  return from_ic(scan_raise_at_end, bB_, bC_);
}

var stdin = from_ic(scan_raise_at_end, [1,cst,Pervasives[26]], Pervasives[26]);

function open_in_file(open_in, fname) {
  var ic;
  if (caml_string_notequal(fname, cst__0)) {
    ic = call1(open_in, fname);
    return from_ic_close_at_end([1,fname,ic], ic);
  }
  return stdin;
}

var b_ = Pervasives[67];

function open_in(bA_) {return open_in_file(b_, bA_);}

var c_ = Pervasives[68];

function open_in_bin(bz_) {return open_in_file(c_, bz_);}

function from_channel(ic) {return from_ic_raise_at_end([0,ic], ic);}

function close_in(ib) {
  var ic;
  var ic__0;
  var by_ = ib[9];
  if (typeof by_ === "number") return 0;
  else {
    if (0 === by_[0]) {ic = by_[1];return call1(Pervasives[81], ic);}
    ic__0 = by_[2];
    return call1(Pervasives[81], ic__0);
  }
}

var memo = [0,0];

function memo_from_ic(scan_close_ic, ic) {
  var bw_;
  var ib;
  try {bw_ = call2(List[40], ic, memo[1]);return bw_;}
  catch(bx_) {
    bx_ = runtime["caml_wrap_exception"](bx_);
    if (bx_ === Not_found) {
      ib = from_ic(scan_close_ic, [0,ic], ic);
      memo[1] = [0,[0,ic,ib],memo[1]];
      return ib;
    }
    throw caml_wrap_thrown_exception_reraise(bx_);
  }
}

function memo_from_channel(bv_) {return memo_from_ic(scan_raise_at_end, bv_);}

var Scan_failure = [248,cst_Scanf_Scan_failure,runtime["caml_fresh_oo_id"](0)];

function bad_input(s) {throw caml_wrap_thrown_exception([0,Scan_failure,s]);}

function bad_input_escape(c) {return bad_input(call2(Printf[4], d_, c));}

function bad_token_length(message) {
  return bad_input(call2(Printf[4], e_, message));
}

function bad_end_of_input(message) {
  return bad_input(call2(Printf[4], f_, message));
}

function bad_float(param) {
  return bad_input(cst_no_dot_or_exponent_part_found_in_float_token);
}

function bad_hex_float(param) {
  return bad_input(cst_not_a_valid_float_in_hexadecimal_notation);
}

function character_mismatch_err(c, ci) {return call3(Printf[4], g_, c, ci);}

function character_mismatch(c, ci) {
  return bad_input(character_mismatch_err(c, ci));
}

function skip_whites(ib) {
  var switch__0;
  var bu_;
  var bt_;
  var c;
  for (; ; ) {
    c = peek_char(ib);
    bt_ = 1 - eof(ib);
    if (bt_) {
      bu_ = c + -9 | 0;
      switch__0 =
        4 < bu_ >>> 0 ? 23 === bu_ ? 1 : 0 : 1 < (bu_ + -2 | 0) >>> 0 ? 1 : 0;
      if (switch__0) {invalidate_current_char(ib);continue;}
      return 0;
    }
    return bt_;
  }
}

function check_this_char(ib, c) {
  var ci = checked_peek_char(ib);
  return ci === c ? invalidate_current_char(ib) : character_mismatch(c, ci);
}

function check_newline(ib) {
  var ci = checked_peek_char(ib);
  if (10 === ci) {return invalidate_current_char(ib);}
  if (13 === ci) {invalidate_current_char(ib);return check_this_char(ib, 10);}
  return character_mismatch(10, ci);
}

function check_char(ib, c) {
  return 10 === c ?
    check_newline(ib) :
    32 === c ? skip_whites(ib) : check_this_char(ib, c);
}

function token_char(ib) {return caml_string_get(token_string(ib), 0);}

function token_bool(ib) {
  var s = token_string(ib);
  return caml_string_notequal(s, cst_false) ?
    caml_string_notequal(s, cst_true) ? bad_input(call2(Printf[4], h_, s)) : 1 :
    0;
}

function integer_conversion_of_char(param) {
  var switcher = param + -88 | 0;
  if (! (32 < switcher >>> 0)) {
    switch (switcher) {
      case 10:
        return 0;
      case 12:
        return 1;
      case 17:
        return 2;
      case 23:
        return 3;
      case 29:
        return 4;
      case 0:
      case 32:return 5
      }
  }
  throw caml_wrap_thrown_exception([0,Assert_failure,i_]);
}

function token_int_literal(conv, ib) {
  var bs_;
  var br_;
  var bq_;
  var tok;
  var bp_;
  switch (conv) {
    case 0:
      bp_ = token_string(ib);
      tok = call2(Pervasives[16], cst_0b, bp_);
      break;
    case 3:
      bq_ = token_string(ib);
      tok = call2(Pervasives[16], cst_0o, bq_);
      break;
    case 4:
      br_ = token_string(ib);
      tok = call2(Pervasives[16], cst_0u, br_);
      break;
    case 5:
      bs_ = token_string(ib);
      tok = call2(Pervasives[16], cst_0x, bs_);
      break;
    default:
      tok = token_string(ib)
    }
  var l = caml_ml_string_length(tok);
  if (0 !== l) {
    if (43 === caml_string_get(tok, 0)) {
      return call3(String[4], tok, 1, l + -1 | 0);
    }
  }
  return tok;
}

function token_int(conv, ib) {
  return caml_int_of_string(token_int_literal(conv, ib));
}

function token_float(ib) {
  return runtime["caml_float_of_string"](token_string(ib));
}

function token_nativeint(conv, ib) {
  return caml_int_of_string(token_int_literal(conv, ib));
}

function token_int32(conv, ib) {
  return caml_int_of_string(token_int_literal(conv, ib));
}

function token_int64(conv, ib) {
  return runtime["caml_int64_of_string"](token_int_literal(conv, ib));
}

function scan_decimal_digit_star(width, ib) {
  var c;
  var width__1;
  var width__2;
  var width__0 = width;
  for (; ; ) {
    if (0 === width__0) {return width__0;}
    c = peek_char(ib);
    if (eof(ib)) {return width__0;}
    if (58 <= c) {
      if (95 === c) {
        width__1 = ignore_char(width__0, ib);
        width__0 = width__1;
        continue;
      }
    }
    else if (48 <= c) {
      width__2 = store_char(width__0, ib, c);
      width__0 = width__2;
      continue;
    }
    return width__0;
  }
}

function scan_decimal_digit_plus(width, ib) {
  if (0 === width) {return bad_token_length(cst_decimal_digits);}
  var c = checked_peek_char(ib);
  var switcher = c + -48 | 0;
  if (9 < switcher >>> 0) {return bad_input(call2(Printf[4], j_, c));}
  var width__0 = store_char(width, ib, c);
  return scan_decimal_digit_star(width__0, ib);
}

function scan_digit_star(digitp, width, ib) {
  function scan_digits(width, ib) {
    var c;
    var width__1;
    var width__2;
    var width__0 = width;
    for (; ; ) {
      if (0 === width__0) {return width__0;}
      c = peek_char(ib);
      if (eof(ib)) {return width__0;}
      if (call1(digitp, c)) {
        width__1 = store_char(width__0, ib, c);
        width__0 = width__1;
        continue;
      }
      if (95 === c) {
        width__2 = ignore_char(width__0, ib);
        width__0 = width__2;
        continue;
      }
      return width__0;
    }
  }
  return scan_digits(width, ib);
}

function scan_digit_plus(basis, digitp, width, ib) {
  var width__0;
  if (0 === width) {return bad_token_length(cst_digits);}
  var c = checked_peek_char(ib);
  if (call1(digitp, c)) {
    width__0 = store_char(width, ib, c);
    return scan_digit_star(digitp, width__0, ib);
  }
  return bad_input(call3(Printf[4], k_, c, basis));
}

function is_binary_digit(param) {
  var switcher = param + -48 | 0;
  return 1 < switcher >>> 0 ? 0 : 1;
}

function scan_binary_int(bn_, bo_) {
  return scan_digit_plus(cst_binary, is_binary_digit, bn_, bo_);
}

function is_octal_digit(param) {
  var switcher = param + -48 | 0;
  return 7 < switcher >>> 0 ? 0 : 1;
}

function scan_octal_int(bl_, bm_) {
  return scan_digit_plus(cst_octal, is_octal_digit, bl_, bm_);
}

function is_hexa_digit(param) {
  var bk_ = param + -48 | 0;
  var switch__0 = 22 < bk_ >>> 0 ?
    5 < (bk_ + -49 | 0) >>> 0 ? 0 : 1 :
    6 < (bk_ + -10 | 0) >>> 0 ? 1 : 0;
  return switch__0 ? 1 : 0;
}

function scan_hexadecimal_int(bi_, bj_) {
  return scan_digit_plus(cst_hexadecimal, is_hexa_digit, bi_, bj_);
}

function scan_sign(width, ib) {
  var c = checked_peek_char(ib);
  var switcher = c + -43 | 0;
  if (! (2 < switcher >>> 0)) {
    switch (switcher) {
      case 0:
        return store_char(width, ib, c);
      case 1:break;
      default:
        return store_char(width, ib, c)
      }
  }
  return width;
}

function scan_optionally_signed_decimal_int(width, ib) {
  var width__0 = scan_sign(width, ib);
  return scan_decimal_digit_plus(width__0, ib);
}

function scan_unsigned_int(width, ib) {
  var width__0;
  var c__0;
  var switch__0;
  var c = checked_peek_char(ib);
  if (48 === c) {
    width__0 = store_char(width, ib, c);
    if (0 === width__0) {return width__0;}
    c__0 = peek_char(ib);
    if (eof(ib)) {return width__0;}
    if (99 <= c__0) {
      if (111 === c__0) {
        return scan_octal_int(store_char(width__0, ib, c__0), ib);
      }
      switch__0 = 120 === c__0 ? 1 : 0;
    }
    else if (88 === c__0) switch__0 = 1;
    else {
      if (98 <= c__0) {
        return scan_binary_int(store_char(width__0, ib, c__0), ib);
      }
      switch__0 = 0;
    }
    return switch__0 ?
      scan_hexadecimal_int(store_char(width__0, ib, c__0), ib) :
      scan_decimal_digit_star(width__0, ib);
  }
  return scan_decimal_digit_plus(width, ib);
}

function scan_optionally_signed_int(width, ib) {
  var width__0 = scan_sign(width, ib);
  return scan_unsigned_int(width__0, ib);
}

function scan_int_conversion(conv, width, ib) {
  switch (conv) {
    case 0:
      return scan_binary_int(width, ib);
    case 1:
      return scan_optionally_signed_decimal_int(width, ib);
    case 2:
      return scan_optionally_signed_int(width, ib);
    case 3:
      return scan_octal_int(width, ib);
    case 4:
      return scan_decimal_digit_plus(width, ib);
    default:
      return scan_hexadecimal_int(width, ib)
    }
}

function scan_fractional_part(width, ib) {
  if (0 === width) {return width;}
  var c = peek_char(ib);
  if (eof(ib)) {return width;}
  var switcher = c + -48 | 0;
  return 9 < switcher >>> 0 ?
    width :
    scan_decimal_digit_star(store_char(width, ib, c), ib);
}

function scan_exponent_part(width, ib) {
  if (0 === width) {return width;}
  var c = peek_char(ib);
  if (eof(ib)) {return width;}
  if (69 !== c) {if (101 !== c) {return width;}}
  return scan_optionally_signed_decimal_int(store_char(width, ib, c), ib);
}

function scan_integer_part(width, ib) {
  var width__0 = scan_sign(width, ib);
  return scan_decimal_digit_star(width__0, ib);
}

function scan_float(width, precision, ib) {
  var width__1;
  var precision__0;
  var width__2;
  var width__0 = scan_integer_part(width, ib);
  if (0 === width__0) {return [0,width__0,precision];}
  var c = peek_char(ib);
  if (eof(ib)) {return [0,width__0,precision];}
  if (46 === c) {
    width__1 = store_char(width__0, ib, c);
    precision__0 = call2(Pervasives[4], width__1, precision);
    width__2 =
      width__1 - (precision__0 - scan_fractional_part(precision__0, ib) | 0) | 0;
    return [0,scan_exponent_part(width__2, ib),precision__0];
  }
  return [0,scan_exponent_part(width__0, ib),precision];
}

function check_case_insensitive_string(width, ib, error, str) {
  var i;
  var c;
  var bg_;
  var bh_;
  function lowercase(c) {
    var switcher = c + -65 | 0;
    return 25 < switcher >>> 0 ?
      c :
      call1(Pervasives[17], (c - 65 | 0) + 97 | 0);
  }
  var len = caml_ml_string_length(str);
  var width__0 = [0,width];
  var bf_ = len + -1 | 0;
  var be_ = 0;
  if (! (bf_ < 0)) {
    i = be_;
    for (; ; ) {
      c = peek_char(ib);
      bg_ = lowercase(caml_string_get(str, i));
      if (lowercase(c) !== bg_) {call1(error, 0);}
      if (0 === width__0[1]) {call1(error, 0);}
      width__0[1] = store_char(width__0[1], ib, c);
      bh_ = i + 1 | 0;
      if (bf_ !== i) {i = bh_;continue;}
      break;
    }
  }
  return width__0[1];
}

function scan_hex_float(width, precision, ib) {
  var switcher;
  var width__1;
  var a6_;
  var a7_;
  var width__2;
  var a8_;
  var a9_;
  var width__3;
  var a__;
  var ba_;
  var width__4;
  var match;
  var bb_;
  var width__5;
  var c__0;
  var width__6;
  var width__7;
  var width__8;
  var c__1;
  var width__9;
  var bc_;
  var bd_;
  var match__0;
  var width__10;
  var precision__0;
  var switch__0;
  var switch__1;
  var switch__2;
  var switch__3;
  var a2_ = 0 === width ? 1 : 0;
  var a3_ = a2_ ? a2_ : end_of_input(ib);
  if (a3_) {bad_hex_float(0);}
  var width__0 = scan_sign(width, ib);
  var a4_ = 0 === width__0 ? 1 : 0;
  var a5_ = a4_ ? a4_ : end_of_input(ib);
  if (a5_) {bad_hex_float(0);}
  var c = peek_char(ib);
  if (78 <= c) {
    switcher = c + -79 | 0;
    if (30 < switcher >>> 0) {
      if (! (32 <= switcher)) {
        width__1 = store_char(width__0, ib, c);
        a6_ = 0 === width__1 ? 1 : 0;
        a7_ = a6_ ? a6_ : end_of_input(ib);
        if (a7_) {bad_hex_float(0);}
        return check_case_insensitive_string(
          width__1,
          ib,
          bad_hex_float,
          cst_an
        );
      }
      switch__0 = 0;
    }
    else switch__0 = 26 === switcher ? 1 : 0;
  }
  else {
    if (48 === c) {
      width__3 = store_char(width__0, ib, c);
      a__ = 0 === width__3 ? 1 : 0;
      ba_ = a__ ? a__ : end_of_input(ib);
      if (ba_) {bad_hex_float(0);}
      width__4 =
        check_case_insensitive_string(width__3, ib, bad_hex_float, cst_x);
      if (0 !== width__4) {
        if (! end_of_input(ib)) {
          match = peek_char(ib);
          bb_ = match + -46 | 0;
          switch__1 =
            34 < bb_ >>> 0 ?
              66 === bb_ ? 1 : 0 :
              32 < (bb_ + -1 | 0) >>> 0 ? 1 : 0;
          width__5 = switch__1 ? width__4 : scan_hexadecimal_int(width__4, ib);
          if (0 !== width__5) {
            if (! end_of_input(ib)) {
              c__0 = peek_char(ib);
              if (46 === c__0) {
                width__6 = store_char(width__5, ib, c__0);
                if (0 === width__6) switch__2 = 0;
                else if (end_of_input(ib)) switch__2 = 0;
                else {
                  match__0 = peek_char(ib);
                  if (80 === match__0) switch__3 = 0;
                  else if (112 === match__0) switch__3 = 0;
                  else {
                    precision__0 = call2(Pervasives[4], width__6, precision);
                    width__10 =
                      width__6 -
                        (precision__0 - scan_hexadecimal_int(precision__0, ib) | 0) | 0;
                    switch__3 = 1;
                  }
                  if (! switch__3) {width__10 = width__6;}
                  width__7 = width__10;
                  switch__2 = 1;
                }
                if (! switch__2) {width__7 = width__6;}
                width__8 = width__7;
              }
              else width__8 = width__5;
              if (0 !== width__8) {
                if (! end_of_input(ib)) {
                  c__1 = peek_char(ib);
                  if (80 !== c__1) {if (112 !== c__1) {return width__8;}}
                  width__9 = store_char(width__8, ib, c__1);
                  bc_ = 0 === width__9 ? 1 : 0;
                  bd_ = bc_ ? bc_ : end_of_input(ib);
                  if (bd_) {bad_hex_float(0);}
                  return scan_optionally_signed_decimal_int(width__9, ib);
                }
              }
              return width__8;
            }
          }
          return width__5;
        }
      }
      return width__4;
    }
    switch__0 = 73 === c ? 1 : 0;
  }
  if (switch__0) {
    width__2 = store_char(width__0, ib, c);
    a8_ = 0 === width__2 ? 1 : 0;
    a9_ = a8_ ? a8_ : end_of_input(ib);
    if (a9_) {bad_hex_float(0);}
    return check_case_insensitive_string(
      width__2,
      ib,
      bad_hex_float,
      cst_nfinity
    );
  }
  return bad_hex_float(0);
}

function scan_caml_float_rest(width, precision, ib) {
  var width__1;
  var precision__0;
  var width_precision;
  var frac_width;
  var width__2;
  var switcher__0;
  var aY_ = 0 === width ? 1 : 0;
  var aZ_ = aY_ ? aY_ : end_of_input(ib);
  if (aZ_) {bad_float(0);}
  var width__0 = scan_decimal_digit_star(width, ib);
  var a0_ = 0 === width__0 ? 1 : 0;
  var a1_ = a0_ ? a0_ : end_of_input(ib);
  if (a1_) {bad_float(0);}
  var c = peek_char(ib);
  var switcher = c + -69 | 0;
  if (32 < switcher >>> 0) {
    if (-23 === switcher) {
      width__1 = store_char(width__0, ib, c);
      precision__0 = call2(Pervasives[4], width__1, precision);
      width_precision = scan_fractional_part(precision__0, ib);
      frac_width = precision__0 - width_precision | 0;
      width__2 = width__1 - frac_width | 0;
      return scan_exponent_part(width__2, ib);
    }
  }
  else {
    switcher__0 = switcher + -1 | 0;
    if (30 < switcher__0 >>> 0) {return scan_exponent_part(width__0, ib);}
  }
  return bad_float(0);
}

function scan_caml_float(width, precision, ib) {
  var width__1;
  var aO_;
  var aP_;
  var width__2;
  var aQ_;
  var aR_;
  var c__0;
  var width__3;
  var aS_;
  var aT_;
  var width__4;
  var aU_;
  var aV_;
  var c__1;
  var switcher;
  var width__5;
  var width__6;
  var width__7;
  var width__8;
  var c__2;
  var width__9;
  var aW_;
  var aX_;
  var match;
  var width__10;
  var precision__0;
  var switcher__0;
  var switch__0;
  var switch__1;
  var switch__2;
  var aK_ = 0 === width ? 1 : 0;
  var aL_ = aK_ ? aK_ : end_of_input(ib);
  if (aL_) {bad_float(0);}
  var width__0 = scan_sign(width, ib);
  var aM_ = 0 === width__0 ? 1 : 0;
  var aN_ = aM_ ? aM_ : end_of_input(ib);
  if (aN_) {bad_float(0);}
  var c = peek_char(ib);
  if (49 <= c) {
    if (! (58 <= c)) {
      width__1 = store_char(width__0, ib, c);
      aO_ = 0 === width__1 ? 1 : 0;
      aP_ = aO_ ? aO_ : end_of_input(ib);
      if (aP_) {bad_float(0);}
      return scan_caml_float_rest(width__1, precision, ib);
    }
  }
  else if (48 <= c) {
    width__2 = store_char(width__0, ib, c);
    aQ_ = 0 === width__2 ? 1 : 0;
    aR_ = aQ_ ? aQ_ : end_of_input(ib);
    if (aR_) {bad_float(0);}
    c__0 = peek_char(ib);
    if (88 !== c__0) {
      if (120 !== c__0) {
        return scan_caml_float_rest(width__2, precision, ib);
      }
    }
    width__3 = store_char(width__2, ib, c__0);
    aS_ = 0 === width__3 ? 1 : 0;
    aT_ = aS_ ? aS_ : end_of_input(ib);
    if (aT_) {bad_float(0);}
    width__4 = scan_hexadecimal_int(width__3, ib);
    aU_ = 0 === width__4 ? 1 : 0;
    aV_ = aU_ ? aU_ : end_of_input(ib);
    if (aV_) {bad_float(0);}
    c__1 = peek_char(ib);
    switcher = c__1 + -80 | 0;
    if (32 < switcher >>> 0) if (-34 === switcher) {
      width__5 = store_char(width__4, ib, c__1);
      if (0 === width__5) switch__1 = 0;
      else if (end_of_input(ib)) switch__1 = 0;
      else {
        match = peek_char(ib);
        if (80 === match) switch__2 = 0;
        else if (112 === match) switch__2 = 0;
        else {
          precision__0 = call2(Pervasives[4], width__5, precision);
          width__10 =
            width__5 -
              (precision__0 - scan_hexadecimal_int(precision__0, ib) | 0) | 0;
          switch__2 = 1;
        }
        if (! switch__2) {width__10 = width__5;}
        width__6 = width__10;
        switch__1 = 1;
      }
      if (! switch__1) {width__6 = width__5;}
      width__7 = width__6;
      switch__0 = 0;
    }
    else switch__0 = 1;
    else {
      switcher__0 = switcher + -1 | 0;
      if (30 < switcher__0 >>> 0) {
        width__7 = width__4;
        switch__0 = 0;
      }
      else switch__0 = 1;
    }
    width__8 = switch__0 ? bad_float(0) : width__7;
    if (0 !== width__8) {
      if (! end_of_input(ib)) {
        c__2 = peek_char(ib);
        if (80 !== c__2) {if (112 !== c__2) {return width__8;}}
        width__9 = store_char(width__8, ib, c__2);
        aW_ = 0 === width__9 ? 1 : 0;
        aX_ = aW_ ? aW_ : end_of_input(ib);
        if (aX_) {bad_hex_float(0);}
        return scan_optionally_signed_decimal_int(width__9, ib);
      }
    }
    return width__8;
  }
  return bad_float(0);
}

function scan_string(stp, width, ib) {
  function loop(width) {
    var c;
    var c__0;
    var width__1;
    var aJ_;
    var width__2;
    var switch__0;
    var width__0 = width;
    for (; ; ) {
      if (0 === width__0) {return width__0;}
      c = peek_char(ib);
      if (eof(ib)) {return width__0;}
      if (stp) {
        c__0 = stp[1];
        if (c === c__0) {return skip_char(width__0, ib);}
        width__1 = store_char(width__0, ib, c);
        width__0 = width__1;
        continue;
      }
      aJ_ = c + -9 | 0;
      switch__0 =
        4 < aJ_ >>> 0 ? 23 === aJ_ ? 1 : 0 : 1 < (aJ_ + -2 | 0) >>> 0 ? 1 : 0;
      if (switch__0) {return width__0;}
      width__2 = store_char(width__0, ib, c);
      width__0 = width__2;
      continue;
    }
  }
  return loop(width);
}

function scan_char(width, ib) {
  return store_char(width, ib, checked_peek_char(ib));
}

function char_for_backslash(c) {
  var switcher;
  if (110 <= c) {
    if (! (117 <= c)) {
      switcher = c + -110 | 0;
      switch (switcher) {case 0:return 10;case 4:return 13;case 6:return 9}
    }
  }
  else if (98 === c) {return 8;}
  return c;
}

function decimal_value_of_char(c) {return c - 48 | 0;}

function char_for_decimal_code(c0, c1, c2) {
  var aH_ = decimal_value_of_char(c2);
  var aI_ = 10 * decimal_value_of_char(c1) | 0;
  var c = ((100 * decimal_value_of_char(c0) | 0) + aI_ | 0) + aH_ | 0;
  if (0 <= c) {if (! (255 < c)) {return call1(Pervasives[17], c);}}
  return bad_input(call4(Printf[4], l_, c0, c1, c2));
}

function hexadecimal_value_of_char(d) {
  return 97 <= d ? d + -87 | 0 : 65 <= d ? d + -55 | 0 : d - 48 | 0;
}

function char_for_hexadecimal_code(c1, c2) {
  var aG_ = hexadecimal_value_of_char(c2);
  var c = (16 * hexadecimal_value_of_char(c1) | 0) + aG_ | 0;
  if (0 <= c) {if (! (255 < c)) {return call1(Pervasives[17], c);}}
  return bad_input(call3(Printf[4], m_, c1, c2));
}

function check_next_char(message, width, ib) {
  if (0 === width) {return bad_token_length(message);}
  var c = peek_char(ib);
  return eof(ib) ? bad_end_of_input(message) : c;
}

function check_next_char_for_char(aE_, aF_) {
  return check_next_char(cst_a_Char, aE_, aF_);
}

function check_next_char_for_string(aC_, aD_) {
  return check_next_char(cst_a_String, aC_, aD_);
}

function scan_backslash_char(width, ib) {
  var switcher;
  var get_digit;
  var c1;
  var c2;
  var get_digit__0;
  var c1__0;
  var c2__0;
  var switch__0;
  var c = check_next_char_for_char(width, ib);
  if (40 <= c) if (58 <= c) {
    switcher = c + -92 | 0;
    if (28 < switcher >>> 0) switch__0 = 0;
    else switch (switcher) {
      case 28:
        get_digit =
          function(param) {
            var c = next_char(ib);
            var aB_ = c + -48 | 0;
            var switch__0 = 22 < aB_ >>> 0 ?
              5 < (aB_ + -49 | 0) >>> 0 ? 0 : 1 :
              6 < (aB_ + -10 | 0) >>> 0 ? 1 : 0;
            return switch__0 ? c : bad_input_escape(c);
          };
        c1 = get_digit(0);
        c2 = get_digit(0);
        return store_char(
          width + -2 | 0,
          ib,
          char_for_hexadecimal_code(c1, c2)
        );
      case 0:
      case 6:
      case 18:
      case 22:
      case 24:
        switch__0 = 1;
        break;
      default:
        switch__0 = 0
      }
  }
  else {
    if (48 <= c) {
      get_digit__0 =
        function(param) {
          var c = next_char(ib);
          var switcher = c + -48 | 0;
          return 9 < switcher >>> 0 ? bad_input_escape(c) : c;
        };
      c1__0 = get_digit__0(0);
      c2__0 = get_digit__0(0);
      return store_char(
        width + -2 | 0,
        ib,
        char_for_decimal_code(c, c1__0, c2__0)
      );
    }
    switch__0 = 0;
  }
  else switch__0 = 34 === c ? 1 : 39 <= c ? 1 : 0;
  return switch__0 ?
    store_char(width, ib, char_for_backslash(c)) :
    bad_input_escape(c);
}

function scan_caml_char(width, ib) {
  function find_stop(width) {
    var c = check_next_char_for_char(width, ib);
    return 39 === c ? ignore_char(width, ib) : character_mismatch(39, c);
  }
  function find_char(width) {
    var c = check_next_char_for_char(width, ib);
    return 92 === c ?
      find_stop(scan_backslash_char(ignore_char(width, ib), ib)) :
      find_stop(store_char(width, ib, c));
  }
  function find_start(width) {
    var c = checked_peek_char(ib);
    return 39 === c ?
      find_char(ignore_char(width, ib)) :
      character_mismatch(39, c);
  }
  return find_start(width);
}

function scan_caml_string(width, ib) {
  function find_stop__0(counter, width) {
    var c;
    var aA_;
    var width__1;
    var counter__0;
    var width__0 = width;
    for (; ; ) {
      c = check_next_char_for_string(width__0, ib);
      if (34 === c) {return ignore_char(width__0, ib);}
      if (92 === c) {
        aA_ = ignore_char(width__0, ib);
        if (counter < 50) {
          counter__0 = counter + 1 | 0;
          return scan_backslash(counter__0, aA_);
        }
        return caml_trampoline_return(scan_backslash, [0,aA_]);
      }
      width__1 = store_char(width__0, ib, c);
      width__0 = width__1;
      continue;
    }
  }
  function scan_backslash(counter, width) {
    var ax_;
    var ay_;
    var counter__0;
    var counter__1;
    var counter__2;
    var match = check_next_char_for_string(width, ib);
    if (10 === match) {
      ax_ = ignore_char(width, ib);
      if (counter < 50) {
        counter__0 = counter + 1 | 0;
        return skip_spaces(counter__0, ax_);
      }
      return caml_trampoline_return(skip_spaces, [0,ax_]);
    }
    if (13 === match) {
      ay_ = ignore_char(width, ib);
      if (counter < 50) {
        counter__1 = counter + 1 | 0;
        return skip_newline(counter__1, ay_);
      }
      return caml_trampoline_return(skip_newline, [0,ay_]);
    }
    var az_ = scan_backslash_char(width, ib);
    if (counter < 50) {
      counter__2 = counter + 1 | 0;
      return find_stop__0(counter__2, az_);
    }
    return caml_trampoline_return(find_stop__0, [0,az_]);
  }
  function skip_newline(counter, width) {
    var av_;
    var counter__0;
    var counter__1;
    var match = check_next_char_for_string(width, ib);
    if (10 === match) {
      av_ = ignore_char(width, ib);
      if (counter < 50) {
        counter__0 = counter + 1 | 0;
        return skip_spaces(counter__0, av_);
      }
      return caml_trampoline_return(skip_spaces, [0,av_]);
    }
    var aw_ = store_char(width, ib, 13);
    if (counter < 50) {
      counter__1 = counter + 1 | 0;
      return find_stop__0(counter__1, aw_);
    }
    return caml_trampoline_return(find_stop__0, [0,aw_]);
  }
  function skip_spaces(counter, width) {
    var match;
    var width__1;
    var counter__0;
    var width__0 = width;
    for (; ; ) {
      match = check_next_char_for_string(width__0, ib);
      if (32 === match) {
        width__1 = ignore_char(width__0, ib);
        width__0 = width__1;
        continue;
      }
      if (counter < 50) {
        counter__0 = counter + 1 | 0;
        return find_stop__0(counter__0, width__0);
      }
      return caml_trampoline_return(find_stop__0, [0,width__0]);
    }
  }
  function find_stop(width) {return caml_trampoline(find_stop__0(0, width));}
  function find_start(width) {
    var c = checked_peek_char(ib);
    return 34 === c ?
      find_stop(ignore_char(width, ib)) :
      character_mismatch(34, c);
  }
  return find_start(width);
}

function scan_bool(ib) {
  var c = checked_peek_char(ib);
  var m = 102 === c ? 5 : 116 === c ? 4 : bad_input(call2(Printf[4], n_, c));
  return scan_string(0, m, ib);
}

function scan_chars_in_char_set(char_set, scan_indic, width, ib) {
  var c;
  var aq_;
  var ci;
  function scan_chars(i, stp) {
    var c;
    var ar_;
    var as_;
    var at_;
    var au_;
    var i__1;
    var i__0 = i;
    for (; ; ) {
      c = peek_char(ib);
      ar_ = 0 < i__0 ? 1 : 0;
      if (ar_) {
        as_ = 1 - eof(ib);
        if (as_) {
          at_ = call2(CamlinternalFormat[1], char_set, c);
          au_ = at_ ? c !== stp ? 1 : 0 : at_;
        }
        else au_ = as_;
      }
      else au_ = ar_;
      if (au_) {
        store_char(Pervasives[7], ib, c);
        i__1 = i__0 + -1 | 0;
        i__0 = i__1;
        continue;
      }
      return au_;
    }
  }
  if (scan_indic) {
    c = scan_indic[1];
    scan_chars(width, c);
    aq_ = 1 - eof(ib);
    if (aq_) {
      ci = peek_char(ib);
      return c === ci ?
        invalidate_current_char(ib) :
        character_mismatch(c, ci);
    }
    return aq_;
  }
  return scan_chars(width, -1);
}

function scanf_bad_input(ib, x) {
  var s;
  if (x[1] === Scan_failure) s = x[2];
  else {if (x[1] !== Failure) {throw caml_wrap_thrown_exception(x);}s = x[2];}
  var i = char_count(ib);
  return bad_input(call3(Printf[4], o_, i, s));
}

function get_counter(ib, counter) {
  switch (counter) {
    case 0:
      return line_count(ib);
    case 1:
      return char_count(ib);
    default:
      return token_count(ib)
    }
}

function width_of_pad_opt(pad_opt) {
  var width;
  if (pad_opt) {width = pad_opt[1];return width;}
  return Pervasives[7];
}

function stopper_of_formatting_lit(fmting) {
  if (6 === fmting) {return p_;}
  var str = call1(CamlinternalFormat[17], fmting);
  var stp = caml_string_get(str, 1);
  var sub_str = call3(String[4], str, 2, caml_ml_string_length(str) + -2 | 0);
  return [0,stp,sub_str];
}

function take_format_readers__0(counter, k, fmt) {
  var fmt__1;
  var fmt__2;
  var fmt__3;
  var fmt__4;
  var fmt__5;
  var fmt__6;
  var fmt__7;
  var fmt__8;
  var fmt__9;
  var fmt__10;
  var fmt__11;
  var fmt__12;
  var fmt__13;
  var fmt__14;
  var rest;
  var fmtty;
  var an_;
  var ao_;
  var fmt__15;
  var fmt__16;
  var fmt__17;
  var ap_;
  var rest__0;
  var match;
  var fmt__18;
  var fmt__19;
  var rest__1;
  var match__0;
  var fmt__20;
  var fmt__21;
  var fmt_rest;
  var fmt__22;
  var fmt__23;
  var fmt__24;
  var rest__2;
  var ign;
  var fmt__25;
  var counter__0;
  var counter__1;
  var fmt__0 = fmt;
  for (; ; ) if (
    typeof fmt__0 === "number"
  ) return call1(k, 0);
  else switch (fmt__0[0]) {
    case 0:
      fmt__1 = fmt__0[1];
      fmt__0 = fmt__1;
      continue;
    case 1:
      fmt__2 = fmt__0[1];
      fmt__0 = fmt__2;
      continue;
    case 2:
      fmt__3 = fmt__0[2];
      fmt__0 = fmt__3;
      continue;
    case 3:
      fmt__4 = fmt__0[2];
      fmt__0 = fmt__4;
      continue;
    case 4:
      fmt__5 = fmt__0[4];
      fmt__0 = fmt__5;
      continue;
    case 5:
      fmt__6 = fmt__0[4];
      fmt__0 = fmt__6;
      continue;
    case 6:
      fmt__7 = fmt__0[4];
      fmt__0 = fmt__7;
      continue;
    case 7:
      fmt__8 = fmt__0[4];
      fmt__0 = fmt__8;
      continue;
    case 8:
      fmt__9 = fmt__0[4];
      fmt__0 = fmt__9;
      continue;
    case 9:
      fmt__10 = fmt__0[2];
      fmt__0 = fmt__10;
      continue;
    case 10:
      fmt__11 = fmt__0[1];
      fmt__0 = fmt__11;
      continue;
    case 11:
      fmt__12 = fmt__0[2];
      fmt__0 = fmt__12;
      continue;
    case 12:
      fmt__13 = fmt__0[2];
      fmt__0 = fmt__13;
      continue;
    case 13:
      fmt__14 = fmt__0[3];
      fmt__0 = fmt__14;
      continue;
    case 14:
      rest = fmt__0[3];
      fmtty = fmt__0[2];
      an_ = call1(CamlinternalFormat[22], fmtty);
      ao_ = call1(CamlinternalFormatBasics[2], an_);
      if (counter < 50) {
        counter__1 = counter + 1 | 0;
        return take_fmtty_format_readers__0(counter__1, k, ao_, rest);
      }
      return caml_trampoline_return(
        take_fmtty_format_readers__0,
        [0,k,ao_,rest]
      );
    case 15:
      fmt__15 = fmt__0[1];
      fmt__0 = fmt__15;
      continue;
    case 16:
      fmt__16 = fmt__0[1];
      fmt__0 = fmt__16;
      continue;
    case 17:
      fmt__17 = fmt__0[2];
      fmt__0 = fmt__17;
      continue;
    case 18:
      ap_ = fmt__0[1];
      if (0 === ap_[0]) {
        rest__0 = fmt__0[2];
        match = ap_[1];
        fmt__18 = match[1];
        fmt__19 = call2(CamlinternalFormatBasics[3], fmt__18, rest__0);
        fmt__0 = fmt__19;
        continue;
      }
      rest__1 = fmt__0[2];
      match__0 = ap_[1];
      fmt__20 = match__0[1];
      fmt__21 = call2(CamlinternalFormatBasics[3], fmt__20, rest__1);
      fmt__0 = fmt__21;
      continue;
    case 19:
      fmt_rest = fmt__0[1];
      return function(reader) {
        function new_k(readers_rest) {
          return call1(k, [0,reader,readers_rest]);
        }
        return take_format_readers(new_k, fmt_rest);
      };
    case 20:
      fmt__22 = fmt__0[3];
      fmt__0 = fmt__22;
      continue;
    case 21:
      fmt__23 = fmt__0[2];
      fmt__0 = fmt__23;
      continue;
    case 22:
      fmt__24 = fmt__0[1];
      fmt__0 = fmt__24;
      continue;
    case 23:
      rest__2 = fmt__0[2];
      ign = fmt__0[1];
      if (counter < 50) {
        counter__0 = counter + 1 | 0;
        return take_ignored_format_readers(counter__0, k, ign, rest__2);
      }
      return caml_trampoline_return(
        take_ignored_format_readers,
        [0,k,ign,rest__2]
      );
    default:
      fmt__25 = fmt__0[3];
      fmt__0 = fmt__25;
      continue
    }
}

function take_fmtty_format_readers__0(counter, k, fmtty, fmt) {
  var fmtty__1;
  var fmtty__2;
  var fmtty__3;
  var fmtty__4;
  var fmtty__5;
  var fmtty__6;
  var fmtty__7;
  var fmtty__8;
  var fmtty__9;
  var rest;
  var ty2;
  var ty1;
  var am_;
  var ty;
  var fmtty__10;
  var fmtty__11;
  var fmtty__12;
  var fmtty__13;
  var fmt_rest;
  var fmt_rest__0;
  var counter__0;
  var fmtty__0 = fmtty;
  for (; ; ) if (
    typeof fmtty__0 === "number"
  ) {
    if (counter < 50) {
      counter__0 = counter + 1 | 0;
      return take_format_readers__0(counter__0, k, fmt);
    }
    return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
  }
  else switch (fmtty__0[0]) {
    case 0:
      fmtty__1 = fmtty__0[1];
      fmtty__0 = fmtty__1;
      continue;
    case 1:
      fmtty__2 = fmtty__0[1];
      fmtty__0 = fmtty__2;
      continue;
    case 2:
      fmtty__3 = fmtty__0[1];
      fmtty__0 = fmtty__3;
      continue;
    case 3:
      fmtty__4 = fmtty__0[1];
      fmtty__0 = fmtty__4;
      continue;
    case 4:
      fmtty__5 = fmtty__0[1];
      fmtty__0 = fmtty__5;
      continue;
    case 5:
      fmtty__6 = fmtty__0[1];
      fmtty__0 = fmtty__6;
      continue;
    case 6:
      fmtty__7 = fmtty__0[1];
      fmtty__0 = fmtty__7;
      continue;
    case 7:
      fmtty__8 = fmtty__0[1];
      fmtty__0 = fmtty__8;
      continue;
    case 8:
      fmtty__9 = fmtty__0[2];
      fmtty__0 = fmtty__9;
      continue;
    case 9:
      rest = fmtty__0[3];
      ty2 = fmtty__0[2];
      ty1 = fmtty__0[1];
      am_ = call1(CamlinternalFormat[22], ty1);
      ty = call2(CamlinternalFormat[23], am_, ty2);
      fmtty__10 = call2(CamlinternalFormatBasics[1], ty, rest);
      fmtty__0 = fmtty__10;
      continue;
    case 10:
      fmtty__11 = fmtty__0[1];
      fmtty__0 = fmtty__11;
      continue;
    case 11:
      fmtty__12 = fmtty__0[1];
      fmtty__0 = fmtty__12;
      continue;
    case 12:
      fmtty__13 = fmtty__0[1];
      fmtty__0 = fmtty__13;
      continue;
    case 13:
      fmt_rest = fmtty__0[1];
      return function(reader) {
        function new_k(readers_rest) {
          return call1(k, [0,reader,readers_rest]);
        }
        return take_fmtty_format_readers(new_k, fmt_rest, fmt);
      };
    default:
      fmt_rest__0 = fmtty__0[1];
      return function(reader) {
        function new_k(readers_rest) {
          return call1(k, [0,reader,readers_rest]);
        }
        return take_fmtty_format_readers(new_k, fmt_rest__0, fmt);
      }
    }
}

function take_ignored_format_readers(counter, k, ign, fmt) {
  var counter__14;
  var counter__13;
  var counter__12;
  var counter__11;
  var counter__10;
  var counter__9;
  var counter__8;
  var counter__7;
  var counter__6;
  var counter__5;
  var counter__4;
  var counter__3;
  var counter__2;
  var counter__1;
  var counter__0;
  var fmtty;
  if (typeof ign === "number") switch (ign) {
    case 0:
      if (counter < 50) {
        counter__1 = counter + 1 | 0;
        return take_format_readers__0(counter__1, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 1:
      if (counter < 50) {
        counter__2 = counter + 1 | 0;
        return take_format_readers__0(counter__2, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 2:
      return function(reader) {
        function new_k(readers_rest) {
          return call1(k, [0,reader,readers_rest]);
        }
        return take_format_readers(new_k, fmt);
      };
    default:
      if (counter < 50) {
        counter__3 = counter + 1 | 0;
        return take_format_readers__0(counter__3, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt])
    }
  else switch (ign[0]) {
    case 0:
      if (counter < 50) {
        counter__4 = counter + 1 | 0;
        return take_format_readers__0(counter__4, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 1:
      if (counter < 50) {
        counter__5 = counter + 1 | 0;
        return take_format_readers__0(counter__5, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 2:
      if (counter < 50) {
        counter__6 = counter + 1 | 0;
        return take_format_readers__0(counter__6, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 3:
      if (counter < 50) {
        counter__7 = counter + 1 | 0;
        return take_format_readers__0(counter__7, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 4:
      if (counter < 50) {
        counter__8 = counter + 1 | 0;
        return take_format_readers__0(counter__8, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 5:
      if (counter < 50) {
        counter__9 = counter + 1 | 0;
        return take_format_readers__0(counter__9, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 6:
      if (counter < 50) {
        counter__10 = counter + 1 | 0;
        return take_format_readers__0(counter__10, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 7:
      if (counter < 50) {
        counter__11 = counter + 1 | 0;
        return take_format_readers__0(counter__11, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 8:
      if (counter < 50) {
        counter__12 = counter + 1 | 0;
        return take_format_readers__0(counter__12, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    case 9:
      fmtty = ign[2];
      if (counter < 50) {
        counter__0 = counter + 1 | 0;
        return take_fmtty_format_readers__0(counter__0, k, fmtty, fmt);
      }
      return caml_trampoline_return(
        take_fmtty_format_readers__0,
        [0,k,fmtty,fmt]
      );
    case 10:
      if (counter < 50) {
        counter__13 = counter + 1 | 0;
        return take_format_readers__0(counter__13, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt]);
    default:
      if (counter < 50) {
        counter__14 = counter + 1 | 0;
        return take_format_readers__0(counter__14, k, fmt);
      }
      return caml_trampoline_return(take_format_readers__0, [0,k,fmt])
    }
}

function take_format_readers(k, fmt) {
  return caml_trampoline(take_format_readers__0(0, k, fmt));
}

function take_fmtty_format_readers(k, fmtty, fmt) {
  return caml_trampoline(take_fmtty_format_readers__0(0, k, fmtty, fmt));
}

function pad_prec_scanf(ib, fmt, readers, pad, prec, scan, token) {
  var x__2;
  var p__0;
  var x__1;
  var al_;
  var x__0;
  var p;
  var x;
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (0 === prec) {
        call3(scan, Pervasives[7], Pervasives[7], ib);
        x = call1(token, ib);
        return [0,x,make_scanf(ib, fmt, readers)];
      }
      return call1(Pervasives[1], cst_scanf_bad_conversion);
    }
    p = prec[1];
    call3(scan, Pervasives[7], p, ib);
    x__0 = call1(token, ib);
    return [0,x__0,make_scanf(ib, fmt, readers)];
  }
  else {
    if (0 === pad[0]) {
      if (0 === pad[1]) {
        return call1(Pervasives[1], cst_scanf_bad_conversion__0);
      }
      al_ = pad[2];
      if (typeof prec === "number") {
        if (0 === prec) {
          call3(scan, al_, Pervasives[7], ib);
          x__1 = call1(token, ib);
          return [0,x__1,make_scanf(ib, fmt, readers)];
        }
        return call1(Pervasives[1], cst_scanf_bad_conversion__1);
      }
      p__0 = prec[1];
      call3(scan, al_, p__0, ib);
      x__2 = call1(token, ib);
      return [0,x__2,make_scanf(ib, fmt, readers)];
    }
    return call1(Pervasives[1], cst_scanf_bad_conversion__2);
  }
}

function make_scanf(ib, fmt, readers) {
  var rest;
  var c;
  var rest__0;
  var c__0;
  var K_;
  var L_;
  var scan;
  var rest__1;
  var fmting_lit;
  var match;
  var str;
  var stp;
  var scan__0;
  var str_rest;
  var M_;
  var rest__2;
  var match__0;
  var fmt__1;
  var scan__1;
  var rest__3;
  var match__1;
  var fmt__2;
  var scan__2;
  var rest__4;
  var pad;
  var scan__3;
  var rest__5;
  var prec;
  var pad__0;
  var iconv;
  var c__1;
  var scan__4;
  var rest__6;
  var prec__0;
  var pad__1;
  var iconv__0;
  var c__2;
  var scan__5;
  var rest__7;
  var prec__1;
  var pad__2;
  var iconv__1;
  var c__3;
  var scan__6;
  var rest__8;
  var prec__2;
  var pad__3;
  var iconv__2;
  var c__4;
  var scan__7;
  var N_;
  var rest__9;
  var prec__3;
  var pad__4;
  var rest__10;
  var prec__4;
  var pad__5;
  var rest__11;
  var prec__5;
  var pad__6;
  var rest__12;
  var pad__7;
  var scan__8;
  var rest__13;
  var fmt__3;
  var str__0;
  var O_;
  var fmt__4;
  var chr;
  var rest__14;
  var fmtty;
  var pad_opt;
  var s;
  var msg;
  var P_;
  var fmt__5;
  var Q_;
  var rest__15;
  var fmtty__0;
  var pad_opt__0;
  var s__0;
  var msg__0;
  var R_;
  var S_;
  var T_;
  var fmt__6;
  var fmt__7;
  var match__2;
  var fmt__8;
  var match__3;
  var fmt__9;
  var U_;
  var V_;
  var fmt__10;
  var W_;
  var X_;
  var fmt__11;
  var formatting_lit;
  var Y_;
  var Z_;
  var aa_;
  var rest__16;
  var match__4;
  var fmt__12;
  var fmt__13;
  var rest__17;
  var match__5;
  var fmt__14;
  var fmt__15;
  var fmt_rest;
  var readers_rest;
  var reader;
  var x;
  var ab_;
  var ac_;
  var ad_;
  var width;
  var s__1;
  var rest__18;
  var fmting_lit__0;
  var match__6;
  var str__1;
  var stp__0;
  var width__0;
  var s__2;
  var str_rest__0;
  var rest__19;
  var counter;
  var count;
  var rest__20;
  var c__5;
  var rest__21;
  var ign;
  var match__7;
  var fmt__16;
  var match__8;
  var arg_rest;
  var fmt__0 = fmt;
  for (; ; ) if (
    typeof fmt__0 === "number"
  ) return 0;
  else switch (fmt__0[0]) {
    case 0:
      rest = fmt__0[1];
      scan_char(0, ib);
      c = token_char(ib);
      return [0,c,make_scanf(ib, rest, readers)];
    case 1:
      rest__0 = fmt__0[1];
      scan_caml_char(0, ib);
      c__0 = token_char(ib);
      return [0,c__0,make_scanf(ib, rest__0, readers)];
    case 2:
      K_ = fmt__0[2];
      L_ = fmt__0[1];
      if (! (typeof K_ === "number")) {
        switch (K_[0]) {
          case 17:
            rest__1 = K_[2];
            fmting_lit = K_[1];
            match = stopper_of_formatting_lit(fmting_lit);
            str = match[2];
            stp = match[1];
            scan__0 =
              function(width, param, ib) {
                return scan_string([0,stp], width, ib);
              };
            str_rest = [11,str,rest__1];
            return pad_prec_scanf(
              ib,
              str_rest,
              readers,
              L_,
              0,
              scan__0,
              token_string
            );
          case 18:
            M_ = K_[1];
            if (0 === M_[0]) {
              rest__2 = K_[2];
              match__0 = M_[1];
              fmt__1 = match__0[1];
              scan__1 =
                function(width, param, ib) {
                  return scan_string(q_, width, ib);
                };
              return pad_prec_scanf(
                ib,
                call2(CamlinternalFormatBasics[3], fmt__1, rest__2),
                readers,
                L_,
                0,
                scan__1,
                token_string
              );
            }
            rest__3 = K_[2];
            match__1 = M_[1];
            fmt__2 = match__1[1];
            scan__2 =
              function(width, param, ib) {return scan_string(r_, width, ib);};
            return pad_prec_scanf(
              ib,
              call2(CamlinternalFormatBasics[3], fmt__2, rest__3),
              readers,
              L_,
              0,
              scan__2,
              token_string
            )
          }
      }
      scan = function(width, param, ib) {return scan_string(0, width, ib);};
      return pad_prec_scanf(ib, K_, readers, L_, 0, scan, token_string);
    case 3:
      rest__4 = fmt__0[2];
      pad = fmt__0[1];
      scan__3 =
        function(width, param, ib) {return scan_caml_string(width, ib);};
      return pad_prec_scanf(
        ib,
        rest__4,
        readers,
        pad,
        0,
        scan__3,
        token_string
      );
    case 4:
      rest__5 = fmt__0[4];
      prec = fmt__0[3];
      pad__0 = fmt__0[2];
      iconv = fmt__0[1];
      c__1 = integer_conversion_of_char(call1(CamlinternalFormat[16], iconv));
      scan__4 =
        function(width, param, ib) {
          return scan_int_conversion(c__1, width, ib);
        };
      return pad_prec_scanf(
        ib,
        rest__5,
        readers,
        pad__0,
        prec,
        scan__4,
        function(ak_) {return token_int(c__1, ak_);}
      );
    case 5:
      rest__6 = fmt__0[4];
      prec__0 = fmt__0[3];
      pad__1 = fmt__0[2];
      iconv__0 = fmt__0[1];
      c__2 =
        integer_conversion_of_char(call1(CamlinternalFormat[16], iconv__0));
      scan__5 =
        function(width, param, ib) {
          return scan_int_conversion(c__2, width, ib);
        };
      return pad_prec_scanf(
        ib,
        rest__6,
        readers,
        pad__1,
        prec__0,
        scan__5,
        function(aj_) {return token_int32(c__2, aj_);}
      );
    case 6:
      rest__7 = fmt__0[4];
      prec__1 = fmt__0[3];
      pad__2 = fmt__0[2];
      iconv__1 = fmt__0[1];
      c__3 =
        integer_conversion_of_char(call1(CamlinternalFormat[16], iconv__1));
      scan__6 =
        function(width, param, ib) {
          return scan_int_conversion(c__3, width, ib);
        };
      return pad_prec_scanf(
        ib,
        rest__7,
        readers,
        pad__2,
        prec__1,
        scan__6,
        function(ai_) {return token_nativeint(c__3, ai_);}
      );
    case 7:
      rest__8 = fmt__0[4];
      prec__2 = fmt__0[3];
      pad__3 = fmt__0[2];
      iconv__2 = fmt__0[1];
      c__4 =
        integer_conversion_of_char(call1(CamlinternalFormat[16], iconv__2));
      scan__7 =
        function(width, param, ib) {
          return scan_int_conversion(c__4, width, ib);
        };
      return pad_prec_scanf(
        ib,
        rest__8,
        readers,
        pad__3,
        prec__2,
        scan__7,
        function(ah_) {return token_int64(c__4, ah_);}
      );
    case 8:
      N_ = fmt__0[1];
      if (15 === N_) {
        rest__9 = fmt__0[4];
        prec__3 = fmt__0[3];
        pad__4 = fmt__0[2];
        return pad_prec_scanf(
          ib,
          rest__9,
          readers,
          pad__4,
          prec__3,
          scan_caml_float,
          token_float
        );
      }
      if (16 <= N_) {
        rest__10 = fmt__0[4];
        prec__4 = fmt__0[3];
        pad__5 = fmt__0[2];
        return pad_prec_scanf(
          ib,
          rest__10,
          readers,
          pad__5,
          prec__4,
          scan_hex_float,
          token_float
        );
      }
      rest__11 = fmt__0[4];
      prec__5 = fmt__0[3];
      pad__6 = fmt__0[2];
      return pad_prec_scanf(
        ib,
        rest__11,
        readers,
        pad__6,
        prec__5,
        scan_float,
        token_float
      );
    case 9:
      rest__12 = fmt__0[2];
      pad__7 = fmt__0[1];
      scan__8 = function(param, ag_, ib) {return scan_bool(ib);};
      return pad_prec_scanf(
        ib,
        rest__12,
        readers,
        pad__7,
        0,
        scan__8,
        token_bool
      );
    case 10:
      rest__13 = fmt__0[1];
      if (end_of_input(ib)) {fmt__0 = rest__13;continue;}
      return bad_input(cst_end_of_input_not_found);
    case 11:
      fmt__3 = fmt__0[2];
      str__0 = fmt__0[1];
      O_ = function(af_) {return check_char(ib, af_);};
      call2(String[8], O_, str__0);
      fmt__0 = fmt__3;
      continue;
    case 12:
      fmt__4 = fmt__0[2];
      chr = fmt__0[1];
      check_char(ib, chr);
      fmt__0 = fmt__4;
      continue;
    case 13:
      rest__14 = fmt__0[3];
      fmtty = fmt__0[2];
      pad_opt = fmt__0[1];
      scan_caml_string(width_of_pad_opt(pad_opt), ib);
      s = token_string(ib);
      try {Q_ = call2(CamlinternalFormat[14], s, fmtty);fmt__5 = Q_;}
      catch(exn) {
        exn = runtime["caml_wrap_exception"](exn);
        if (exn[1] !== Failure) {
          throw caml_wrap_thrown_exception_reraise(exn);
        }
        msg = exn[2];
        P_ = bad_input(msg);
        fmt__5 = P_;
      }
      return [0,fmt__5,make_scanf(ib, rest__14, readers)];
    case 14:
      rest__15 = fmt__0[3];
      fmtty__0 = fmt__0[2];
      pad_opt__0 = fmt__0[1];
      scan_caml_string(width_of_pad_opt(pad_opt__0), ib);
      s__0 = token_string(ib);
      try {
        match__2 = call2(CamlinternalFormat[13], 0, s__0);
        fmt__8 = match__2[1];
        match__3 = call2(CamlinternalFormat[13], 0, s__0);
        fmt__9 = match__3[1];
        U_ = call1(CamlinternalFormat[22], fmtty__0);
        V_ = call1(CamlinternalFormatBasics[2], U_);
        fmt__10 = call2(CamlinternalFormat[12], fmt__9, V_);
        W_ = call1(CamlinternalFormatBasics[2], fmtty__0);
        X_ = call2(CamlinternalFormat[12], fmt__8, W_);
        fmt__7 = X_;
        fmt__6 = fmt__10;
      }
      catch(exn) {
        exn = runtime["caml_wrap_exception"](exn);
        if (exn[1] !== Failure) {
          throw caml_wrap_thrown_exception_reraise(exn);
        }
        msg__0 = exn[2];
        R_ = bad_input(msg__0);
        S_ = R_[2];
        T_ = R_[1];
        fmt__7 = T_;
        fmt__6 = S_;
      }
      return [
        0,
        [0,fmt__7,s__0],
        make_scanf(
          ib,
          call2(CamlinternalFormatBasics[3], fmt__6, rest__15),
          readers
        )
      ];
    case 15:
      return call1(Pervasives[1], cst_scanf_bad_conversion_a);
    case 16:
      return call1(Pervasives[1], cst_scanf_bad_conversion_t);
    case 17:
      fmt__11 = fmt__0[2];
      formatting_lit = fmt__0[1];
      Y_ = call1(CamlinternalFormat[17], formatting_lit);
      Z_ = function(ae_) {return check_char(ib, ae_);};
      call2(String[8], Z_, Y_);
      fmt__0 = fmt__11;
      continue;
    case 18:
      aa_ = fmt__0[1];
      if (0 === aa_[0]) {
        rest__16 = fmt__0[2];
        match__4 = aa_[1];
        fmt__12 = match__4[1];
        check_char(ib, 64);
        check_char(ib, 123);
        fmt__13 = call2(CamlinternalFormatBasics[3], fmt__12, rest__16);
        fmt__0 = fmt__13;
        continue;
      }
      rest__17 = fmt__0[2];
      match__5 = aa_[1];
      fmt__14 = match__5[1];
      check_char(ib, 64);
      check_char(ib, 91);
      fmt__15 = call2(CamlinternalFormatBasics[3], fmt__14, rest__17);
      fmt__0 = fmt__15;
      continue;
    case 19:
      fmt_rest = fmt__0[1];
      if (readers) {
        readers_rest = readers[2];
        reader = readers[1];
        x = call1(reader, ib);
        return [0,x,make_scanf(ib, fmt_rest, readers_rest)];
      }
      return call1(Pervasives[1], cst_scanf_missing_reader);
    case 20:
      ab_ = fmt__0[3];
      ac_ = fmt__0[2];
      ad_ = fmt__0[1];
      if (! (typeof ab_ === "number") && 17 === ab_[0]) {
        rest__18 = ab_[2];
        fmting_lit__0 = ab_[1];
        match__6 = stopper_of_formatting_lit(fmting_lit__0);
        str__1 = match__6[2];
        stp__0 = match__6[1];
        width__0 = width_of_pad_opt(ad_);
        scan_chars_in_char_set(ac_, [0,stp__0], width__0, ib);
        s__2 = token_string(ib);
        str_rest__0 = [11,str__1,rest__18];
        return [0,s__2,make_scanf(ib, str_rest__0, readers)];
      }
      width = width_of_pad_opt(ad_);
      scan_chars_in_char_set(ac_, 0, width, ib);
      s__1 = token_string(ib);
      return [0,s__1,make_scanf(ib, ab_, readers)];
    case 21:
      rest__19 = fmt__0[2];
      counter = fmt__0[1];
      count = get_counter(ib, counter);
      return [0,count,make_scanf(ib, rest__19, readers)];
    case 22:
      rest__20 = fmt__0[1];
      c__5 = checked_peek_char(ib);
      return [0,c__5,make_scanf(ib, rest__20, readers)];
    case 23:
      rest__21 = fmt__0[2];
      ign = fmt__0[1];
      match__7 = call2(CamlinternalFormat[6], ign, rest__21);
      fmt__16 = match__7[1];
      match__8 = make_scanf(ib, fmt__16, readers);
      if (match__8) {arg_rest = match__8[2];return arg_rest;}
      throw caml_wrap_thrown_exception([0,Assert_failure,s_]);
    default:
      return call1(Pervasives[1], cst_scanf_bad_conversion_custom_converter)
    }
}

function kscanf(ib, ef, param) {
  var str = param[2];
  var fmt = param[1];
  function apply(f, args) {
    var args__1;
    var x;
    var f__1;
    var f__0 = f;
    var args__0 = args;
    for (; ; ) {
      if (args__0) {
        args__1 = args__0[2];
        x = args__0[1];
        f__1 = call1(f__0, x);
        f__0 = f__1;
        args__0 = args__1;
        continue;
      }
      return f__0;
    }
  }
  function k(readers, f) {
    var switch__0;
    var J_;
    var I_;
    var H_;
    var G_;
    var F_;
    var E_;
    var msg;
    var args;
    var D_;
    var C_;
    reset_token(ib);
    try {J_ = [0,make_scanf(ib, fmt, readers)];D_ = J_;}
    catch(exc) {
      exc = runtime["caml_wrap_exception"](exc);
      if (exc[1] === Scan_failure) switch__0 = 0;
      else if (exc[1] === Failure) switch__0 = 0;
      else if (exc === End_of_file) switch__0 = 0;
      else {
        if (exc[1] !== Invalid_argument) {
          throw caml_wrap_thrown_exception_reraise(exc);
        }
        msg = exc[2];
        E_ = call1(String[13], str);
        F_ = call2(Pervasives[16], E_, cst__1);
        G_ = call2(Pervasives[16], cst_in_format, F_);
        H_ = call2(Pervasives[16], msg, G_);
        I_ = call1(Pervasives[1], H_);
        C_ = I_;
        switch__0 = 1;
      }
      if (! switch__0) {C_ = [1,exc];}
      D_ = C_;
    }
    if (0 === D_[0]) {args = D_[1];return apply(f, args);}
    var exc = D_[1];
    return call2(ef, ib, exc);
  }
  return take_format_readers(k, fmt);
}

function bscanf(ib, fmt) {return kscanf(ib, scanf_bad_input, fmt);}

function ksscanf(s, ef, fmt) {return kscanf(from_string(s), ef, fmt);}

function sscanf(s, fmt) {return kscanf(from_string(s), scanf_bad_input, fmt);}

function scanf(fmt) {return kscanf(stdin, scanf_bad_input, fmt);}

function bscanf_format(ib, format, f) {
  var B_;
  var fmt;
  var A_;
  var msg;
  scan_caml_string(Pervasives[7], ib);
  var str = token_string(ib);
  try {B_ = call2(CamlinternalFormat[15], str, format);fmt = B_;}
  catch(exn) {
    exn = runtime["caml_wrap_exception"](exn);
    if (exn[1] !== Failure) {throw caml_wrap_thrown_exception_reraise(exn);}
    msg = exn[2];
    A_ = bad_input(msg);
    fmt = A_;
  }
  return call1(f, fmt);
}

function sscanf_format(s, format, f) {
  return bscanf_format(from_string(s), format, f);
}

function string_to_String(s) {
  var i;
  var c;
  var z_;
  var l = caml_ml_string_length(s);
  var b = call1(Buffer[1], l + 2 | 0);
  call2(Buffer[10], b, 34);
  var y_ = l + -1 | 0;
  var x_ = 0;
  if (! (y_ < 0)) {
    i = x_;
    for (; ; ) {
      c = caml_string_get(s, i);
      if (34 === c) {call2(Buffer[10], b, 92);}
      call2(Buffer[10], b, c);
      z_ = i + 1 | 0;
      if (y_ !== i) {i = z_;continue;}
      break;
    }
  }
  call2(Buffer[10], b, 34);
  return call1(Buffer[2], b);
}

function format_from_string(s, fmt) {
  function w_(x) {return x;}
  return sscanf_format(string_to_String(s), fmt, w_);
}

function unescaped(s) {
  function u_(x) {return x;}
  var v_ = call2(Pervasives[16], s, cst__2);
  return call1(sscanf(call2(Pervasives[16], cst__3, v_), t_), u_);
}

function kfscanf(ic, ef, fmt) {return kscanf(memo_from_channel(ic), ef, fmt);}

function fscanf(ic, fmt) {
  return kscanf(memo_from_channel(ic), scanf_bad_input, fmt);
}

var Scanf = [
  0,
  [
    0,
    stdin,
    open_in,
    open_in_bin,
    close_in,
    open_in,
    open_in_bin,
    from_string,
    from_function,
    from_channel,
    end_of_input,
    beginning_of_input,
    name_of_input,
    stdin
  ],
  Scan_failure,
  bscanf,
  sscanf,
  scanf,
  kscanf,
  ksscanf,
  bscanf_format,
  sscanf_format,
  format_from_string,
  unescaped,
  fscanf,
  kfscanf
];

module.exports = Scanf;

/*::type Exports = {
  Scan_failure: any,
  bscanf: (ib: any, fmt: any) => any,
  sscanf: (s: any, fmt: any) => any,
  scanf: (fmt: any) => any,
  kscanf: (ib: any, ef: any, param: any) => any,
  ksscanf: (s: any, ef: any, fmt: any) => any,
  bscanf_format: (ib: any, format: any, f: any) => any,
  sscanf_format: (s: any, format: any, f: any) => any,
  format_from_string: (s: any, fmt: any) => any,
  unescaped: (s: any) => any,
  fscanf: (ic: any, fmt: any) => any,
  kfscanf: (ic: any, ef: any, fmt: any) => any,
}*/
/** @type {{
  Scan_failure: any,
  bscanf: (ib: any, fmt: any) => any,
  sscanf: (s: any, fmt: any) => any,
  scanf: (fmt: any) => any,
  kscanf: (ib: any, ef: any, param: any) => any,
  ksscanf: (s: any, ef: any, fmt: any) => any,
  bscanf_format: (ib: any, format: any, f: any) => any,
  sscanf_format: (s: any, format: any, f: any) => any,
  format_from_string: (s: any, fmt: any) => any,
  unescaped: (s: any) => any,
  fscanf: (ic: any, fmt: any) => any,
  kfscanf: (ic: any, ef: any, fmt: any) => any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.Scan_failure = module.exports[2];
module.exports.bscanf = module.exports[3];
module.exports.sscanf = module.exports[4];
module.exports.scanf = module.exports[5];
module.exports.kscanf = module.exports[6];
module.exports.ksscanf = module.exports[7];
module.exports.bscanf_format = module.exports[8];
module.exports.sscanf_format = module.exports[9];
module.exports.format_from_string = module.exports[10];
module.exports.unescaped = module.exports[11];
module.exports.fscanf = module.exports[12];
module.exports.kfscanf = module.exports[13];

/* Hashing disabled */
