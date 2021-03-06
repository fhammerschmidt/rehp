<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Sort {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    
    $merge = new Ref();
    $runtime = (\Rehack\GlobalObject::get() as dynamic)->jsoo_runtime;
    $call2 = $runtime["caml_call2"];
    $caml_wrap_thrown_exception = $runtime["caml_wrap_thrown_exception"];
    $unsigned_right_shift_32 = $runtime["unsigned_right_shift_32"];
    $cst_Sort_array = $runtime["caml_new_string"]("Sort.array");
    $Invalid_argument = Invalid_argument::get();
    $merge->contents = (dynamic $order, dynamic $l1, dynamic $l2) : dynamic ==> {
      $h2 = null as dynamic;
      $t2 = null as dynamic;
      $h1 = null as dynamic;
      $t1 = null as dynamic;
      if ($l1) {
        $t1 = $l1[2];
        $h1 = $l1[1];
        if ($l2) {
          $t2 = $l2[2];
          $h2 = $l2[1];
          return $call2($order, $h1, $h2)
            ? Vector{0, $h1, $merge->contents($order, $t1, $l2)}
            : (Vector{0, $h2, $merge->contents($order, $l1, $t2)});
        }
        return $l1;
      }
      return $l2;
    };
    $list = (dynamic $order, dynamic $l) : dynamic ==> {
      $initlist = new Ref();$merge2 = new Ref();
      $initlist->contents = (dynamic $param) : dynamic ==> {
        $l_ = null as dynamic;
        $k_ = null as dynamic;
        $e2 = null as dynamic;
        $rest = null as dynamic;
        $j_ = null as dynamic;
        $i_ = null as dynamic;
        if ($param) {
          $i_ = $param[2];
          $j_ = $param[1];
          if ($i_) {
            $rest = $i_[2];
            $e2 = $i_[1];
            $k_ = $initlist->contents($rest);
            $l_ =
              $call2($order, $j_, $e2)
                ? Vector{0, $j_, Vector{0, $e2, 0}}
                : (Vector{0, $e2, Vector{0, $j_, 0}});
            return Vector{0, $l_, $k_};
          }
          return Vector{0, Vector{0, $j_, 0}, 0};
        }
        return 0;
      };
      $merge2->contents = (dynamic $x) : dynamic ==> {
        $h_ = null as dynamic;
        $l1 = null as dynamic;
        $l2 = null as dynamic;
        $rest = null as dynamic;
        $g_ = null as dynamic;
        if ($x) {
          $g_ = $x[2];
          if ($g_) {
            $rest = $g_[2];
            $l2 = $g_[1];
            $l1 = $x[1];
            $h_ = $merge2->contents($rest);
            return Vector{0, $merge->contents($order, $l1, $l2), $h_};
          }
        }
        return $x;
      };
      $mergeall = (dynamic $llist) : dynamic ==> {
        $llist__1 = null as dynamic;
        $l = null as dynamic;
        $llist__0 = $llist;
        for (;;) {
          if ($llist__0) {
            if ($llist__0[2]) {
              $llist__1 = $merge2->contents($llist__0);
              $llist__0 = $llist__1;
              continue;
            }
            $l = $llist__0[1];
            return $l;
          }
          return 0;
        }
      };
      return $mergeall($initlist->contents($l));
    };
    $swap = (dynamic $arr, dynamic $i, dynamic $j) : dynamic ==> {
      $tmp = $arr[$i + 1];
      $arr[$i + 1] = $arr[$j + 1];
      $arr[$j + 1] = $tmp;
      return 0;
    };
    $array = (dynamic $cmp, dynamic $arr) : dynamic ==> {
      $qsort = new Ref();
      $i = null as dynamic;
      $val_i = null as dynamic;
      $j = null as dynamic;
      $c_ = null as dynamic;
      $qsort->contents = (dynamic $lo, dynamic $hi) : dynamic ==> {
        $d_ = null as dynamic;
        $mid = null as dynamic;
        $pivot = null as dynamic;
        $i = null as dynamic;
        $j = null as dynamic;
        $e_ = null as dynamic;
        $f_ = null as dynamic;
        $lo__1 = null as dynamic;
        $hi__1 = null as dynamic;
        $lo__0 = $lo;
        $hi__0 = $hi;
        for (;;) {
          $continue_label = null;
          $d_ = 6 <= (int) ($hi__0 - $lo__0) ? 1 : (0);
          if ($d_) {
            $mid = (int) $unsigned_right_shift_32((int) ($lo__0 + $hi__0), 1) as dynamic;
            if ($call2($cmp, $arr[$mid + 1], $arr[$lo__0 + 1])) {$swap($arr, $mid, $lo__0);}
            if ($call2($cmp, $arr[$hi__0 + 1], $arr[$mid + 1])) {
              $swap($arr, $mid, $hi__0);
              if ($call2($cmp, $arr[$mid + 1], $arr[$lo__0 + 1])) {$swap($arr, $mid, $lo__0);}
            }
            $pivot = $arr[$mid + 1];
            $i = Vector{0, (int) ($lo__0 + 1)} as dynamic;
            $j = Vector{0, (int) ($hi__0 + -1)} as dynamic;
            $e_ = 1 - $call2($cmp, $pivot, $arr[$hi__0 + 1]);
            $f_ = $e_ ? $e_ : (1 - $call2($cmp, $arr[$lo__0 + 1], $pivot));
            if ($f_) {
              throw $caml_wrap_thrown_exception(
                      Vector{0, $Invalid_argument, $cst_Sort_array}
                    ) as \Throwable;
            }
            for (;;) {
              $continue_label = null;
              if ($i[1] < $j[1]) {
                for (;;) {
                  if ($call2($cmp, $pivot, $arr[$i[1] + 1])) {
                    for (;;) {
                      if ($call2($cmp, $arr[$j[1] + 1], $pivot)) {
                        if ($i[1] < $j[1]) {$swap($arr, $i[1], $j[1]);}
                        $i[1] += 1;
                        $j[1] += -1;
                        $continue_label = "b";break;
                      }
                      $j[1] += -1;
                      continue;
                    }
                    if ($continue_label !== null) {break;}
                  }
                  $i[1] += 1;
                  continue;
                }
                if ($continue_label === "b") {continue;}
              }
              if ((int) ($j[1] - $lo__0) <= (int) ($hi__0 - $i[1])) {
                $qsort->contents($lo__0, $j[1]);
                $lo__1 = $i[1];
                $lo__0 = $lo__1;
                $continue_label = "a";break;
              }
              $qsort->contents($i[1], $hi__0);
              $hi__1 = $j[1];
              $hi__0 = $hi__1;
              $continue_label = "a";break;
            }
            if ($continue_label === "a") {continue;}
          }
          return $d_;
        }
      };
      $qsort->contents(0, (int) ($arr->count() - 1 + -1));
      $b_ = (int) ($arr->count() - 1 + -1) as dynamic;
      $a_ = 1 as dynamic;
      if (! ($b_ < 1)) {
        $i = $a_;
        for (;;) {
          $val_i = $arr[$i + 1];
          if (1 - $call2($cmp, $arr[(int) ($i + -1) + 1], $val_i)) {
            $arr[$i + 1] = $arr[(int) ($i + -1) + 1];
            $j = Vector{0, (int) ($i + -1)} as dynamic;
            for (;;) {
              if (1 <= $j[1]) {
                if (! $call2($cmp, $arr[(int) ($j[1] + -1) + 1], $val_i)) {
                  $arr[$j[1] + 1] = $arr[(int) ($j[1] + -1) + 1];
                  $j[1] += -1;
                  continue;
                }
              }
              $arr[$j[1] + 1] = $val_i;
              break;
            }
          }
          $c_ = (int) ($i + 1) as dynamic;
          if ($b_ !== $i) {$i = $c_;continue;}
          break;
        }
      }
      return 0;
    };
    $Sort = Vector{0, $list, $array, $merge->contents} as dynamic;
    
    return($Sort);

  }
  public static function list(dynamic $order, dynamic $l): dynamic {
    return static::syncCall(__FUNCTION__, 1, $order, $l);
  }
  public static function array(dynamic $cmp, dynamic $arr): dynamic {
    return static::syncCall(__FUNCTION__, 2, $cmp, $arr);
  }
  public static function merge(dynamic $order, dynamic $l1, dynamic $l2): dynamic {
    return static::syncCall(__FUNCTION__, 3, $order, $l1, $l2);
  }

}
/* Hashing disabled */
