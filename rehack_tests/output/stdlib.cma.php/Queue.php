<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Queue {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    
    $runtime = (\Rehack\GlobalObject::get() as dynamic)->jsoo_runtime;
    $call1 = $runtime["caml_call1"];
    $call2 = $runtime["caml_call2"];
    $caml_wrap_thrown_exception = $runtime["caml_wrap_thrown_exception"];
    $cst_Queue_Empty = $runtime["caml_new_string"]("Queue.Empty");
    $Empty = Vector{248, $cst_Queue_Empty, $runtime["caml_fresh_oo_id"](0)} as dynamic;
    $create = (dynamic $param) : dynamic ==> {return Vector{0, 0, 0, 0};};
    $clear = (dynamic $q) : dynamic ==> {
      $q[1] = 0;
      $q[2] = 0;
      $q[3] = 0;
      return 0;
    };
    $add = (dynamic $x, dynamic $q) : dynamic ==> {
      $cell = Vector{0, $x, 0} as dynamic;
      $g_ = $q[3];
      if ($g_) {
        $q[1] = (int) ($q[1] + 1);
        $g_[2] = $cell;
        $q[3] = $cell;
        return 0;
      }
      $q[1] = 1;
      $q[2] = $cell;
      $q[3] = $cell;
      return 0;
    };
    $peek = (dynamic $q) : dynamic ==> {
      $content = null as dynamic;
      $f_ = $q[2];
      if ($f_) {$content = $f_[1];return $content;}
      throw $caml_wrap_thrown_exception($Empty) as \Throwable;
    };
    $take = (dynamic $q) : dynamic ==> {
      $d_ = null as dynamic;
      $e_ = null as dynamic;
      $c_ = $q[2];
      if ($c_) {
        $d_ = $c_[1];
        $e_ = $c_[2];
        if ($e_) {$q[1] = (int) ($q[1] + -1);$q[2] = $e_;return $d_;}
        $clear($q);
        return $d_;
      }
      throw $caml_wrap_thrown_exception($Empty) as \Throwable;
    };
    $copy = (dynamic $q_res, dynamic $prev, dynamic $cell) : dynamic ==> {
      $content = null as dynamic;
      $next = null as dynamic;
      $res = null as dynamic;
      $prev__0 = $prev;
      $cell__0 = $cell;
      for (;;) {
        if ($cell__0) {
          $content = $cell__0[1];
          $next = $cell__0[2];
          $res = Vector{0, $content, 0} as dynamic;
          if ($prev__0) {
            $prev__0[2] = $res;
          }
          else {$q_res[2] = $res;}
          $prev__0 = $res;
          $cell__0 = $next;
          continue;
        }
        $q_res[3] = $prev__0;
        return $q_res;
      }
    };
    $copy__0 = (dynamic $q) : dynamic ==> {
      return $copy(Vector{0, $q[1], 0, 0}, 0, $q[2]);
    };
    $is_empty = (dynamic $q) : dynamic ==> {return 0 === $q[1] ? 1 : (0);};
    $length = (dynamic $q) : dynamic ==> {return $q[1];};
    $iter = (dynamic $f, dynamic $cell) : dynamic ==> {
      $content = null as dynamic;
      $cell__1 = null as dynamic;
      $cell__0 = $cell;
      for (;;) {
        if ($cell__0) {
          $content = $cell__0[1];
          $cell__1 = $cell__0[2];
          $call1($f, $content);
          $cell__0 = $cell__1;
          continue;
        }
        return 0;
      }
    };
    $iter__0 = (dynamic $f, dynamic $q) : dynamic ==> {
      return $iter($f, $q[2]);
    };
    $fold = (dynamic $f, dynamic $accu, dynamic $cell) : dynamic ==> {
      $content = null as dynamic;
      $cell__1 = null as dynamic;
      $accu__1 = null as dynamic;
      $accu__0 = $accu;
      $cell__0 = $cell;
      for (;;) {
        if ($cell__0) {
          $content = $cell__0[1];
          $cell__1 = $cell__0[2];
          $accu__1 = $call2($f, $accu__0, $content);
          $accu__0 = $accu__1;
          $cell__0 = $cell__1;
          continue;
        }
        return $accu__0;
      }
    };
    $fold__0 = (dynamic $f, dynamic $accu, dynamic $q) : dynamic ==> {
      return $fold($f, $accu, $q[2]);
    };
    $transfer = (dynamic $q1, dynamic $q2) : dynamic ==> {
      $b_ = null as dynamic;
      $a_ = 0 < $q1[1] ? 1 : (0);
      if ($a_) {
        $b_ = $q2[3];
        if ($b_) {
          $q2[1] = (int) ($q2[1] + $q1[1]);
          $b_[2] = $q1[2];
          $q2[3] = $q1[3];
          return $clear($q1);
        }
        $q2[1] = $q1[1];
        $q2[2] = $q1[2];
        $q2[3] = $q1[3];
        return $clear($q1);
      }
      return $a_;
    };
    $Queue = Vector{
      0,
      $Empty,
      $create,
      $add,
      $add,
      $take,
      $take,
      $peek,
      $peek,
      $clear,
      $copy__0,
      $is_empty,
      $length,
      $iter__0,
      $fold__0,
      $transfer
    } as dynamic;
    
    return($Queue);

  }
  public static function create(dynamic $param): dynamic {
    return static::syncCall(__FUNCTION__, 2, $param);
  }
  public static function add(dynamic $x, dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 3, $x, $q);
  }
  public static function take(dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 5, $q);
  }
  public static function peek(dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 7, $q);
  }
  public static function clear(dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 9, $q);
  }
  public static function copy(dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 10, $q);
  }
  public static function is_empty(dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 11, $q);
  }
  public static function length(dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 12, $q);
  }
  public static function iter(dynamic $f, dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 13, $f, $q);
  }
  public static function fold(dynamic $f, dynamic $accu, dynamic $q): dynamic {
    return static::syncCall(__FUNCTION__, 14, $f, $accu, $q);
  }
  public static function transfer(dynamic $q1, dynamic $q2): dynamic {
    return static::syncCall(__FUNCTION__, 15, $q1, $q2);
  }

}
/* Hashing disabled */
