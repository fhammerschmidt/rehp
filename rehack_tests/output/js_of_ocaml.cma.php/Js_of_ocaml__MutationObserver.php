<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Js_of_ocaml__MutationObserver {
  <<__Override, __Memoize>>
  public static function requireModule() : Vector<dynamic> {
    $joo_global_object = \Rehack\GlobalObject::get() as dynamic;
    
    $runtime = $joo_global_object->jsoo_runtime;
    $call1 = $runtime["caml_call1"];
    $caml_get_public_method = $runtime["caml_get_public_method"];
    $Array =  Array_::requireModule ();
    $Js_of_ocaml_Js =  Js_of_ocaml__Js::requireModule ();
    $empty_mutation_observer_init = (dynamic $param) ==> {return darray[];};
    $a_ = (dynamic $x) ==> {
      return $call1($caml_get_public_method($x, -412262690, 261), $x);
    };
    $b_ = $Js_of_ocaml_Js[50][1];
    $mutationObserver = ((dynamic $t0, dynamic $param) ==> {
       return $t0->MutationObserver;
     })($b_, $a_);
    $is_supported = (dynamic $param) ==> {
      return $call1($Js_of_ocaml_Js[6][5], $mutationObserver);
    };
    $observe = 
    (dynamic $node, dynamic $f, dynamic $child_list, dynamic $attributes, dynamic $character_data, dynamic $subtree, dynamic $attribute_old_value, dynamic $character_data_old_value, dynamic $attribute_filter, dynamic $param) ==> {
      $opt_iter = (dynamic $x, dynamic $f) ==> {
        if ($x) {$x__0 = $x[1];return $call1($f, $x__0);}
        return 0;
      };
      $c_ = 0 as dynamic;
      $d_ = $runtime["caml_js_wrap_callback"]($f);
      $obs = ((dynamic $t19, dynamic $t18, dynamic $param) ==> {return new $t19($t18);
       })($mutationObserver, $d_, $c_);
      $cfg = $empty_mutation_observer_init(0);
      $opt_iter(
        $child_list,
        (dynamic $v) ==> {
          $m_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, -749670374, 262), $x);
          };
          return ((dynamic $t17, dynamic $t16, dynamic $param) ==> {$t17->childList = $t16;return 0;
           })($cfg, $v, $m_);
        }
      );
      $opt_iter(
        $attributes,
        (dynamic $v) ==> {
          $l_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, 393324759, 263), $x);
          };
          return ((dynamic $t15, dynamic $t14, dynamic $param) ==> {$t15->attributes = $t14;return 0;
           })($cfg, $v, $l_);
        }
      );
      $opt_iter(
        $character_data,
        (dynamic $v) ==> {
          $k_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, 995092083, 264), $x);
          };
          return ((dynamic $t13, dynamic $t12, dynamic $param) ==> {$t13->characterData = $t12;return 0;
           })($cfg, $v, $k_);
        }
      );
      $opt_iter(
        $subtree,
        (dynamic $v) ==> {
          $j_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, 808321758, 265), $x);
          };
          return ((dynamic $t11, dynamic $t10, dynamic $param) ==> {$t11->subtree = $t10;return 0;
           })($cfg, $v, $j_);
        }
      );
      $opt_iter(
        $attribute_old_value,
        (dynamic $v) ==> {
          $i_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, 226312582, 266), $x);
          };
          return ((dynamic $t9, dynamic $t8, dynamic $param) ==> {
             $t9->attributeOldValue = $t8;
             return 0;
           })($cfg, $v, $i_);
        }
      );
      $opt_iter(
        $character_data_old_value,
        (dynamic $v) ==> {
          $h_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, 994928349, 267), $x);
          };
          return ((dynamic $t7, dynamic $t6, dynamic $param) ==> {
             $t7->characterDataOldValue = $t6;
             return 0;
           })($cfg, $v, $h_);
        }
      );
      $opt_iter(
        $attribute_filter,
        (dynamic $l) ==> {
          $f_ = (dynamic $x) ==> {
            return $call1($caml_get_public_method($x, -116981516, 268), $x);
          };
          $g_ = $runtime["caml_js_from_array"]($call1($Array[12], $l));
          return ((dynamic $t5, dynamic $t4, dynamic $param) ==> {$t5->attributeFilter = $t4;return 0;
           })($cfg, $g_, $f_);
        }
      );
      $e_ = (dynamic $x) ==> {
        return $call1($caml_get_public_method($x, 821429468, 269), $x);
      };
      (((dynamic $t3, dynamic $t1, dynamic $t2, dynamic $param) ==> {return $t3->observe($t1, $t2);
        })($obs, $node, $cfg, $e_));
      return $obs;
    };
    $Js_of_ocaml_MutationObserver = Vector{
      0,
      $empty_mutation_observer_init,
      $mutationObserver,
      $is_supported,
      $observe
    } as dynamic;
    
     return ($Js_of_ocaml_MutationObserver);

  }
  public static function empty_mutation_observer_init(dynamic $param): dynamic {
    return static::callRehackFunction(static::requireModule()[1], varray[$param]);
  }
  public static function is_supported(dynamic $param): dynamic {
    return static::callRehackFunction(static::requireModule()[3], varray[$param]);
  }
  public static function observe(dynamic $node, dynamic $f, dynamic $child_list, dynamic $attributes, dynamic $character_data, dynamic $subtree, dynamic $attribute_old_value, dynamic $character_data_old_value, dynamic $attribute_filter, dynamic $param): dynamic {
    return static::callRehackFunction(static::requireModule()[4], varray[$node, $f, $child_list, $attributes, $character_data, $subtree, $attribute_old_value, $character_data_old_value, $attribute_filter, $param]);
  }

}
/* Hashing disabled */