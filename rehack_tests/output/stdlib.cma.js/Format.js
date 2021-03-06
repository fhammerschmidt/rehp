/**
 * @flow strict
 * Format
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

var caml_ml_string_length = runtime["caml_ml_string_length"];
var string = runtime["caml_new_string"];
var caml_wrap_thrown_exception = runtime["caml_wrap_thrown_exception"];
var caml_wrap_thrown_exception_reraise = runtime
 ["caml_wrap_thrown_exception_reraise"];
var cst__4 = string(".");
var cst__2 = string(">");
var cst__3 = string("</");
var cst__0 = string(">");
var cst__1 = string("<");
var cst = string("\n");
var cst_Format_Empty_queue = string("Format.Empty_queue");
var CamlinternalFormat = require("./CamlinternalFormat.js");
var Pervasives = require("./Pervasives.js");
var String = require("./String.js");
var Buffer = require("./Buffer.js");
var List = require("./List.js");
var Not_found = require("../runtime/Not_found.js");
var b_ = [3,0,3];
var a_ = [0,string("")];

function make_queue(param) {return [0,0,0];}

function clear_queue(q) {q[1] = 0;q[2] = 0;return 0;}

function add_queue(x, q) {
  var c = [0,x,0];
  var cx_ = q[1];
  if (cx_) {q[1] = c;cx_[2] = c;return 0;}
  q[1] = c;
  q[2] = c;
  return 0;
}

var Empty_queue = [248,cst_Format_Empty_queue,runtime["caml_fresh_oo_id"](0)];

function peek_queue(param) {
  var x;
  var cw_ = param[2];
  if (cw_) {x = cw_[1];return x;}
  throw caml_wrap_thrown_exception(Empty_queue);
}

function take_queue(q) {
  var x;
  var tl;
  var cv_ = q[2];
  if (cv_) {
    x = cv_[1];
    tl = cv_[2];
    q[2] = tl;
    if (0 === tl) {q[1] = 0;}
    return x;
  }
  throw caml_wrap_thrown_exception(Empty_queue);
}

function pp_enqueue(state, token) {
  var len = token[3];
  state[13] = state[13] + len | 0;
  return add_queue(token, state[28]);
}

function pp_clear_queue(state) {
  state[12] = 1;
  state[13] = 1;
  return clear_queue(state[28]);
}

var pp_infinity = 1000000010;

function pp_output_string(state, s) {
  return call3(state[17], s, 0, caml_ml_string_length(s));
}

function pp_output_newline(state) {return call1(state[19], 0);}

function pp_output_spaces(state, n) {return call1(state[20], n);}

function pp_output_indent(state, n) {return call1(state[21], n);}

function break_new_line(state, offset, width) {
  pp_output_newline(state);
  state[11] = 1;
  var indent = (state[6] - width | 0) + offset | 0;
  var real_indent = call2(Pervasives[4], state[8], indent);
  state[10] = real_indent;
  state[9] = state[6] - state[10] | 0;
  return pp_output_indent(state, state[10]);
}

function break_line(state, width) {return break_new_line(state, 0, width);}

function break_same_line(state, width) {
  state[9] = state[9] - width | 0;
  return pp_output_spaces(state, width);
}

function pp_force_break_line(state) {
  var match;
  var width;
  var bl_ty;
  var ct_;
  var cu_;
  var cs_ = state[2];
  if (cs_) {
    match = cs_[1];
    width = match[2];
    bl_ty = match[1];
    ct_ = state[9] < width ? 1 : 0;
    if (ct_) {
      if (0 !== bl_ty) {return 5 <= bl_ty ? 0 : break_line(state, width);}
      cu_ = 0;
    }
    else cu_ = ct_;
    return cu_;
  }
  return pp_output_newline(state);
}

function pp_skip_token(state) {
  var match = take_queue(state[28]);
  var size = match[1];
  var len = match[3];
  state[12] = state[12] - len | 0;
  state[9] = state[9] + size | 0;
  return 0;
}

function format_pp_token(state, size, param) {
  var marker__0;
  var tag_name__0;
  var tbox;
  var bl_type;
  var offset__0;
  var insertion_point__0;
  var off__1;
  var ty__0;
  var cq_;
  var offset;
  var tab;
  var x__0;
  var x;
  var cp_;
  var find;
  var tabs__0;
  var match__2;
  var co_;
  var insertion_point;
  var n__0;
  var off__0;
  var ty;
  var width__0;
  var match__1;
  var cn_;
  var n;
  var off;
  var s;
  var marker;
  var tag_name;
  var tags;
  var cm_;
  var cl_;
  var width;
  var match__0;
  var ck_;
  var ls__0;
  var cj_;
  var ls;
  var ci_;
  var add_tab;
  var tabs;
  var match;
  var ch_;
  if (typeof param === "number") switch (param) {
    case 0:
      ch_ = state[3];
      if (ch_) {
        match = ch_[1];
        tabs = match[1];
        add_tab =
          function(n, ls) {
            var x;
            var l;
            if (ls) {
              l = ls[2];
              x = ls[1];
              return runtime["caml_lessthan"](n, x) ?
                [0,n,ls] :
                [0,x,add_tab(n, l)];
            }
            return [0,n,0];
          };
        tabs[1] = add_tab(state[6] - state[9] | 0, tabs[1]);
        return 0;
      }
      return 0;
    case 1:
      ci_ = state[2];
      if (ci_) {ls = ci_[2];state[2] = ls;return 0;}
      return 0;
    case 2:
      cj_ = state[3];
      if (cj_) {ls__0 = cj_[2];state[3] = ls__0;return 0;}
      return 0;
    case 3:
      ck_ = state[2];
      if (ck_) {
        match__0 = ck_[1];
        width = match__0[2];
        return break_line(state, width);
      }
      return pp_output_newline(state);
    case 4:
      cl_ = state[10] !== (state[6] - state[9] | 0) ? 1 : 0;
      return cl_ ? pp_skip_token(state) : cl_;
    default:
      cm_ = state[5];
      if (cm_) {
        tags = cm_[2];
        tag_name = cm_[1];
        marker = call1(state[25], tag_name);
        pp_output_string(state, marker);
        state[5] = tags;
        return 0;
      }
      return 0
    }
  else switch (param[0]) {
    case 0:
      s = param[1];
      state[9] = state[9] - size | 0;
      pp_output_string(state, s);
      state[11] = 0;
      return 0;
    case 1:
      off = param[2];
      n = param[1];
      cn_ = state[2];
      if (cn_) {
        match__1 = cn_[1];
        width__0 = match__1[2];
        ty = match__1[1];
        switch (ty) {
          case 0:
            return break_same_line(state, n);
          case 1:
            return break_new_line(state, off, width__0);
          case 2:
            return break_new_line(state, off, width__0);
          case 3:
            return state[9] < size ?
              break_new_line(state, off, width__0) :
              break_same_line(state, n);
          case 4:
            return state[11] ?
              break_same_line(state, n) :
              state[9] < size ?
               break_new_line(state, off, width__0) :
               ((state[6] - width__0 | 0) + off | 0) < state[10] ?
                break_new_line(state, off, width__0) :
                break_same_line(state, n);
          default:
            return break_same_line(state, n)
          }
      }
      return 0;
    case 2:
      off__0 = param[2];
      n__0 = param[1];
      insertion_point = state[6] - state[9] | 0;
      co_ = state[3];
      if (co_) {
        match__2 = co_[1];
        tabs__0 = match__2[1];
        find =
          function(n, param) {
            var l;
            var x;
            var param__0 = param;
            for (; ; ) {
              if (param__0) {
                l = param__0[2];
                x = param__0[1];
                if (runtime["caml_greaterequal"](x, n)) {return x;}
                param__0 = l;
                continue;
              }
              throw caml_wrap_thrown_exception(Not_found);
            }
          };
        cp_ = tabs__0[1];
        if (cp_) {
          x = cp_[1];
          try {cq_ = find(insertion_point, tabs__0[1]);x__0 = cq_;}
          catch(cr_) {
            cr_ = runtime["caml_wrap_exception"](cr_);
            if (cr_ !== Not_found) {
              throw caml_wrap_thrown_exception_reraise(cr_);
            }
            x__0 = x;
          }
          tab = x__0;
        }
        else tab = insertion_point;
        offset = tab - insertion_point | 0;
        return 0 <= offset ?
          break_same_line(state, offset + n__0 | 0) :
          break_new_line(state, tab + off__0 | 0, state[6]);
      }
      return 0;
    case 3:
      ty__0 = param[2];
      off__1 = param[1];
      insertion_point__0 = state[6] - state[9] | 0;
      if (state[8] < insertion_point__0) {pp_force_break_line(state);}
      offset__0 = state[9] - off__1 | 0;
      bl_type = 1 === ty__0 ? 1 : state[9] < size ? ty__0 : 5;
      state[2] = [0,[0,bl_type,offset__0],state[2]];
      return 0;
    case 4:
      tbox = param[1];
      state[3] = [0,tbox,state[3]];
      return 0;
    default:
      tag_name__0 = param[1];
      marker__0 = call1(state[24], tag_name__0);
      pp_output_string(state, marker__0);
      state[5] = [0,tag_name__0,state[5]];
      return 0
    }
}

function advance_loop(state) {
  var size__0;
  var cg_;
  var cf_;
  var ce_;
  var tok;
  var len;
  var size;
  var match;
  for (; ; ) {
    match = peek_queue(state[28]);
    size = match[1];
    len = match[3];
    tok = match[2];
    ce_ = size < 0 ? 1 : 0;
    cf_ = ce_ ? (state[13] - state[12] | 0) < state[9] ? 1 : 0 : ce_;
    cg_ = 1 - cf_;
    if (cg_) {
      take_queue(state[28]);
      size__0 = 0 <= size ? size : pp_infinity;
      format_pp_token(state, size__0, tok);
      state[12] = len + state[12] | 0;
      continue;
    }
    return cg_;
  }
}

function advance_left(state) {
  var cc_;
  try {cc_ = advance_loop(state);return cc_;}
  catch(cd_) {
    cd_ = runtime["caml_wrap_exception"](cd_);
    if (cd_ === Empty_queue) {return 0;}
    throw caml_wrap_thrown_exception_reraise(cd_);
  }
}

function enqueue_advance(state, tok) {
  pp_enqueue(state, tok);
  return advance_left(state);
}

function make_queue_elem(size, tok, len) {return [0,size,tok,len];}

function enqueue_string_as(state, size, s) {
  return enqueue_advance(state, make_queue_elem(size, [0,s], size));
}

function enqueue_string(state, s) {
  var len = caml_ml_string_length(s);
  return enqueue_string_as(state, len, s);
}

var q_elem = make_queue_elem(-1, a_, 0);
var scan_stack_bottom = [0,[0,-1,q_elem],0];

function clear_scan_stack(state) {state[1] = scan_stack_bottom;return 0;}

function set_size(state, ty) {
  var match;
  var queue_elem;
  var left_tot;
  var size;
  var t;
  var tok;
  var b__;
  var ca_;
  var cb_;
  var b9_ = state[1];
  if (b9_) {
    match = b9_[1];
    queue_elem = match[2];
    left_tot = match[1];
    size = queue_elem[1];
    t = b9_[2];
    tok = queue_elem[2];
    if (left_tot < state[12]) {return clear_scan_stack(state);}
    if (! (typeof tok === "number")) {
      switch (tok[0]) {
        case 3:
          ca_ = 1 - ty;
          if (ca_) {
            queue_elem[1] = state[13] + size | 0;
            state[1] = t;
            cb_ = 0;
          }
          else cb_ = ca_;
          return cb_;
        case 1:
        case 2:
          if (ty) {
            queue_elem[1] = state[13] + size | 0;
            state[1] = t;
            b__ = 0;
          }
          else b__ = ty;
          return b__
        }
    }
    return 0;
  }
  return 0;
}

function scan_push(state, b, tok) {
  pp_enqueue(state, tok);
  if (b) {set_size(state, 1);}
  state[1] = [0,[0,state[13],tok],state[1]];
  return 0;
}

function pp_open_box_gen(state, indent, br_ty) {
  var elem;
  state[14] = state[14] + 1 | 0;
  if (state[14] < state[15]) {
    elem = make_queue_elem(- state[13] | 0, [3,indent,br_ty], 0);
    return scan_push(state, 0, elem);
  }
  var b8_ = state[14] === state[15] ? 1 : 0;
  return b8_ ? enqueue_string(state, state[16]) : b8_;
}

function pp_open_sys_box(state) {return pp_open_box_gen(state, 0, 3);}

function pp_close_box(state, param) {
  var b7_;
  var b6_ = 1 < state[14] ? 1 : 0;
  if (b6_) {
    if (state[14] < state[15]) {
      pp_enqueue(state, [0,0,1,0]);
      set_size(state, 1);
      set_size(state, 0);
    }
    state[14] = state[14] + -1 | 0;
    b7_ = 0;
  }
  else b7_ = b6_;
  return b7_;
}

function pp_open_tag(state, tag_name) {
  if (state[22]) {
    state[4] = [0,tag_name,state[4]];
    call1(state[26], tag_name);
  }
  var b5_ = state[23];
  return b5_ ? pp_enqueue(state, [0,0,[5,tag_name],0]) : b5_;
}

function pp_close_tag(state, param) {
  var b4_;
  var tag_name;
  var tags;
  var b3_;
  if (state[23]) {pp_enqueue(state, [0,0,5,0]);}
  var b2_ = state[22];
  if (b2_) {
    b3_ = state[4];
    if (b3_) {
      tags = b3_[2];
      tag_name = b3_[1];
      call1(state[27], tag_name);
      state[4] = tags;
      return 0;
    }
    b4_ = 0;
  }
  else b4_ = b2_;
  return b4_;
}

function pp_set_print_tags(state, b) {state[22] = b;return 0;}

function pp_set_mark_tags(state, b) {state[23] = b;return 0;}

function pp_get_print_tags(state, param) {return state[22];}

function pp_get_mark_tags(state, param) {return state[23];}

function pp_set_tags(state, b) {
  pp_set_print_tags(state, b);
  return pp_set_mark_tags(state, b);
}

function pp_get_formatter_tag_functions(state, param) {return [0,state[24],state[25],state[26],state[27]];
}

function pp_set_formatter_tag_functions(state, param) {
  var pct = param[4];
  var pot = param[3];
  var mct = param[2];
  var mot = param[1];
  state[24] = mot;
  state[25] = mct;
  state[26] = pot;
  state[27] = pct;
  return 0;
}

function pp_rinit(state) {
  pp_clear_queue(state);
  clear_scan_stack(state);
  state[2] = 0;
  state[3] = 0;
  state[4] = 0;
  state[5] = 0;
  state[10] = 0;
  state[14] = 0;
  state[9] = state[6];
  return pp_open_sys_box(state);
}

function clear_tag_stack(state) {
  var b0_ = state[4];
  function b1_(param) {return pp_close_tag(state, 0);}
  return call2(List[15], b1_, b0_);
}

function pp_flush_queue(state, b) {
  clear_tag_stack(state);
  for (; ; ) {
    if (1 < state[14]) {pp_close_box(state, 0);continue;}
    state[13] = pp_infinity;
    advance_left(state);
    if (b) {pp_output_newline(state);}
    return pp_rinit(state);
  }
}

function pp_print_as_size(state, size, s) {
  var bZ_ = state[14] < state[15] ? 1 : 0;
  return bZ_ ? enqueue_string_as(state, size, s) : bZ_;
}

function pp_print_as(state, isize, s) {
  return pp_print_as_size(state, isize, s);
}

function pp_print_string(state, s) {
  return pp_print_as(state, caml_ml_string_length(s), s);
}

function pp_print_int(state, i) {
  return pp_print_string(state, call1(Pervasives[21], i));
}

function pp_print_float(state, f) {
  return pp_print_string(state, call1(Pervasives[23], f));
}

function pp_print_bool(state, b) {
  return pp_print_string(state, call1(Pervasives[18], b));
}

function pp_print_char(state, c) {
  return pp_print_as(state, 1, call2(String[1], 1, c));
}

function pp_open_hbox(state, param) {return pp_open_box_gen(state, 0, 0);}

function pp_open_vbox(state, indent) {
  return pp_open_box_gen(state, indent, 1);
}

function pp_open_hvbox(state, indent) {
  return pp_open_box_gen(state, indent, 2);
}

function pp_open_hovbox(state, indent) {
  return pp_open_box_gen(state, indent, 3);
}

function pp_open_box(state, indent) {
  return pp_open_box_gen(state, indent, 4);
}

function pp_print_newline(state, param) {
  pp_flush_queue(state, 1);
  return call1(state[18], 0);
}

function pp_print_flush(state, param) {
  pp_flush_queue(state, 0);
  return call1(state[18], 0);
}

function pp_force_newline(state, param) {
  var bY_ = state[14] < state[15] ? 1 : 0;
  return bY_ ? enqueue_advance(state, make_queue_elem(0, 3, 0)) : bY_;
}

function pp_print_if_newline(state, param) {
  var bX_ = state[14] < state[15] ? 1 : 0;
  return bX_ ? enqueue_advance(state, make_queue_elem(0, 4, 0)) : bX_;
}

function pp_print_break(state, width, offset) {
  var elem;
  var bW_ = state[14] < state[15] ? 1 : 0;
  if (bW_) {
    elem = make_queue_elem(- state[13] | 0, [1,width,offset], width);
    return scan_push(state, 1, elem);
  }
  return bW_;
}

function pp_print_space(state, param) {return pp_print_break(state, 1, 0);}

function pp_print_cut(state, param) {return pp_print_break(state, 0, 0);}

function pp_open_tbox(state, param) {
  var elem;
  state[14] = state[14] + 1 | 0;
  var bV_ = state[14] < state[15] ? 1 : 0;
  if (bV_) {
    elem = make_queue_elem(0, [4,[0,[0,0]]], 0);
    return enqueue_advance(state, elem);
  }
  return bV_;
}

function pp_close_tbox(state, param) {
  var bT_;
  var elem;
  var bU_;
  var bS_ = 1 < state[14] ? 1 : 0;
  if (bS_) {
    bT_ = state[14] < state[15] ? 1 : 0;
    if (bT_) {
      elem = make_queue_elem(0, 2, 0);
      enqueue_advance(state, elem);
      state[14] = state[14] + -1 | 0;
      bU_ = 0;
    }
    else bU_ = bT_;
  }
  else bU_ = bS_;
  return bU_;
}

function pp_print_tbreak(state, width, offset) {
  var elem;
  var bR_ = state[14] < state[15] ? 1 : 0;
  if (bR_) {
    elem = make_queue_elem(- state[13] | 0, [2,width,offset], width);
    return scan_push(state, 1, elem);
  }
  return bR_;
}

function pp_print_tab(state, param) {return pp_print_tbreak(state, 0, 0);}

function pp_set_tab(state, param) {
  var elem;
  var bQ_ = state[14] < state[15] ? 1 : 0;
  if (bQ_) {
    elem = make_queue_elem(0, 0, 0);
    return enqueue_advance(state, elem);
  }
  return bQ_;
}

function pp_set_max_boxes(state, n) {
  var bP_;
  var bO_ = 1 < n ? 1 : 0;
  if (bO_) {
    state[15] = n;
    bP_ = 0;
  }
  else bP_ = bO_;
  return bP_;
}

function pp_get_max_boxes(state, param) {return state[15];}

function pp_over_max_boxes(state, param) {
  return state[14] === state[15] ? 1 : 0;
}

function pp_set_ellipsis_text(state, s) {state[16] = s;return 0;}

function pp_get_ellipsis_text(state, param) {return state[16];}

function pp_limit(n) {return n < 1000000010 ? n : 1000000009;}

function pp_set_min_space_left(state, n) {
  var n__0;
  var bN_ = 1 <= n ? 1 : 0;
  if (bN_) {
    n__0 = pp_limit(n);
    state[7] = n__0;
    state[8] = state[6] - state[7] | 0;
    return pp_rinit(state);
  }
  return bN_;
}

function pp_set_max_indent(state, n) {
  return pp_set_min_space_left(state, state[6] - n | 0);
}

function pp_get_max_indent(state, param) {return state[8];}

function pp_set_margin(state, n) {
  var n__0;
  var new_max_indent;
  var bM_;
  var bL_ = 1 <= n ? 1 : 0;
  if (bL_) {
    n__0 = pp_limit(n);
    state[6] = n__0;
    if (state[8] <= state[6]) new_max_indent = state[8];
    else {
      bM_ = call2(Pervasives[5], state[6] - state[7] | 0, state[6] / 2 | 0);
      new_max_indent = call2(Pervasives[5], bM_, 1);
    }
    return pp_set_max_indent(state, new_max_indent);
  }
  return bL_;
}

function pp_get_margin(state, param) {return state[6];}

function pp_set_formatter_out_functions(state, param) {
  var j = param[5];
  var i = param[4];
  var h = param[3];
  var g = param[2];
  var f = param[1];
  state[17] = f;
  state[18] = g;
  state[19] = h;
  state[20] = i;
  state[21] = j;
  return 0;
}

function pp_get_formatter_out_functions(state, param) {
  return [0,state[17],state[18],state[19],state[20],state[21]];
}

function pp_set_formatter_output_functions(state, f, g) {state[17] = f;state[18] = g;return 0;
}

function pp_get_formatter_output_functions(state, param) {return [0,state[17],state[18]];
}

function display_newline(state, param) {return call3(state[17], cst, 0, 1);}

var blank_line = call2(String[1], 80, 32);

function display_blanks(state, n) {
  var bK_;
  var n__1;
  var n__0 = n;
  for (; ; ) {
    bK_ = 0 < n__0 ? 1 : 0;
    if (bK_) {
      if (80 < n__0) {
        call3(state[17], blank_line, 0, 80);
        n__1 = n__0 + -80 | 0;
        n__0 = n__1;
        continue;
      }
      return call3(state[17], blank_line, 0, n__0);
    }
    return bK_;
  }
}

function pp_set_formatter_out_channel(state, oc) {
  state[17] = call1(Pervasives[57], oc);
  state[18] = function(param) {return call1(Pervasives[51], oc);};
  state[19] = function(bJ_) {return display_newline(state, bJ_);};
  state[20] = function(bI_) {return display_blanks(state, bI_);};
  state[21] = function(bH_) {return display_blanks(state, bH_);};
  return 0;
}

function default_pp_mark_open_tag(s) {
  var bG_ = call2(Pervasives[16], s, cst__0);
  return call2(Pervasives[16], cst__1, bG_);
}

function default_pp_mark_close_tag(s) {
  var bF_ = call2(Pervasives[16], s, cst__2);
  return call2(Pervasives[16], cst__3, bF_);
}

function default_pp_print_open_tag(bE_) {return 0;}

function default_pp_print_close_tag(bD_) {return 0;}

function pp_make_formatter(f, g, h, i, j) {
  var pp_queue = make_queue(0);
  var sys_tok = make_queue_elem(-1, b_, 0);
  add_queue(sys_tok, pp_queue);
  var sys_scan_stack = [0,[0,1,sys_tok],scan_stack_bottom];
  return [
    0,
    sys_scan_stack,
    0,
    0,
    0,
    0,
    78,
    10,
    68,
    78,
    0,
    1,
    1,
    1,
    1,
    Pervasives[7],
    cst__4,
    f,
    g,
    h,
    i,
    j,
    0,
    0,
    default_pp_mark_open_tag,
    default_pp_mark_close_tag,
    default_pp_print_open_tag,
    default_pp_print_close_tag,
    pp_queue
  ];
}

function formatter_of_out_functions(out_funs) {
  return pp_make_formatter(
    out_funs[1],
    out_funs[2],
    out_funs[3],
    out_funs[4],
    out_funs[5]
  );
}

function make_formatter(output, flush) {
  function bv_(bC_) {return 0;}
  function bw_(bB_) {return 0;}
  var ppf = pp_make_formatter(
    output,
    flush,
    function(bA_) {return 0;},
    bw_,
    bv_
  );
  ppf[19] = function(bz_) {return display_newline(ppf, bz_);};
  ppf[20] = function(by_) {return display_blanks(ppf, by_);};
  ppf[21] = function(bx_) {return display_blanks(ppf, bx_);};
  return ppf;
}

function formatter_of_out_channel(oc) {
  function bu_(param) {return call1(Pervasives[51], oc);}
  return make_formatter(call1(Pervasives[57], oc), bu_);
}

function formatter_of_buffer(b) {
  function bs_(bt_) {return 0;}
  return make_formatter(call1(Buffer[16], b), bs_);
}

var pp_buffer_size = 512;

function pp_make_buffer(param) {return call1(Buffer[1], pp_buffer_size);}

var stdbuf = pp_make_buffer(0);
var std_formatter = formatter_of_out_channel(Pervasives[27]);
var err_formatter = formatter_of_out_channel(Pervasives[28]);
var str_formatter = formatter_of_buffer(stdbuf);

function flush_buffer_formatter(buf, ppf) {
  pp_flush_queue(ppf, 0);
  var s = call1(Buffer[2], buf);
  call1(Buffer[9], buf);
  return s;
}

function flush_str_formatter(param) {
  return flush_buffer_formatter(stdbuf, str_formatter);
}

function make_symbolic_output_buffer(param) {return [0,0];}

function clear_symbolic_output_buffer(sob) {sob[1] = 0;return 0;}

function get_symbolic_output_buffer(sob) {return call1(List[9], sob[1]);}

function flush_symbolic_output_buffer(sob) {
  var items = get_symbolic_output_buffer(sob);
  clear_symbolic_output_buffer(sob);
  return items;
}

function add_symbolic_output_item(sob, item) {sob[1] = [0,item,sob[1]];return 0;
}

function formatter_of_symbolic_output_buffer(sob) {
  function symbolic_flush(sob, param) {
    return add_symbolic_output_item(sob, 0);
  }
  function symbolic_newline(sob, param) {
    return add_symbolic_output_item(sob, 1);
  }
  function symbolic_string(sob, s, i, n) {
    return add_symbolic_output_item(sob, [0,call3(String[4], s, i, n)]);
  }
  function symbolic_spaces(sob, n) {
    return add_symbolic_output_item(sob, [1,n]);
  }
  function symbolic_indent(sob, n) {
    return add_symbolic_output_item(sob, [2,n]);
  }
  function f(bp_, bq_, br_) {return symbolic_string(sob, bp_, bq_, br_);}
  function g(bo_) {return symbolic_flush(sob, bo_);}
  function h(bn_) {return symbolic_newline(sob, bn_);}
  function i(bm_) {return symbolic_spaces(sob, bm_);}
  function j(bl_) {return symbolic_indent(sob, bl_);}
  return pp_make_formatter(f, g, h, i, j);
}

function open_hbox(bk_) {return pp_open_hbox(std_formatter, bk_);}

function open_vbox(bj_) {return pp_open_vbox(std_formatter, bj_);}

function open_hvbox(bi_) {return pp_open_hvbox(std_formatter, bi_);}

function open_hovbox(bh_) {return pp_open_hovbox(std_formatter, bh_);}

function open_box(bg_) {return pp_open_box(std_formatter, bg_);}

function close_box(bf_) {return pp_close_box(std_formatter, bf_);}

function open_tag(be_) {return pp_open_tag(std_formatter, be_);}

function close_tag(bd_) {return pp_close_tag(std_formatter, bd_);}

function print_as(bb_, bc_) {return pp_print_as(std_formatter, bb_, bc_);}

function print_string(ba_) {return pp_print_string(std_formatter, ba_);}

function print_int(a__) {return pp_print_int(std_formatter, a__);}

function print_float(a9_) {return pp_print_float(std_formatter, a9_);}

function print_char(a8_) {return pp_print_char(std_formatter, a8_);}

function print_bool(a7_) {return pp_print_bool(std_formatter, a7_);}

function print_break(a5_, a6_) {
  return pp_print_break(std_formatter, a5_, a6_);
}

function print_cut(a4_) {return pp_print_cut(std_formatter, a4_);}

function print_space(a3_) {return pp_print_space(std_formatter, a3_);}

function force_newline(a2_) {return pp_force_newline(std_formatter, a2_);}

function print_flush(a1_) {return pp_print_flush(std_formatter, a1_);}

function print_newline(a0_) {return pp_print_newline(std_formatter, a0_);}

function print_if_newline(aZ_) {
  return pp_print_if_newline(std_formatter, aZ_);
}

function open_tbox(aY_) {return pp_open_tbox(std_formatter, aY_);}

function close_tbox(aX_) {return pp_close_tbox(std_formatter, aX_);}

function print_tbreak(aV_, aW_) {
  return pp_print_tbreak(std_formatter, aV_, aW_);
}

function set_tab(aU_) {return pp_set_tab(std_formatter, aU_);}

function print_tab(aT_) {return pp_print_tab(std_formatter, aT_);}

function set_margin(aS_) {return pp_set_margin(std_formatter, aS_);}

function get_margin(aR_) {return pp_get_margin(std_formatter, aR_);}

function set_max_indent(aQ_) {return pp_set_max_indent(std_formatter, aQ_);}

function get_max_indent(aP_) {return pp_get_max_indent(std_formatter, aP_);}

function set_max_boxes(aO_) {return pp_set_max_boxes(std_formatter, aO_);}

function get_max_boxes(aN_) {return pp_get_max_boxes(std_formatter, aN_);}

function over_max_boxes(aM_) {return pp_over_max_boxes(std_formatter, aM_);}

function set_ellipsis_text(aL_) {
  return pp_set_ellipsis_text(std_formatter, aL_);
}

function get_ellipsis_text(aK_) {
  return pp_get_ellipsis_text(std_formatter, aK_);
}

function set_formatter_out_channel(aJ_) {
  return pp_set_formatter_out_channel(std_formatter, aJ_);
}

function set_formatter_out_functions(aI_) {
  return pp_set_formatter_out_functions(std_formatter, aI_);
}

function get_formatter_out_functions(aH_) {
  return pp_get_formatter_out_functions(std_formatter, aH_);
}

function set_formatter_output_functions(aF_, aG_) {
  return pp_set_formatter_output_functions(std_formatter, aF_, aG_);
}

function get_formatter_output_functions(aE_) {
  return pp_get_formatter_output_functions(std_formatter, aE_);
}

function set_formatter_tag_functions(aD_) {
  return pp_set_formatter_tag_functions(std_formatter, aD_);
}

function get_formatter_tag_functions(aC_) {
  return pp_get_formatter_tag_functions(std_formatter, aC_);
}

function set_print_tags(aB_) {return pp_set_print_tags(std_formatter, aB_);}

function get_print_tags(aA_) {return pp_get_print_tags(std_formatter, aA_);}

function set_mark_tags(az_) {return pp_set_mark_tags(std_formatter, az_);}

function get_mark_tags(ay_) {return pp_get_mark_tags(std_formatter, ay_);}

function set_tags(ax_) {return pp_set_tags(std_formatter, ax_);}

function pp_print_list(opt, pp_v, ppf, param) {
  var sth;
  var pp_sep;
  var av_;
  var aw_;
  var opt__1;
  var opt__0 = opt;
  var param__0 = param;
  for (; ; ) {
    if (opt__0) {
      sth = opt__0[1];
      pp_sep = sth;
    }
    else pp_sep = pp_print_cut;
    if (param__0) {
      av_ = param__0[2];
      aw_ = param__0[1];
      if (av_) {
        call2(pp_v, ppf, aw_);
        call2(pp_sep, ppf, 0);
        opt__1 = [0,pp_sep];
        opt__0 = opt__1;
        param__0 = av_;
        continue;
      }
      return call2(pp_v, ppf, aw_);
    }
    return 0;
  }
}

function pp_print_text(ppf, s) {
  var match;
  var au_;
  var len = caml_ml_string_length(s);
  var left = [0,0];
  var right = [0,0];
  function flush(param) {
    pp_print_string(ppf, call3(String[4], s, left[1], right[1] - left[1] | 0));
    right[1] += 1;
    left[1] = right[1];
    return 0;
  }
  for (; ; ) {
    if (right[1] !== len) {
      match = runtime["caml_string_get"](s, right[1]);
      if (10 === match) {
        flush(0);
        pp_force_newline(ppf, 0);
      }
      else if (32 === match) {
        flush(0);
        pp_print_space(ppf, 0);
      }
      else right[1] += 1;
      continue;
    }
    au_ = left[1] !== len ? 1 : 0;
    return au_ ? flush(0) : au_;
  }
}

function compute_tag(output, tag_acc) {
  var buf = call1(Buffer[1], 16);
  var ppf = formatter_of_buffer(buf);
  call2(output, ppf, tag_acc);
  pp_print_flush(ppf, 0);
  var len = call1(Buffer[7], buf);
  return 2 <= len ?
    call3(Buffer[4], buf, 1, len + -2 | 0) :
    call1(Buffer[2], buf);
}

function output_formatting_lit(ppf, fmting_lit) {
  var c;
  var width;
  var offset;
  if (typeof fmting_lit === "number") switch (fmting_lit) {
    case 0:
      return pp_close_box(ppf, 0);
    case 1:
      return pp_close_tag(ppf, 0);
    case 2:
      return pp_print_flush(ppf, 0);
    case 3:
      return pp_force_newline(ppf, 0);
    case 4:
      return pp_print_newline(ppf, 0);
    case 5:
      return pp_print_char(ppf, 64);
    default:
      return pp_print_char(ppf, 37)
    }
  else switch (fmting_lit[0]) {
    case 0:
      offset = fmting_lit[3];
      width = fmting_lit[2];
      return pp_print_break(ppf, width, offset);
    case 1:
      return 0;
    default:
      c = fmting_lit[1];
      pp_print_char(ppf, 64);
      return pp_print_char(ppf, c)
    }
}

function output_acc(ppf, acc) {
  var switch__8;
  var switch__7;
  var switch__6;
  var switch__5;
  var switch__4;
  var switch__3;
  var switch__2;
  var switch__1;
  var switch__0;
  var p__6;
  var msg;
  var p__5;
  var p__4;
  var f__0;
  var at_;
  var as_;
  var ar_;
  var aq_;
  var ap_;
  var ao_;
  var an_;
  var am_;
  var al_;
  var ak_;
  var aj_;
  var ai_;
  var c__0;
  var size__0;
  var p__3;
  var ah_;
  var ag_;
  var af_;
  var ae_;
  var c;
  var p__2;
  var ad_;
  var ac_;
  var s__0;
  var size;
  var p__1;
  var ab_;
  var aa_;
  var Z_;
  var Y_;
  var s;
  var p__0;
  var X_;
  var W_;
  var indent;
  var bty;
  var match;
  var V_;
  var acc__1;
  var acc__0;
  var U_;
  var T_;
  var p;
  var f;
  if (typeof acc === "number") return 0;
  else switch (acc[0]) {
    case 0:
      f = acc[2];
      p = acc[1];
      output_acc(ppf, p);
      return output_formatting_lit(ppf, f);
    case 1:
      T_ = acc[2];
      U_ = acc[1];
      if (0 === T_[0]) {
        acc__0 = T_[1];
        output_acc(ppf, U_);
        return pp_open_tag(ppf, compute_tag(output_acc, acc__0));
      }
      acc__1 = T_[1];
      output_acc(ppf, U_);
      V_ = compute_tag(output_acc, acc__1);
      match = call1(CamlinternalFormat[21], V_);
      bty = match[2];
      indent = match[1];
      return pp_open_box_gen(ppf, indent, bty);
    case 2:
      W_ = acc[1];
      if (typeof W_ === "number") switch__1 = 1;
      else if (0 === W_[0]) {
        Y_ = W_[2];
        if (typeof Y_ === "number") switch__2 = 1;
        else if (1 === Y_[0]) {
          Z_ = acc[2];
          aa_ = Y_[2];
          ab_ = W_[1];
          s__0 = Z_;
          size = aa_;
          p__1 = ab_;
          switch__0 = 0;
          switch__1 = 0;
          switch__2 = 0;
        }
        else switch__2 = 1;
        if (switch__2) {switch__1 = 1;}
      }
      else switch__1 = 1;
      if (switch__1) {X_ = acc[2];s = X_;p__0 = W_;switch__0 = 2;}
      break;
    case 3:
      ac_ = acc[1];
      if (typeof ac_ === "number") switch__3 = 1;
      else if (0 === ac_[0]) {
        ae_ = ac_[2];
        if (typeof ae_ === "number") switch__4 = 1;
        else if (1 === ae_[0]) {
          af_ = acc[2];
          ag_ = ae_[2];
          ah_ = ac_[1];
          c__0 = af_;
          size__0 = ag_;
          p__3 = ah_;
          switch__0 = 1;
          switch__3 = 0;
          switch__4 = 0;
        }
        else switch__4 = 1;
        if (switch__4) {switch__3 = 1;}
      }
      else switch__3 = 1;
      if (switch__3) {ad_ = acc[2];c = ad_;p__2 = ac_;switch__0 = 3;}
      break;
    case 4:
      ai_ = acc[1];
      if (typeof ai_ === "number") switch__5 = 1;
      else if (0 === ai_[0]) {
        ak_ = ai_[2];
        if (typeof ak_ === "number") switch__6 = 1;
        else if (1 === ak_[0]) {
          al_ = acc[2];
          am_ = ak_[2];
          an_ = ai_[1];
          s__0 = al_;
          size = am_;
          p__1 = an_;
          switch__0 = 0;
          switch__5 = 0;
          switch__6 = 0;
        }
        else switch__6 = 1;
        if (switch__6) {switch__5 = 1;}
      }
      else switch__5 = 1;
      if (switch__5) {aj_ = acc[2];s = aj_;p__0 = ai_;switch__0 = 2;}
      break;
    case 5:
      ao_ = acc[1];
      if (typeof ao_ === "number") switch__7 = 1;
      else if (0 === ao_[0]) {
        aq_ = ao_[2];
        if (typeof aq_ === "number") switch__8 = 1;
        else if (1 === aq_[0]) {
          ar_ = acc[2];
          as_ = aq_[2];
          at_ = ao_[1];
          c__0 = ar_;
          size__0 = as_;
          p__3 = at_;
          switch__0 = 1;
          switch__7 = 0;
          switch__8 = 0;
        }
        else switch__8 = 1;
        if (switch__8) {switch__7 = 1;}
      }
      else switch__7 = 1;
      if (switch__7) {ap_ = acc[2];c = ap_;p__2 = ao_;switch__0 = 3;}
      break;
    case 6:
      f__0 = acc[2];
      p__4 = acc[1];
      output_acc(ppf, p__4);
      return call1(f__0, ppf);
    case 7:
      p__5 = acc[1];
      output_acc(ppf, p__5);
      return pp_print_flush(ppf, 0);
    default:
      msg = acc[2];
      p__6 = acc[1];
      output_acc(ppf, p__6);
      return call1(Pervasives[1], msg)
    }
  switch (switch__0) {
    case 0:
      output_acc(ppf, p__1);
      return pp_print_as_size(ppf, size, s__0);
    case 1:
      output_acc(ppf, p__3);
      return pp_print_as_size(ppf, size__0, call2(String[1], 1, c__0));
    case 2:
      output_acc(ppf, p__0);
      return pp_print_string(ppf, s);
    default:
      output_acc(ppf, p__2);
      return pp_print_char(ppf, c)
    }
}

function strput_acc(ppf, acc) {
  var switch__8;
  var switch__7;
  var switch__6;
  var switch__5;
  var switch__4;
  var switch__3;
  var switch__2;
  var switch__1;
  var switch__0;
  var p__6;
  var msg;
  var p__5;
  var p__4;
  var size__1;
  var f__1;
  var S_;
  var f__0;
  var R_;
  var Q_;
  var P_;
  var O_;
  var N_;
  var M_;
  var L_;
  var K_;
  var J_;
  var I_;
  var H_;
  var G_;
  var F_;
  var c__0;
  var size__0;
  var p__3;
  var E_;
  var D_;
  var C_;
  var B_;
  var c;
  var p__2;
  var A_;
  var z_;
  var s__0;
  var size;
  var p__1;
  var y_;
  var x_;
  var w_;
  var v_;
  var s;
  var p__0;
  var u_;
  var t_;
  var indent;
  var bty;
  var match;
  var s_;
  var acc__1;
  var acc__0;
  var r_;
  var q_;
  var p;
  var f;
  if (typeof acc === "number") return 0;
  else switch (acc[0]) {
    case 0:
      f = acc[2];
      p = acc[1];
      strput_acc(ppf, p);
      return output_formatting_lit(ppf, f);
    case 1:
      q_ = acc[2];
      r_ = acc[1];
      if (0 === q_[0]) {
        acc__0 = q_[1];
        strput_acc(ppf, r_);
        return pp_open_tag(ppf, compute_tag(strput_acc, acc__0));
      }
      acc__1 = q_[1];
      strput_acc(ppf, r_);
      s_ = compute_tag(strput_acc, acc__1);
      match = call1(CamlinternalFormat[21], s_);
      bty = match[2];
      indent = match[1];
      return pp_open_box_gen(ppf, indent, bty);
    case 2:
      t_ = acc[1];
      if (typeof t_ === "number") switch__1 = 1;
      else if (0 === t_[0]) {
        v_ = t_[2];
        if (typeof v_ === "number") switch__2 = 1;
        else if (1 === v_[0]) {
          w_ = acc[2];
          x_ = v_[2];
          y_ = t_[1];
          s__0 = w_;
          size = x_;
          p__1 = y_;
          switch__0 = 0;
          switch__1 = 0;
          switch__2 = 0;
        }
        else switch__2 = 1;
        if (switch__2) {switch__1 = 1;}
      }
      else switch__1 = 1;
      if (switch__1) {u_ = acc[2];s = u_;p__0 = t_;switch__0 = 2;}
      break;
    case 3:
      z_ = acc[1];
      if (typeof z_ === "number") switch__3 = 1;
      else if (0 === z_[0]) {
        B_ = z_[2];
        if (typeof B_ === "number") switch__4 = 1;
        else if (1 === B_[0]) {
          C_ = acc[2];
          D_ = B_[2];
          E_ = z_[1];
          c__0 = C_;
          size__0 = D_;
          p__3 = E_;
          switch__0 = 1;
          switch__3 = 0;
          switch__4 = 0;
        }
        else switch__4 = 1;
        if (switch__4) {switch__3 = 1;}
      }
      else switch__3 = 1;
      if (switch__3) {A_ = acc[2];c = A_;p__2 = z_;switch__0 = 3;}
      break;
    case 4:
      F_ = acc[1];
      if (typeof F_ === "number") switch__5 = 1;
      else if (0 === F_[0]) {
        H_ = F_[2];
        if (typeof H_ === "number") switch__6 = 1;
        else if (1 === H_[0]) {
          I_ = acc[2];
          J_ = H_[2];
          K_ = F_[1];
          s__0 = I_;
          size = J_;
          p__1 = K_;
          switch__0 = 0;
          switch__5 = 0;
          switch__6 = 0;
        }
        else switch__6 = 1;
        if (switch__6) {switch__5 = 1;}
      }
      else switch__5 = 1;
      if (switch__5) {G_ = acc[2];s = G_;p__0 = F_;switch__0 = 2;}
      break;
    case 5:
      L_ = acc[1];
      if (typeof L_ === "number") switch__7 = 1;
      else if (0 === L_[0]) {
        N_ = L_[2];
        if (typeof N_ === "number") switch__8 = 1;
        else if (1 === N_[0]) {
          O_ = acc[2];
          P_ = N_[2];
          Q_ = L_[1];
          c__0 = O_;
          size__0 = P_;
          p__3 = Q_;
          switch__0 = 1;
          switch__7 = 0;
          switch__8 = 0;
        }
        else switch__8 = 1;
        if (switch__8) {switch__7 = 1;}
      }
      else switch__7 = 1;
      if (switch__7) {M_ = acc[2];c = M_;p__2 = L_;switch__0 = 3;}
      break;
    case 6:
      R_ = acc[1];
      if (! (typeof R_ === "number") && 0 === R_[0]) {
        S_ = R_[2];
        if (! (typeof S_ === "number") && 1 === S_[0]) {
          f__1 = acc[2];
          size__1 = S_[2];
          p__4 = R_[1];
          strput_acc(ppf, p__4);
          return pp_print_as_size(ppf, size__1, call1(f__1, 0));
        }
      }
      f__0 = acc[2];
      strput_acc(ppf, R_);
      return pp_print_string(ppf, call1(f__0, 0));
    case 7:
      p__5 = acc[1];
      strput_acc(ppf, p__5);
      return pp_print_flush(ppf, 0);
    default:
      msg = acc[2];
      p__6 = acc[1];
      strput_acc(ppf, p__6);
      return call1(Pervasives[1], msg)
    }
  switch (switch__0) {
    case 0:
      strput_acc(ppf, p__1);
      return pp_print_as_size(ppf, size, s__0);
    case 1:
      strput_acc(ppf, p__3);
      return pp_print_as_size(ppf, size__0, call2(String[1], 1, c__0));
    case 2:
      strput_acc(ppf, p__0);
      return pp_print_string(ppf, s);
    default:
      strput_acc(ppf, p__2);
      return pp_print_char(ppf, c)
    }
}

function kfprintf(k, ppf, param) {
  var fmt = param[1];
  var o_ = 0;
  function p_(ppf, acc) {output_acc(ppf, acc);return call1(k, ppf);}
  return call4(CamlinternalFormat[7], p_, ppf, o_, fmt);
}

function ikfprintf(k, ppf, param) {
  var fmt = param[1];
  return call3(CamlinternalFormat[8], k, ppf, fmt);
}

function fprintf(ppf) {
  function l_(n_) {return 0;}
  return function(m_) {return kfprintf(l_, ppf, m_);};
}

function ifprintf(ppf) {
  function i_(k_) {return 0;}
  return function(j_) {return ikfprintf(i_, ppf, j_);};
}

function printf(fmt) {return call1(fprintf(std_formatter), fmt);}

function eprintf(fmt) {return call1(fprintf(err_formatter), fmt);}

function ksprintf(k, param) {
  var fmt = param[1];
  var b = pp_make_buffer(0);
  var ppf = formatter_of_buffer(b);
  function k__0(param, acc) {
    strput_acc(ppf, acc);
    return call1(k, flush_buffer_formatter(b, ppf));
  }
  return call4(CamlinternalFormat[7], k__0, 0, 0, fmt);
}

function sprintf(fmt) {return ksprintf(function(s) {return s;}, fmt);}

function kasprintf(k, param) {
  var fmt = param[1];
  var b = pp_make_buffer(0);
  var ppf = formatter_of_buffer(b);
  function k__0(ppf, acc) {
    output_acc(ppf, acc);
    return call1(k, flush_buffer_formatter(b, ppf));
  }
  return call4(CamlinternalFormat[7], k__0, ppf, 0, fmt);
}

function asprintf(fmt) {return kasprintf(function(s) {return s;}, fmt);}

call1(Pervasives[88], print_flush);

function pp_set_all_formatter_output_functions(state, f, g, h, i) {
  pp_set_formatter_output_functions(state, f, g);
  state[19] = h;
  state[20] = i;
  return 0;
}

function pp_get_all_formatter_output_functions(state, param) {return [0,state[17],state[18],state[19],state[20]];
}

function set_all_formatter_output_functions(e_, f_, g_, h_) {
  return pp_set_all_formatter_output_functions(std_formatter, e_, f_, g_, h_);
}

function get_all_formatter_output_functions(d_) {
  return pp_get_all_formatter_output_functions(std_formatter, d_);
}

function bprintf(b, param) {
  var fmt = param[1];
  function k(ppf, acc) {output_acc(ppf, acc);return pp_flush_queue(ppf, 0);}
  var c_ = formatter_of_buffer(b);
  return call4(CamlinternalFormat[7], k, c_, 0, fmt);
}

var Format = [
  0,
  pp_open_box,
  open_box,
  pp_close_box,
  close_box,
  pp_open_hbox,
  open_hbox,
  pp_open_vbox,
  open_vbox,
  pp_open_hvbox,
  open_hvbox,
  pp_open_hovbox,
  open_hovbox,
  pp_print_string,
  print_string,
  pp_print_as,
  print_as,
  pp_print_int,
  print_int,
  pp_print_float,
  print_float,
  pp_print_char,
  print_char,
  pp_print_bool,
  print_bool,
  pp_print_space,
  print_space,
  pp_print_cut,
  print_cut,
  pp_print_break,
  print_break,
  pp_force_newline,
  force_newline,
  pp_print_if_newline,
  print_if_newline,
  pp_print_flush,
  print_flush,
  pp_print_newline,
  print_newline,
  pp_set_margin,
  set_margin,
  pp_get_margin,
  get_margin,
  pp_set_max_indent,
  set_max_indent,
  pp_get_max_indent,
  get_max_indent,
  pp_set_max_boxes,
  set_max_boxes,
  pp_get_max_boxes,
  get_max_boxes,
  pp_over_max_boxes,
  over_max_boxes,
  pp_open_tbox,
  open_tbox,
  pp_close_tbox,
  close_tbox,
  pp_set_tab,
  set_tab,
  pp_print_tab,
  print_tab,
  pp_print_tbreak,
  print_tbreak,
  pp_set_ellipsis_text,
  set_ellipsis_text,
  pp_get_ellipsis_text,
  get_ellipsis_text,
  pp_open_tag,
  open_tag,
  pp_close_tag,
  close_tag,
  pp_set_tags,
  set_tags,
  pp_set_print_tags,
  set_print_tags,
  pp_set_mark_tags,
  set_mark_tags,
  pp_get_print_tags,
  get_print_tags,
  pp_get_mark_tags,
  get_mark_tags,
  pp_set_formatter_out_channel,
  set_formatter_out_channel,
  pp_set_formatter_output_functions,
  set_formatter_output_functions,
  pp_get_formatter_output_functions,
  get_formatter_output_functions,
  pp_set_formatter_out_functions,
  set_formatter_out_functions,
  pp_get_formatter_out_functions,
  get_formatter_out_functions,
  pp_set_formatter_tag_functions,
  set_formatter_tag_functions,
  pp_get_formatter_tag_functions,
  get_formatter_tag_functions,
  formatter_of_out_channel,
  std_formatter,
  err_formatter,
  formatter_of_buffer,
  stdbuf,
  str_formatter,
  flush_str_formatter,
  make_formatter,
  formatter_of_out_functions,
  make_symbolic_output_buffer,
  clear_symbolic_output_buffer,
  get_symbolic_output_buffer,
  flush_symbolic_output_buffer,
  add_symbolic_output_item,
  formatter_of_symbolic_output_buffer,
  pp_print_list,
  pp_print_text,
  fprintf,
  printf,
  eprintf,
  sprintf,
  asprintf,
  ifprintf,
  kfprintf,
  ikfprintf,
  ksprintf,
  kasprintf,
  bprintf,
  ksprintf,
  set_all_formatter_output_functions,
  get_all_formatter_output_functions,
  pp_set_all_formatter_output_functions,
  pp_get_all_formatter_output_functions
];

module.exports = Format;

/*::type Exports = {
  pp_open_box: (state: any, indent: any) => any,
  open_box: (indent: any) => any,
  pp_close_box: (state: any, param: any) => any,
  close_box: (param: any) => any,
  pp_open_hbox: (state: any, param: any) => any,
  open_hbox: (param: any) => any,
  pp_open_vbox: (state: any, indent: any) => any,
  open_vbox: (indent: any) => any,
  pp_open_hvbox: (state: any, indent: any) => any,
  open_hvbox: (indent: any) => any,
  pp_open_hovbox: (state: any, indent: any) => any,
  open_hovbox: (indent: any) => any,
  pp_print_string: (state: any, s: any) => any,
  print_string: (s: any) => any,
  pp_print_as: (state: any, isize: any, s: any) => any,
  print_as: (isize: any, s: any) => any,
  pp_print_int: (state: any, i: any) => any,
  print_int: (i: any) => any,
  pp_print_float: (state: any, f: any) => any,
  print_float: (f: any) => any,
  pp_print_char: (state: any, c: any) => any,
  print_char: (c: any) => any,
  pp_print_bool: (state: any, b: any) => any,
  print_bool: (b: any) => any,
  pp_print_space: (state: any, param: any) => any,
  print_space: (param: any) => any,
  pp_print_cut: (state: any, param: any) => any,
  print_cut: (param: any) => any,
  pp_print_break: (state: any, width: any, offset: any) => any,
  print_break: (width: any, offset: any) => any,
  pp_force_newline: (state: any, param: any) => any,
  force_newline: (param: any) => any,
  pp_print_if_newline: (state: any, param: any) => any,
  print_if_newline: (param: any) => any,
  pp_print_flush: (state: any, param: any) => any,
  print_flush: (param: any) => any,
  pp_print_newline: (state: any, param: any) => any,
  print_newline: (param: any) => any,
  pp_set_margin: (state: any, n: any) => any,
  set_margin: (n: any) => any,
  pp_get_margin: (state: any, param: any) => any,
  get_margin: (param: any) => any,
  pp_set_max_indent: (state: any, n: any) => any,
  set_max_indent: (n: any) => any,
  pp_get_max_indent: (state: any, param: any) => any,
  get_max_indent: (param: any) => any,
  pp_set_max_boxes: (state: any, n: any) => any,
  set_max_boxes: (n: any) => any,
  pp_get_max_boxes: (state: any, param: any) => any,
  get_max_boxes: (param: any) => any,
  pp_over_max_boxes: (state: any, param: any) => any,
  over_max_boxes: (param: any) => any,
  pp_open_tbox: (state: any, param: any) => any,
  open_tbox: (param: any) => any,
  pp_close_tbox: (state: any, param: any) => any,
  close_tbox: (param: any) => any,
  pp_set_tab: (state: any, param: any) => any,
  set_tab: (param: any) => any,
  pp_print_tab: (state: any, param: any) => any,
  print_tab: (param: any) => any,
  pp_print_tbreak: (state: any, width: any, offset: any) => any,
  print_tbreak: (width: any, offset: any) => any,
  pp_set_ellipsis_text: (state: any, s: any) => any,
  set_ellipsis_text: (s: any) => any,
  pp_get_ellipsis_text: (state: any, param: any) => any,
  get_ellipsis_text: (param: any) => any,
  pp_open_tag: (state: any, tag_name: any) => any,
  open_tag: (tag_name: any) => any,
  pp_close_tag: (state: any, param: any) => any,
  close_tag: (param: any) => any,
  pp_set_tags: (state: any, b: any) => any,
  set_tags: (b: any) => any,
  pp_set_print_tags: (state: any, b: any) => any,
  set_print_tags: (b: any) => any,
  pp_set_mark_tags: (state: any, b: any) => any,
  set_mark_tags: (b: any) => any,
  pp_get_print_tags: (state: any, param: any) => any,
  get_print_tags: (param: any) => any,
  pp_get_mark_tags: (state: any, param: any) => any,
  get_mark_tags: (param: any) => any,
  pp_set_formatter_out_channel: (state: any, oc: any) => any,
  set_formatter_out_channel: (oc: any) => any,
  pp_set_formatter_output_functions: (state: any, f: any, g: any) => any,
  set_formatter_output_functions: (f: any, g: any) => any,
  pp_get_formatter_output_functions: (state: any, param: any) => any,
  get_formatter_output_functions: (param: any) => any,
  pp_set_formatter_out_functions: (state: any, param: any) => any,
  set_formatter_out_functions: (param: any) => any,
  pp_get_formatter_out_functions: (state: any, param: any) => any,
  get_formatter_out_functions: (param: any) => any,
  pp_set_formatter_tag_functions: (state: any, param: any) => any,
  set_formatter_tag_functions: (param: any) => any,
  pp_get_formatter_tag_functions: (state: any, param: any) => any,
  get_formatter_tag_functions: (param: any) => any,
  formatter_of_out_channel: (oc: any) => any,
  std_formatter: any,
  err_formatter: any,
  formatter_of_buffer: (b: any) => any,
  stdbuf: any,
  str_formatter: any,
  flush_str_formatter: (param: any) => any,
  make_formatter: (output: any, flush: any) => any,
  formatter_of_out_functions: (out_funs: any) => any,
  make_symbolic_output_buffer: (param: any) => any,
  clear_symbolic_output_buffer: (sob: any) => any,
  get_symbolic_output_buffer: (sob: any) => any,
  flush_symbolic_output_buffer: (sob: any) => any,
  add_symbolic_output_item: (sob: any, item: any) => any,
  formatter_of_symbolic_output_buffer: (sob: any) => any,
  pp_print_list: (opt: any, pp_v: any, ppf: any, param: any) => any,
  pp_print_text: (ppf: any, s: any) => any,
  fprintf: (ppf: any) => any,
  printf: (fmt: any) => any,
  eprintf: (fmt: any) => any,
  sprintf: (fmt: any) => any,
  asprintf: (fmt: any) => any,
  ifprintf: (ppf: any) => any,
  kfprintf: (k: any, ppf: any, param: any) => any,
  ikfprintf: (k: any, ppf: any, param: any) => any,
  ksprintf: (k: any, param: any) => any,
  kasprintf: (k: any, param: any) => any,
  bprintf: (b: any, param: any) => any,
  set_all_formatter_output_functions: (f: any, g: any, h: any, i: any) => any,
  get_all_formatter_output_functions: (param: any) => any,
  pp_set_all_formatter_output_functions: (state: any, f: any, g: any, h: any, i: any) => any,
  pp_get_all_formatter_output_functions: (state: any, param: any) => any,
}*/
/** @type {{
  pp_open_box: (state: any, indent: any) => any,
  open_box: (indent: any) => any,
  pp_close_box: (state: any, param: any) => any,
  close_box: (param: any) => any,
  pp_open_hbox: (state: any, param: any) => any,
  open_hbox: (param: any) => any,
  pp_open_vbox: (state: any, indent: any) => any,
  open_vbox: (indent: any) => any,
  pp_open_hvbox: (state: any, indent: any) => any,
  open_hvbox: (indent: any) => any,
  pp_open_hovbox: (state: any, indent: any) => any,
  open_hovbox: (indent: any) => any,
  pp_print_string: (state: any, s: any) => any,
  print_string: (s: any) => any,
  pp_print_as: (state: any, isize: any, s: any) => any,
  print_as: (isize: any, s: any) => any,
  pp_print_int: (state: any, i: any) => any,
  print_int: (i: any) => any,
  pp_print_float: (state: any, f: any) => any,
  print_float: (f: any) => any,
  pp_print_char: (state: any, c: any) => any,
  print_char: (c: any) => any,
  pp_print_bool: (state: any, b: any) => any,
  print_bool: (b: any) => any,
  pp_print_space: (state: any, param: any) => any,
  print_space: (param: any) => any,
  pp_print_cut: (state: any, param: any) => any,
  print_cut: (param: any) => any,
  pp_print_break: (state: any, width: any, offset: any) => any,
  print_break: (width: any, offset: any) => any,
  pp_force_newline: (state: any, param: any) => any,
  force_newline: (param: any) => any,
  pp_print_if_newline: (state: any, param: any) => any,
  print_if_newline: (param: any) => any,
  pp_print_flush: (state: any, param: any) => any,
  print_flush: (param: any) => any,
  pp_print_newline: (state: any, param: any) => any,
  print_newline: (param: any) => any,
  pp_set_margin: (state: any, n: any) => any,
  set_margin: (n: any) => any,
  pp_get_margin: (state: any, param: any) => any,
  get_margin: (param: any) => any,
  pp_set_max_indent: (state: any, n: any) => any,
  set_max_indent: (n: any) => any,
  pp_get_max_indent: (state: any, param: any) => any,
  get_max_indent: (param: any) => any,
  pp_set_max_boxes: (state: any, n: any) => any,
  set_max_boxes: (n: any) => any,
  pp_get_max_boxes: (state: any, param: any) => any,
  get_max_boxes: (param: any) => any,
  pp_over_max_boxes: (state: any, param: any) => any,
  over_max_boxes: (param: any) => any,
  pp_open_tbox: (state: any, param: any) => any,
  open_tbox: (param: any) => any,
  pp_close_tbox: (state: any, param: any) => any,
  close_tbox: (param: any) => any,
  pp_set_tab: (state: any, param: any) => any,
  set_tab: (param: any) => any,
  pp_print_tab: (state: any, param: any) => any,
  print_tab: (param: any) => any,
  pp_print_tbreak: (state: any, width: any, offset: any) => any,
  print_tbreak: (width: any, offset: any) => any,
  pp_set_ellipsis_text: (state: any, s: any) => any,
  set_ellipsis_text: (s: any) => any,
  pp_get_ellipsis_text: (state: any, param: any) => any,
  get_ellipsis_text: (param: any) => any,
  pp_open_tag: (state: any, tag_name: any) => any,
  open_tag: (tag_name: any) => any,
  pp_close_tag: (state: any, param: any) => any,
  close_tag: (param: any) => any,
  pp_set_tags: (state: any, b: any) => any,
  set_tags: (b: any) => any,
  pp_set_print_tags: (state: any, b: any) => any,
  set_print_tags: (b: any) => any,
  pp_set_mark_tags: (state: any, b: any) => any,
  set_mark_tags: (b: any) => any,
  pp_get_print_tags: (state: any, param: any) => any,
  get_print_tags: (param: any) => any,
  pp_get_mark_tags: (state: any, param: any) => any,
  get_mark_tags: (param: any) => any,
  pp_set_formatter_out_channel: (state: any, oc: any) => any,
  set_formatter_out_channel: (oc: any) => any,
  pp_set_formatter_output_functions: (state: any, f: any, g: any) => any,
  set_formatter_output_functions: (f: any, g: any) => any,
  pp_get_formatter_output_functions: (state: any, param: any) => any,
  get_formatter_output_functions: (param: any) => any,
  pp_set_formatter_out_functions: (state: any, param: any) => any,
  set_formatter_out_functions: (param: any) => any,
  pp_get_formatter_out_functions: (state: any, param: any) => any,
  get_formatter_out_functions: (param: any) => any,
  pp_set_formatter_tag_functions: (state: any, param: any) => any,
  set_formatter_tag_functions: (param: any) => any,
  pp_get_formatter_tag_functions: (state: any, param: any) => any,
  get_formatter_tag_functions: (param: any) => any,
  formatter_of_out_channel: (oc: any) => any,
  std_formatter: any,
  err_formatter: any,
  formatter_of_buffer: (b: any) => any,
  stdbuf: any,
  str_formatter: any,
  flush_str_formatter: (param: any) => any,
  make_formatter: (output: any, flush: any) => any,
  formatter_of_out_functions: (out_funs: any) => any,
  make_symbolic_output_buffer: (param: any) => any,
  clear_symbolic_output_buffer: (sob: any) => any,
  get_symbolic_output_buffer: (sob: any) => any,
  flush_symbolic_output_buffer: (sob: any) => any,
  add_symbolic_output_item: (sob: any, item: any) => any,
  formatter_of_symbolic_output_buffer: (sob: any) => any,
  pp_print_list: (opt: any, pp_v: any, ppf: any, param: any) => any,
  pp_print_text: (ppf: any, s: any) => any,
  fprintf: (ppf: any) => any,
  printf: (fmt: any) => any,
  eprintf: (fmt: any) => any,
  sprintf: (fmt: any) => any,
  asprintf: (fmt: any) => any,
  ifprintf: (ppf: any) => any,
  kfprintf: (k: any, ppf: any, param: any) => any,
  ikfprintf: (k: any, ppf: any, param: any) => any,
  ksprintf: (k: any, param: any) => any,
  kasprintf: (k: any, param: any) => any,
  bprintf: (b: any, param: any) => any,
  set_all_formatter_output_functions: (f: any, g: any, h: any, i: any) => any,
  get_all_formatter_output_functions: (param: any) => any,
  pp_set_all_formatter_output_functions: (state: any, f: any, g: any, h: any, i: any) => any,
  pp_get_all_formatter_output_functions: (state: any, param: any) => any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.pp_open_box = module.exports[1];
module.exports.open_box = module.exports[2];
module.exports.pp_close_box = module.exports[3];
module.exports.close_box = module.exports[4];
module.exports.pp_open_hbox = module.exports[5];
module.exports.open_hbox = module.exports[6];
module.exports.pp_open_vbox = module.exports[7];
module.exports.open_vbox = module.exports[8];
module.exports.pp_open_hvbox = module.exports[9];
module.exports.open_hvbox = module.exports[10];
module.exports.pp_open_hovbox = module.exports[11];
module.exports.open_hovbox = module.exports[12];
module.exports.pp_print_string = module.exports[13];
module.exports.print_string = module.exports[14];
module.exports.pp_print_as = module.exports[15];
module.exports.print_as = module.exports[16];
module.exports.pp_print_int = module.exports[17];
module.exports.print_int = module.exports[18];
module.exports.pp_print_float = module.exports[19];
module.exports.print_float = module.exports[20];
module.exports.pp_print_char = module.exports[21];
module.exports.print_char = module.exports[22];
module.exports.pp_print_bool = module.exports[23];
module.exports.print_bool = module.exports[24];
module.exports.pp_print_space = module.exports[25];
module.exports.print_space = module.exports[26];
module.exports.pp_print_cut = module.exports[27];
module.exports.print_cut = module.exports[28];
module.exports.pp_print_break = module.exports[29];
module.exports.print_break = module.exports[30];
module.exports.pp_force_newline = module.exports[31];
module.exports.force_newline = module.exports[32];
module.exports.pp_print_if_newline = module.exports[33];
module.exports.print_if_newline = module.exports[34];
module.exports.pp_print_flush = module.exports[35];
module.exports.print_flush = module.exports[36];
module.exports.pp_print_newline = module.exports[37];
module.exports.print_newline = module.exports[38];
module.exports.pp_set_margin = module.exports[39];
module.exports.set_margin = module.exports[40];
module.exports.pp_get_margin = module.exports[41];
module.exports.get_margin = module.exports[42];
module.exports.pp_set_max_indent = module.exports[43];
module.exports.set_max_indent = module.exports[44];
module.exports.pp_get_max_indent = module.exports[45];
module.exports.get_max_indent = module.exports[46];
module.exports.pp_set_max_boxes = module.exports[47];
module.exports.set_max_boxes = module.exports[48];
module.exports.pp_get_max_boxes = module.exports[49];
module.exports.get_max_boxes = module.exports[50];
module.exports.pp_over_max_boxes = module.exports[51];
module.exports.over_max_boxes = module.exports[52];
module.exports.pp_open_tbox = module.exports[53];
module.exports.open_tbox = module.exports[54];
module.exports.pp_close_tbox = module.exports[55];
module.exports.close_tbox = module.exports[56];
module.exports.pp_set_tab = module.exports[57];
module.exports.set_tab = module.exports[58];
module.exports.pp_print_tab = module.exports[59];
module.exports.print_tab = module.exports[60];
module.exports.pp_print_tbreak = module.exports[61];
module.exports.print_tbreak = module.exports[62];
module.exports.pp_set_ellipsis_text = module.exports[63];
module.exports.set_ellipsis_text = module.exports[64];
module.exports.pp_get_ellipsis_text = module.exports[65];
module.exports.get_ellipsis_text = module.exports[66];
module.exports.pp_open_tag = module.exports[67];
module.exports.open_tag = module.exports[68];
module.exports.pp_close_tag = module.exports[69];
module.exports.close_tag = module.exports[70];
module.exports.pp_set_tags = module.exports[71];
module.exports.set_tags = module.exports[72];
module.exports.pp_set_print_tags = module.exports[73];
module.exports.set_print_tags = module.exports[74];
module.exports.pp_set_mark_tags = module.exports[75];
module.exports.set_mark_tags = module.exports[76];
module.exports.pp_get_print_tags = module.exports[77];
module.exports.get_print_tags = module.exports[78];
module.exports.pp_get_mark_tags = module.exports[79];
module.exports.get_mark_tags = module.exports[80];
module.exports.pp_set_formatter_out_channel = module.exports[81];
module.exports.set_formatter_out_channel = module.exports[82];
module.exports.pp_set_formatter_output_functions = module.exports[83];
module.exports.set_formatter_output_functions = module.exports[84];
module.exports.pp_get_formatter_output_functions = module.exports[85];
module.exports.get_formatter_output_functions = module.exports[86];
module.exports.pp_set_formatter_out_functions = module.exports[87];
module.exports.set_formatter_out_functions = module.exports[88];
module.exports.pp_get_formatter_out_functions = module.exports[89];
module.exports.get_formatter_out_functions = module.exports[90];
module.exports.pp_set_formatter_tag_functions = module.exports[91];
module.exports.set_formatter_tag_functions = module.exports[92];
module.exports.pp_get_formatter_tag_functions = module.exports[93];
module.exports.get_formatter_tag_functions = module.exports[94];
module.exports.formatter_of_out_channel = module.exports[95];
module.exports.std_formatter = module.exports[96];
module.exports.err_formatter = module.exports[97];
module.exports.formatter_of_buffer = module.exports[98];
module.exports.stdbuf = module.exports[99];
module.exports.str_formatter = module.exports[100];
module.exports.flush_str_formatter = module.exports[101];
module.exports.make_formatter = module.exports[102];
module.exports.formatter_of_out_functions = module.exports[103];
module.exports.make_symbolic_output_buffer = module.exports[104];
module.exports.clear_symbolic_output_buffer = module.exports[105];
module.exports.get_symbolic_output_buffer = module.exports[106];
module.exports.flush_symbolic_output_buffer = module.exports[107];
module.exports.add_symbolic_output_item = module.exports[108];
module.exports.formatter_of_symbolic_output_buffer = module.exports[109];
module.exports.pp_print_list = module.exports[110];
module.exports.pp_print_text = module.exports[111];
module.exports.fprintf = module.exports[112];
module.exports.printf = module.exports[113];
module.exports.eprintf = module.exports[114];
module.exports.sprintf = module.exports[115];
module.exports.asprintf = module.exports[116];
module.exports.ifprintf = module.exports[117];
module.exports.kfprintf = module.exports[118];
module.exports.ikfprintf = module.exports[119];
module.exports.ksprintf = module.exports[120];
module.exports.kasprintf = module.exports[121];
module.exports.bprintf = module.exports[122];
module.exports.set_all_formatter_output_functions = module.exports[124];
module.exports.get_all_formatter_output_functions = module.exports[125];
module.exports.pp_set_all_formatter_output_functions = module.exports[126];
module.exports.pp_get_all_formatter_output_functions = module.exports[127];

/* Hashing disabled */
