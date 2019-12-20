<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Nativeint {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    $joo_global_object = \Rehack\GlobalObject::get() as dynamic;
    
    $runtime = $joo_global_object->jsoo_runtime;
    $caml_wrap_thrown_exception_reraise = $runtime[
       "caml_wrap_thrown_exception_reraise"
     ];
    $left_shift_32 = $runtime["left_shift_32"];
    $cst_d = $runtime["caml_new_string"]("%d");
    $Failure =  Failure::get ();
    $Sys =  Sys::get ();
    $zero = 0;
    $one = 1;
    $minus_one = -1;
    $succ = (dynamic $n) ==> {return (int) ($n + 1);};
    $pred = (dynamic $n) ==> {return (int) ($n - 1);};
    $abs = (dynamic $n) ==> {
      return $runtime["caml_greaterequal"]($n, 0) ? $n : ((int) - $n);
    };
    $size = $Sys[10];
    $min_int = $left_shift_32(1, (int) ($size + -1));
    $max_int = (int) ($min_int - 1);
    $lognot = (dynamic $n) ==> {return $n ^ -1;};
    $to_string = (dynamic $n) ==> {
      return $runtime["caml_format_int"]($cst_d, $n);
    };
    $of_string_opt = (dynamic $s) ==> {
      try {$a_ = Vector{0, $runtime["caml_int_of_string"]($s)};return $a_;}
      catch(\Throwable $b_) {
        $b_ = $runtime["caml_wrap_exception"]($b_);
        if ($b_[1] === $Failure) {return 0;}
        throw $caml_wrap_thrown_exception_reraise($b_) as \Throwable;
      }
    };
    $compare = (dynamic $x, dynamic $y) ==> {
      return $runtime["caml_int_compare"]($x, $y);
    };
    $equal = (dynamic $x, dynamic $y) ==> {
      return 0 === $compare($x, $y) ? 1 : (0);
    };
    $Nativeint = Vector{
      0,
      $zero,
      $one,
      $minus_one,
      $succ,
      $pred,
      $abs,
      $size,
      $max_int,
      $min_int,
      $lognot,
      $of_string_opt,
      $to_string,
      $compare,
      $equal
    };
    
     return ($Nativeint);

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
  public static function size(): dynamic {
    return static::get()[7]();
  }
  public static function max_int(): dynamic {
    return static::get()[8]();
  }
  public static function min_int(): dynamic {
    return static::get()[9]();
  }
  public static function lognot(dynamic $n): dynamic {
    return static::get()[10]($n);
  }
  public static function of_string_opt(dynamic $s): dynamic {
    return static::get()[11]($s);
  }
  public static function to_string(dynamic $n): dynamic {
    return static::get()[12]($n);
  }
  public static function compare(dynamic $x, dynamic $y): dynamic {
    return static::get()[13]($x, $y);
  }
  public static function equal(dynamic $x, dynamic $y): dynamic {
    return static::get()[14]($x, $y);
  }

}
/* Hashing disabled */
