<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class CamlinternalLazy {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    
    $runtime = (\Rehack\GlobalObject::get() as dynamic)->jsoo_runtime;
    $call1 = $runtime["caml_call1"];
    $caml_obj_set_tag = $runtime["caml_obj_set_tag"];
    $caml_obj_tag = $runtime["caml_obj_tag"];
    $caml_wrap_thrown_exception = $runtime["caml_wrap_thrown_exception"];
    $caml_wrap_thrown_exception_reraise = $runtime[
       "caml_wrap_thrown_exception_reraise"
     ];
    $cst_CamlinternalLazy_Undefined = $runtime["caml_new_string"](
      "CamlinternalLazy.Undefined"
    );
    $Obj = Obj::get();
    $Undefined = Vector{
      248,
      $cst_CamlinternalLazy_Undefined,
      $runtime["caml_fresh_oo_id"](0)
    } as dynamic;
    $raise_undefined = (dynamic $param) : dynamic ==> {
      throw $caml_wrap_thrown_exception($Undefined) as \Throwable;
    };
    $force_lazy_block = (dynamic $blk) : dynamic ==> {
      $result = null as dynamic;
      $closure = $blk[1];
      $blk[1] = $raise_undefined;
      try {
        $result = $call1($closure, 0);
        $blk[1] = $result;
        $caml_obj_set_tag($blk, $Obj[10]);
        return $result;
      }
      catch(\Throwable $e) {
        $e = $runtime["caml_wrap_exception"]($e);
        $blk[1] =
          (dynamic $param) : dynamic ==> {
            throw $caml_wrap_thrown_exception_reraise($e) as \Throwable;
          };
        throw $caml_wrap_thrown_exception_reraise($e) as \Throwable;
      }
    };
    $force_val_lazy_block = (dynamic $blk) : dynamic ==> {
      $closure = $blk[1];
      $blk[1] = $raise_undefined;
      $result = $call1($closure, 0);
      $blk[1] = $result;
      $caml_obj_set_tag($blk, $Obj[10]);
      return $result;
    };
    $force = (dynamic $lzv) : dynamic ==> {
      $t = $caml_obj_tag($lzv);
      return $t === $Obj[10]
        ? $lzv[1]
        : ($t !== $Obj[6] ? $lzv : ($force_lazy_block($lzv)));
    };
    $force_val = (dynamic $lzv) : dynamic ==> {
      $t = $caml_obj_tag($lzv);
      return $t === $Obj[10]
        ? $lzv[1]
        : ($t !== $Obj[6] ? $lzv : ($force_val_lazy_block($lzv)));
    };
    $CamlinternalLazy = Vector{
      0,
      $Undefined,
      $force_lazy_block,
      $force_val_lazy_block,
      $force,
      $force_val
    } as dynamic;
    
    return($CamlinternalLazy);

  }
  public static function force_lazy_block(dynamic $blk): dynamic {
    return static::syncCall(__FUNCTION__, 2, $blk);
  }
  public static function force_val_lazy_block(dynamic $blk): dynamic {
    return static::syncCall(__FUNCTION__, 3, $blk);
  }
  public static function force(dynamic $lzv): dynamic {
    return static::syncCall(__FUNCTION__, 4, $lzv);
  }
  public static function force_val(dynamic $lzv): dynamic {
    return static::syncCall(__FUNCTION__, 5, $lzv);
  }

}
/* Hashing disabled */
