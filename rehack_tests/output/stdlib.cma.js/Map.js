/**
 * @flow strict
 * Map
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

var string = runtime["caml_new_string"];
var caml_wrap_thrown_exception = runtime["caml_wrap_thrown_exception"];
var cst_Map_remove_min_elt = string("Map.remove_min_elt");
var cst_Map_bal = string("Map.bal");
var cst_Map_bal__0 = string("Map.bal");
var cst_Map_bal__1 = string("Map.bal");
var cst_Map_bal__2 = string("Map.bal");
var Not_found = require("../runtime/Not_found.js");
var Pervasives = require("./Pervasives.js");
var Assert_failure = require("../runtime/Assert_failure.js");
var a_ = [0,0,0,0];
var b_ = [0,string("map.ml"),393,10];
var c_ = [0,0,0];

function Make(Ord) {
  function height(param) {var h;if (param) {h = param[5];return h;}return 0;}
  function create(l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    var N_ = hr <= hl ? hl + 1 | 0 : hr + 1 | 0;
    return [0,l,x,d,r,N_];
  }
  function singleton(x, d) {return [0,0,x,d,0,1];}
  function bal(l, x, d, r) {
    var L_;
    var rll;
    var rlv;
    var rld;
    var rlr;
    var K_;
    var rl;
    var rv;
    var rd;
    var rr;
    var J_;
    var lrl;
    var lrv;
    var lrd;
    var lrr;
    var I_;
    var ll;
    var lv;
    var ld;
    var lr;
    var hr;
    var h__0;
    var hl;
    var h;
    if (l) {
      h = l[5];
      hl = h;
    }
    else hl = 0;
    if (r) {
      h__0 = r[5];
      hr = h__0;
    }
    else hr = 0;
    if ((hr + 2 | 0) < hl) {
      if (l) {
        lr = l[4];
        ld = l[3];
        lv = l[2];
        ll = l[1];
        I_ = height(lr);
        if (I_ <= height(ll)) {
          return create(ll, lv, ld, create(lr, x, d, r));
        }
        if (lr) {
          lrr = lr[4];
          lrd = lr[3];
          lrv = lr[2];
          lrl = lr[1];
          J_ = create(lrr, x, d, r);
          return create(create(ll, lv, ld, lrl), lrv, lrd, J_);
        }
        return call1(Pervasives[1], cst_Map_bal);
      }
      return call1(Pervasives[1], cst_Map_bal__0);
    }
    if ((hl + 2 | 0) < hr) {
      if (r) {
        rr = r[4];
        rd = r[3];
        rv = r[2];
        rl = r[1];
        K_ = height(rl);
        if (K_ <= height(rr)) {
          return create(create(l, x, d, rl), rv, rd, rr);
        }
        if (rl) {
          rlr = rl[4];
          rld = rl[3];
          rlv = rl[2];
          rll = rl[1];
          L_ = create(rlr, rv, rd, rr);
          return create(create(l, x, d, rll), rlv, rld, L_);
        }
        return call1(Pervasives[1], cst_Map_bal__1);
      }
      return call1(Pervasives[1], cst_Map_bal__2);
    }
    var M_ = hr <= hl ? hl + 1 | 0 : hr + 1 | 0;
    return [0,l,x,d,r,M_];
  }
  var empty = 0;
  function is_empty(param) {return param ? 0 : 1;}
  function add(x, data, m) {
    var ll;
    var rr;
    var c;
    var l;
    var v;
    var d;
    var r;
    var h;
    if (m) {
      h = m[5];
      r = m[4];
      d = m[3];
      v = m[2];
      l = m[1];
      c = call2(Ord[1], x, v);
      if (0 === c) {return d === data ? m : [0,l,x,data,r,h];}
      if (0 <= c) {
        rr = add(x, data, r);
        return r === rr ? m : bal(l, v, d, rr);
      }
      ll = add(x, data, l);
      return l === ll ? m : bal(ll, v, d, r);
    }
    return [0,0,x,data,0,1];
  }
  function find(x, param) {
    var r;
    var d;
    var v;
    var l;
    var c;
    var param__1;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        c = call2(Ord[1], x, v);
        if (0 === c) {return d;}
        param__1 = 0 <= c ? r : l;
        param__0 = param__1;
        continue;
      }
      throw caml_wrap_thrown_exception(Not_found);
    }
  }
  function find_first_aux(v0, d0, f, param) {
    var r;
    var d;
    var v;
    var l;
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {v0__0 = v;d0__0 = d;param__0 = l;continue;}
        param__0 = r;
        continue;
      }
      return [0,v0__0,d0__0];
    }
  }
  function find_first(f, param) {
    var r;
    var d;
    var v;
    var l;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {return find_first_aux(v, d, f, l);}
        param__0 = r;
        continue;
      }
      throw caml_wrap_thrown_exception(Not_found);
    }
  }
  function find_first_opt_aux(v0, d0, f, param) {
    var r;
    var d;
    var v;
    var l;
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {v0__0 = v;d0__0 = d;param__0 = l;continue;}
        param__0 = r;
        continue;
      }
      return [0,[0,v0__0,d0__0]];
    }
  }
  function find_first_opt(f, param) {
    var r;
    var d;
    var v;
    var l;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {return find_first_opt_aux(v, d, f, l);}
        param__0 = r;
        continue;
      }
      return 0;
    }
  }
  function find_last_aux(v0, d0, f, param) {
    var r;
    var d;
    var v;
    var l;
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {v0__0 = v;d0__0 = d;param__0 = r;continue;}
        param__0 = l;
        continue;
      }
      return [0,v0__0,d0__0];
    }
  }
  function find_last(f, param) {
    var r;
    var d;
    var v;
    var l;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {return find_last_aux(v, d, f, r);}
        param__0 = l;
        continue;
      }
      throw caml_wrap_thrown_exception(Not_found);
    }
  }
  function find_last_opt_aux(v0, d0, f, param) {
    var r;
    var d;
    var v;
    var l;
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {v0__0 = v;d0__0 = d;param__0 = r;continue;}
        param__0 = l;
        continue;
      }
      return [0,[0,v0__0,d0__0]];
    }
  }
  function find_last_opt(f, param) {
    var r;
    var d;
    var v;
    var l;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        if (call1(f, v)) {return find_last_opt_aux(v, d, f, r);}
        param__0 = l;
        continue;
      }
      return 0;
    }
  }
  function find_opt(x, param) {
    var r;
    var d;
    var v;
    var l;
    var c;
    var param__1;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        c = call2(Ord[1], x, v);
        if (0 === c) {return [0,d];}
        param__1 = 0 <= c ? r : l;
        param__0 = param__1;
        continue;
      }
      return 0;
    }
  }
  function mem(x, param) {
    var r;
    var v;
    var l;
    var c;
    var H_;
    var param__1;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        v = param__0[2];
        l = param__0[1];
        c = call2(Ord[1], x, v);
        H_ = 0 === c ? 1 : 0;
        if (H_) {return H_;}
        param__1 = 0 <= c ? r : l;
        param__0 = param__1;
        continue;
      }
      return 0;
    }
  }
  function min_binding(param) {
    var G_;
    var d;
    var v;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        G_ = param__0[1];
        if (G_) {param__0 = G_;continue;}
        d = param__0[3];
        v = param__0[2];
        return [0,v,d];
      }
      throw caml_wrap_thrown_exception(Not_found);
    }
  }
  function min_binding_opt(param) {
    var F_;
    var d;
    var v;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        F_ = param__0[1];
        if (F_) {param__0 = F_;continue;}
        d = param__0[3];
        v = param__0[2];
        return [0,[0,v,d]];
      }
      return 0;
    }
  }
  function max_binding(param) {
    var C_;
    var D_;
    var E_;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        C_ = param__0[4];
        D_ = param__0[3];
        E_ = param__0[2];
        if (C_) {param__0 = C_;continue;}
        return [0,E_,D_];
      }
      throw caml_wrap_thrown_exception(Not_found);
    }
  }
  function max_binding_opt(param) {
    var z_;
    var A_;
    var B_;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        z_ = param__0[4];
        A_ = param__0[3];
        B_ = param__0[2];
        if (z_) {param__0 = z_;continue;}
        return [0,[0,B_,A_]];
      }
      return 0;
    }
  }
  function remove_min_binding(param) {
    var r__0;
    var v;
    var d;
    var r;
    var y_;
    if (param) {
      y_ = param[1];
      if (y_) {
        r = param[4];
        d = param[3];
        v = param[2];
        return bal(remove_min_binding(y_), v, d, r);
      }
      r__0 = param[4];
      return r__0;
    }
    return call1(Pervasives[1], cst_Map_remove_min_elt);
  }
  function f_(t, match) {
    var x;
    var d;
    var match__0;
    if (t) {
      if (match) {
        match__0 = min_binding(match);
        d = match__0[2];
        x = match__0[1];
        return bal(t, x, d, remove_min_binding(match));
      }
      return t;
    }
    return match;
  }
  function remove(x, m) {
    var ll;
    var rr;
    var c;
    var l;
    var v;
    var d;
    var r;
    if (m) {
      r = m[4];
      d = m[3];
      v = m[2];
      l = m[1];
      c = call2(Ord[1], x, v);
      if (0 === c) {return f_(l, r);}
      if (0 <= c) {rr = remove(x, r);return r === rr ? m : bal(l, v, d, rr);}
      ll = remove(x, l);
      return l === ll ? m : bal(ll, v, d, r);
    }
    return 0;
  }
  function update(x, f, m) {
    var data__0;
    var ll;
    var rr;
    var data;
    var match;
    var c;
    var l;
    var v;
    var d;
    var r;
    var h;
    if (m) {
      h = m[5];
      r = m[4];
      d = m[3];
      v = m[2];
      l = m[1];
      c = call2(Ord[1], x, v);
      if (0 === c) {
        match = call1(f, [0,d]);
        if (match) {data = match[1];return d === data ? m : [0,l,x,data,r,h];}
        return f_(l, r);
      }
      if (0 <= c) {
        rr = update(x, f, r);
        return r === rr ? m : bal(l, v, d, rr);
      }
      ll = update(x, f, l);
      return l === ll ? m : bal(ll, v, d, r);
    }
    var match__0 = call1(f, 0);
    if (match__0) {data__0 = match__0[1];return [0,0,x,data__0,0,1];}
    return 0;
  }
  function iter(f, param) {
    var param__1;
    var d;
    var v;
    var l;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        param__1 = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        iter(f, l);
        call2(f, v, d);
        param__0 = param__1;
        continue;
      }
      return 0;
    }
  }
  function map(f, param) {
    var r__0;
    var d__0;
    var l__0;
    var l;
    var v;
    var d;
    var r;
    var h;
    if (param) {
      h = param[5];
      r = param[4];
      d = param[3];
      v = param[2];
      l = param[1];
      l__0 = map(f, l);
      d__0 = call1(f, d);
      r__0 = map(f, r);
      return [0,l__0,v,d__0,r__0,h];
    }
    return 0;
  }
  function mapi(f, param) {
    var r__0;
    var d__0;
    var l__0;
    var l;
    var v;
    var d;
    var r;
    var h;
    if (param) {
      h = param[5];
      r = param[4];
      d = param[3];
      v = param[2];
      l = param[1];
      l__0 = mapi(f, l);
      d__0 = call2(f, v, d);
      r__0 = mapi(f, r);
      return [0,l__0,v,d__0,r__0,h];
    }
    return 0;
  }
  function fold(f, m, accu) {
    var m__1;
    var d;
    var v;
    var l;
    var accu__1;
    var m__0 = m;
    var accu__0 = accu;
    for (; ; ) {
      if (m__0) {
        m__1 = m__0[4];
        d = m__0[3];
        v = m__0[2];
        l = m__0[1];
        accu__1 = call3(f, v, d, fold(f, l, accu__0));
        m__0 = m__1;
        accu__0 = accu__1;
        continue;
      }
      return accu__0;
    }
  }
  function for_all(p, param) {
    var r;
    var d;
    var v;
    var l;
    var v_;
    var w_;
    var x_;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        v_ = call2(p, v, d);
        if (v_) {
          w_ = for_all(p, l);
          if (w_) {param__0 = r;continue;}
          x_ = w_;
        }
        else x_ = v_;
        return x_;
      }
      return 1;
    }
  }
  function exists(p, param) {
    var r;
    var d;
    var v;
    var l;
    var s_;
    var t_;
    var u_;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        l = param__0[1];
        s_ = call2(p, v, d);
        if (s_) t_ = s_;
        else {u_ = exists(p, l);if (! u_) {param__0 = r;continue;}t_ = u_;}
        return t_;
      }
      return 0;
    }
  }
  function add_min_binding(k, x, param) {
    var l;
    var v;
    var d;
    var r;
    if (param) {
      r = param[4];
      d = param[3];
      v = param[2];
      l = param[1];
      return bal(add_min_binding(k, x, l), v, d, r);
    }
    return singleton(k, x);
  }
  function add_max_binding(k, x, param) {
    var l;
    var v;
    var d;
    var r;
    if (param) {
      r = param[4];
      d = param[3];
      v = param[2];
      l = param[1];
      return bal(l, v, d, add_max_binding(k, x, r));
    }
    return singleton(k, x);
  }
  function join(l, v, d, r) {
    var ll;
    var lv;
    var ld;
    var lr;
    var lh;
    var rl;
    var rv;
    var rd;
    var rr;
    var rh;
    if (l) {
      if (r) {
        rh = r[5];
        rr = r[4];
        rd = r[3];
        rv = r[2];
        rl = r[1];
        lh = l[5];
        lr = l[4];
        ld = l[3];
        lv = l[2];
        ll = l[1];
        return (rh + 2 | 0) < lh ?
          bal(ll, lv, ld, join(lr, v, d, r)) :
          (lh + 2 | 0) < rh ?
           bal(join(l, v, d, rl), rv, rd, rr) :
           create(l, v, d, r);
      }
      return add_max_binding(v, d, l);
    }
    return add_min_binding(v, d, r);
  }
  function concat(t, match) {
    var x;
    var d;
    var match__0;
    if (t) {
      if (match) {
        match__0 = min_binding(match);
        d = match__0[2];
        x = match__0[1];
        return join(t, x, d, remove_min_binding(match));
      }
      return t;
    }
    return match;
  }
  function concat_or_join(t1, v, d, t2) {
    var d__0;
    if (d) {d__0 = d[1];return join(t1, v, d__0, t2);}
    return concat(t1, t2);
  }
  function split(x, param) {
    var ll;
    var pres__0;
    var rl;
    var match__0;
    var lr;
    var pres;
    var rr;
    var match;
    var c;
    var l;
    var v;
    var d;
    var r;
    if (param) {
      r = param[4];
      d = param[3];
      v = param[2];
      l = param[1];
      c = call2(Ord[1], x, v);
      if (0 === c) {return [0,l,[0,d],r];}
      if (0 <= c) {
        match = split(x, r);
        rr = match[3];
        pres = match[2];
        lr = match[1];
        return [0,join(l, v, d, lr),pres,rr];
      }
      match__0 = split(x, l);
      rl = match__0[3];
      pres__0 = match__0[2];
      ll = match__0[1];
      return [0,ll,pres__0,join(rl, v, d, r)];
    }
    return a_;
  }
  function merge(f, s1, s2) {
    var r_;
    var q_;
    var l1__0;
    var d1__0;
    var r1__0;
    var match__0;
    var l2__0;
    var v2;
    var d2__0;
    var r2__0;
    var p_;
    var o_;
    var l2;
    var d2;
    var r2;
    var match;
    var l1;
    var v1;
    var d1;
    var r1;
    var h1;
    if (s1) {
      h1 = s1[5];
      r1 = s1[4];
      d1 = s1[3];
      v1 = s1[2];
      l1 = s1[1];
      if (height(s2) <= h1) {
        match = split(v1, s2);
        r2 = match[3];
        d2 = match[2];
        l2 = match[1];
        o_ = merge(f, r1, r2);
        p_ = call3(f, v1, [0,d1], d2);
        return concat_or_join(merge(f, l1, l2), v1, p_, o_);
      }
    }
    else if (! s2) {return 0;}
    if (s2) {
      r2__0 = s2[4];
      d2__0 = s2[3];
      v2 = s2[2];
      l2__0 = s2[1];
      match__0 = split(v2, s1);
      r1__0 = match__0[3];
      d1__0 = match__0[2];
      l1__0 = match__0[1];
      q_ = merge(f, r1__0, r2__0);
      r_ = call3(f, v2, d1__0, [0,d2__0]);
      return concat_or_join(merge(f, l1__0, l2__0), v2, r_, q_);
    }
    throw caml_wrap_thrown_exception([0,Assert_failure,b_]);
  }
  function union(f, s1, s2) {
    var s;
    var d1__1;
    var r__0;
    var l__0;
    var l1__0;
    var d1__0;
    var r1__0;
    var match__0;
    var d2__1;
    var r;
    var l;
    var l2__0;
    var d2__0;
    var r2__0;
    var match;
    var l1;
    var v1;
    var d1;
    var r1;
    var h1;
    var l2;
    var v2;
    var d2;
    var r2;
    var h2;
    if (s1) {
      if (s2) {
        h2 = s2[5];
        r2 = s2[4];
        d2 = s2[3];
        v2 = s2[2];
        l2 = s2[1];
        h1 = s1[5];
        r1 = s1[4];
        d1 = s1[3];
        v1 = s1[2];
        l1 = s1[1];
        if (h2 <= h1) {
          match = split(v1, s2);
          r2__0 = match[3];
          d2__0 = match[2];
          l2__0 = match[1];
          l = union(f, l1, l2__0);
          r = union(f, r1, r2__0);
          if (d2__0) {
            d2__1 = d2__0[1];
            return concat_or_join(l, v1, call3(f, v1, d1, d2__1), r);
          }
          return join(l, v1, d1, r);
        }
        match__0 = split(v2, s1);
        r1__0 = match__0[3];
        d1__0 = match__0[2];
        l1__0 = match__0[1];
        l__0 = union(f, l1__0, l2);
        r__0 = union(f, r1__0, r2);
        if (d1__0) {
          d1__1 = d1__0[1];
          return concat_or_join(l__0, v2, call3(f, v2, d1__1, d2), r__0);
        }
        return join(l__0, v2, d2, r__0);
      }
      s = s1;
    }
    else s = s2;
    return s;
  }
  function filter(p, m) {
    var r__0;
    var pvd;
    var l__0;
    var l;
    var v;
    var d;
    var r;
    if (m) {
      r = m[4];
      d = m[3];
      v = m[2];
      l = m[1];
      l__0 = filter(p, l);
      pvd = call2(p, v, d);
      r__0 = filter(p, r);
      if (pvd) {
        if (l === l__0) {if (r === r__0) {return m;}}
        return join(l__0, v, d, r__0);
      }
      return concat(l__0, r__0);
    }
    return 0;
  }
  function partition(p, param) {
    var n_;
    var m_;
    var rt;
    var rf;
    var match__0;
    var pvd;
    var lt;
    var lf;
    var match;
    var l;
    var v;
    var d;
    var r;
    if (param) {
      r = param[4];
      d = param[3];
      v = param[2];
      l = param[1];
      match = partition(p, l);
      lf = match[2];
      lt = match[1];
      pvd = call2(p, v, d);
      match__0 = partition(p, r);
      rf = match__0[2];
      rt = match__0[1];
      if (pvd) {m_ = concat(lf, rf);return [0,join(lt, v, d, rt),m_];}
      n_ = join(lf, v, d, rf);
      return [0,concat(lt, rt),n_];
    }
    return c_;
  }
  function cons_enum(m, e) {
    var r;
    var d;
    var v;
    var m__1;
    var e__1;
    var m__0 = m;
    var e__0 = e;
    for (; ; ) {
      if (m__0) {
        r = m__0[4];
        d = m__0[3];
        v = m__0[2];
        m__1 = m__0[1];
        e__1 = [0,v,d,r,e__0];
        m__0 = m__1;
        e__0 = e__1;
        continue;
      }
      return e__0;
    }
  }
  function compare(cmp, m1, m2) {
    function compare_aux(e1, e2) {
      var e2__1;
      var r2;
      var d2;
      var v2;
      var e1__1;
      var r1;
      var d1;
      var v1;
      var c;
      var c__0;
      var e2__2;
      var e1__2;
      var e1__0 = e1;
      var e2__0 = e2;
      for (; ; ) {
        if (e1__0) {
          if (e2__0) {
            e2__1 = e2__0[4];
            r2 = e2__0[3];
            d2 = e2__0[2];
            v2 = e2__0[1];
            e1__1 = e1__0[4];
            r1 = e1__0[3];
            d1 = e1__0[2];
            v1 = e1__0[1];
            c = call2(Ord[1], v1, v2);
            if (0 === c) {
              c__0 = call2(cmp, d1, d2);
              if (0 === c__0) {
                e2__2 = cons_enum(r2, e2__1);
                e1__2 = cons_enum(r1, e1__1);
                e1__0 = e1__2;
                e2__0 = e2__2;
                continue;
              }
              return c__0;
            }
            return c;
          }
          return 1;
        }
        return e2__0 ? -1 : 0;
      }
    }
    var l_ = cons_enum(m2, 0);
    return compare_aux(cons_enum(m1, 0), l_);
  }
  function equal(cmp, m1, m2) {
    function equal_aux(e1, e2) {
      var e2__1;
      var r2;
      var d2;
      var v2;
      var e1__1;
      var r1;
      var d1;
      var v1;
      var i_;
      var j_;
      var e2__2;
      var e1__2;
      var k_;
      var e1__0 = e1;
      var e2__0 = e2;
      for (; ; ) {
        if (e1__0) {
          if (e2__0) {
            e2__1 = e2__0[4];
            r2 = e2__0[3];
            d2 = e2__0[2];
            v2 = e2__0[1];
            e1__1 = e1__0[4];
            r1 = e1__0[3];
            d1 = e1__0[2];
            v1 = e1__0[1];
            i_ = 0 === call2(Ord[1], v1, v2) ? 1 : 0;
            if (i_) {
              j_ = call2(cmp, d1, d2);
              if (j_) {
                e2__2 = cons_enum(r2, e2__1);
                e1__2 = cons_enum(r1, e1__1);
                e1__0 = e1__2;
                e2__0 = e2__2;
                continue;
              }
              k_ = j_;
            }
            else k_ = i_;
            return k_;
          }
          return 0;
        }
        return e2__0 ? 0 : 1;
      }
    }
    var h_ = cons_enum(m2, 0);
    return equal_aux(cons_enum(m1, 0), h_);
  }
  function cardinal(param) {
    var g_;
    var l;
    var r;
    if (param) {
      r = param[4];
      l = param[1];
      g_ = cardinal(r);
      return (cardinal(l) + 1 | 0) + g_ | 0;
    }
    return 0;
  }
  function bindings_aux(accu, param) {
    var r;
    var d;
    var v;
    var param__1;
    var accu__1;
    var accu__0 = accu;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        r = param__0[4];
        d = param__0[3];
        v = param__0[2];
        param__1 = param__0[1];
        accu__1 = [0,[0,v,d],bindings_aux(accu__0, r)];
        accu__0 = accu__1;
        param__0 = param__1;
        continue;
      }
      return accu__0;
    }
  }
  function bindings(s) {return bindings_aux(0, s);}
  return [
    0,
    height,
    create,
    singleton,
    bal,
    empty,
    is_empty,
    add,
    find,
    find_first_aux,
    find_first,
    find_first_opt_aux,
    find_first_opt,
    find_last_aux,
    find_last,
    find_last_opt_aux,
    find_last_opt,
    find_opt,
    mem,
    min_binding,
    min_binding_opt,
    max_binding,
    max_binding_opt,
    remove_min_binding,
    remove,
    update,
    iter,
    map,
    mapi,
    fold,
    for_all,
    exists,
    add_min_binding,
    add_max_binding,
    join,
    concat,
    concat_or_join,
    split,
    merge,
    union,
    filter,
    partition,
    cons_enum,
    compare,
    equal,
    cardinal,
    bindings_aux,
    bindings,
    min_binding,
    min_binding_opt
  ];
}

var Map = [
  0,
  function(d_) {
    var e_ = Make(d_);
    return [
      0,
      e_[5],
      e_[6],
      e_[18],
      e_[7],
      e_[25],
      e_[3],
      e_[24],
      e_[38],
      e_[39],
      e_[43],
      e_[44],
      e_[26],
      e_[29],
      e_[30],
      e_[31],
      e_[40],
      e_[41],
      e_[45],
      e_[47],
      e_[19],
      e_[20],
      e_[21],
      e_[22],
      e_[48],
      e_[49],
      e_[37],
      e_[8],
      e_[17],
      e_[10],
      e_[12],
      e_[14],
      e_[16],
      e_[27],
      e_[28]
    ];
  }
];

module.exports = Map;

/*::type Exports = {
}*/
/** @type {{
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);

/* Hashing disabled */
