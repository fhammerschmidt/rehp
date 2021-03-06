<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Js_of_ocaml__Json {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    
    $runtime = (\Rehack\GlobalObject::get() as dynamic)->jsoo_runtime;
    $call1 = $runtime["caml_call1"];
    $caml_get_public_method = $runtime["caml_get_public_method"];
    $string = $runtime["caml_new_string"];
    $dummy_string = $string("");
    $json = $runtime["caml_json"](0);
    $reviver = (dynamic $this__0, dynamic $key, dynamic $value) : dynamic ==> {
      return typeof($value) == typeof("foo")
        ? $runtime["caml_js_to_byte_string"]($value)
        : ($value);
    };
    $input_reviver = $runtime["caml_js_wrap_meth_callback"]($reviver);
    $unsafe_input = (dynamic $s) : dynamic ==> {
      $c_ = (dynamic $x) : dynamic ==> {
        return $call1($caml_get_public_method($x, -309814068, 286), $x);
      };
      return ((dynamic $t2, dynamic $t0, dynamic $t1, dynamic $param) : dynamic ==> {return $t2->parse($t0, $t1);
       })($json, $s, $input_reviver, $c_);
    };
    $a_ = (dynamic $x) : dynamic ==> {
      return $call1($caml_get_public_method($x, 398798074, 287), $x);
    };
    $mlString_constr = ((dynamic $t3, dynamic $param) : dynamic ==> {
       return $t3->constructor;
     })($dummy_string, $a_);
    $output_reviver = (dynamic $key, dynamic $value) : dynamic ==> {
      return instance_of($value, $mlString_constr)
        ? $runtime["caml_jsbytes_of_string"]($value)
        : ($value);
    };
    $output = (dynamic $obj) : dynamic ==> {
      $b_ = (dynamic $x) : dynamic ==> {
        return $call1($caml_get_public_method($x, 215522356, 288), $x);
      };
      return ((dynamic $t6, dynamic $t4, dynamic $t5, dynamic $param) : dynamic ==> {return $t6->stringify($t4, $t5);
       })($json, $obj, $output_reviver, $b_);
    };
    $Js_of_ocaml_Json = Vector{0, $output, $unsafe_input} as dynamic;
    
    return($Js_of_ocaml_Json);

  }
  public static function output(dynamic $obj): dynamic {
    return static::syncCall(__FUNCTION__, 1, $obj);
  }
  public static function unsafe_input(dynamic $s): dynamic {
    return static::syncCall(__FUNCTION__, 2, $s);
  }

}
/* Hashing disabled */
