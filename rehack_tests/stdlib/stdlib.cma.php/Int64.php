<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Int64 {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    $joo_global_object = \Rehack\GlobalObject::get() as dynamic;
    
    $runtime = $joo_global_object->jsoo_runtime;
    $caml_wrap_thrown_exception_reraise = $runtime[
       "caml_wrap_thrown_exception_reraise"
     ];
    $cst_d = $runtime["caml_new_string"]("%d");
    $zero = Vector{255, 0, 0, 0};
    $one = Vector{255, 1, 0, 0};
    $minus_one = Vector{255, 16777215, 16777215, 65535};
    $min_int = Vector{255, 0, 0, 32768};
    $max_int = Vector{255, 16777215, 16777215, 32767};
    $Failure =  Failure::get ();
    $d_ = Vector{255, 16777215, 16777215, 65535};
    $c_ = Vector{255, 0, 0, 0};
    $b_ = Vector{255, 1, 0, 0};
    $a_ = Vector{255, 1, 0, 0};
    $succ = (dynamic $n) ==> {return $runtime["caml_int64_add"]($n, $a_);};
    $pred = (dynamic $n) ==> {return $runtime["caml_int64_sub"]($n, $b_);};
    $abs = (dynamic $n) ==> {
      return $runtime["caml_greaterequal"]($n, $c_)
        ? $n
        : ($runtime["caml_int64_neg"]($n));
    };
    $lognot = (dynamic $n) ==> {return $runtime["caml_int64_xor"]($n, $d_);};
    $to_string = (dynamic $n) ==> {
      return $runtime["caml_int64_format"]($cst_d, $n);
    };
    $of_string_opt = (dynamic $s) ==> {
      try {$e_ = Vector{0, $runtime["caml_int64_of_string"]($s)};return $e_;}
      catch(\Throwable $f_) {
        $f_ = $runtime["caml_wrap_exception"]($f_);
        if ($f_[1] === $Failure) {return 0;}
        throw $caml_wrap_thrown_exception_reraise($f_) as \Throwable;
      }
    };
    $compare = (dynamic $x, dynamic $y) ==> {
      return $runtime["caml_int64_compare"]($x, $y);
    };
    $equal = (dynamic $x, dynamic $y) ==> {
      return 0 === $compare($x, $y) ? 1 : (0);
    };
    $Int64 = Vector{
      0,
      $zero,
      $one,
      $minus_one,
      $succ,
      $pred,
      $abs,
      $max_int,
      $min_int,
      $lognot,
      $of_string_opt,
      $to_string,
      $compare,
      $equal
    };
    
     return ($Int64);

  }
  public static function zero(): dynamic {
    return static::get()[1]();
  }
  public static function one(): dynamic {
    return static::get()[2]();
  }
  public static function minus_one(): dynamic {
    return static::get()[3]();
  }
  public static function succ(dynamic $n): dynamic {
    return static::get()[4]($n);
  }
  public static function pred(dynamic $n): dynamic {
    return static::get()[5]($n);
  }
  public static function abs(dynamic $n): dynamic {
    return static::get()[6]($n);
  }
  public static function max_int(): dynamic {
    return static::get()[7]();
  }
  public static function min_int(): dynamic {
    return static::get()[8]();
  }
  public static function lognot(dynamic $n): dynamic {
    return static::get()[9]($n);
  }
  public static function of_string_opt(dynamic $s): dynamic {
    return static::get()[10]($s);
  }
  public static function to_string(dynamic $n): dynamic {
    return static::get()[11]($n);
  }
  public static function compare(dynamic $x, dynamic $y): dynamic {
    return static::get()[12]($x, $y);
  }
  public static function equal(dynamic $x, dynamic $y): dynamic {
    return static::get()[13]($x, $y);
  }

}
/* Hashing disabled */
