<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Lexing {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    
    $runtime = (\Rehack\GlobalObject::get() as dynamic)->jsoo_runtime;
    $caml_bytes_get = $runtime["caml_bytes_get"];
    $call1 = $runtime["caml_call1"];
    $call2 = $runtime["caml_call2"];
    $call3 = $runtime["caml_call3"];
    $call4 = $runtime["caml_call4"];
    $call5 = $runtime["caml_call5"];
    $caml_check_bound = $runtime["caml_check_bound"];
    $caml_create_bytes = $runtime["caml_create_bytes"];
    $caml_ml_bytes_length = $runtime["caml_ml_bytes_length"];
    $string = $runtime["caml_new_string"];
    $cst_Lexing_lex_refill_cannot_grow_buffer = $string(
      "Lexing.lex_refill: cannot grow buffer"
    );
    $dummy_pos = Vector{0, $string(""), 0, 0, -1} as dynamic;
    $zero_pos = Vector{0, $string(""), 1, 0, 0} as dynamic;
    $Bytes = Bytes::get();
    $Pervasives = Pervasives::get();
    $Sys = Sys::get();
    $engine = (dynamic $tbl, dynamic $state, dynamic $buf) : dynamic ==> {
      $z_ = null as dynamic;
      $result = $runtime["caml_lex_engine"]($tbl, $state, $buf);
      if (0 <= $result) {
        $buf[11] = $buf[12];
        $z_ = $buf[12];
        $buf[12] =
          Vector{0, $z_[1], $z_[2], $z_[3], (int) ($buf[4] + $buf[6])};
      }
      return $result;
    };
    $new_engine = (dynamic $tbl, dynamic $state, dynamic $buf) : dynamic ==> {
      $y_ = null as dynamic;
      $result = $runtime["caml_new_lex_engine"]($tbl, $state, $buf);
      if (0 <= $result) {
        $buf[11] = $buf[12];
        $y_ = $buf[12];
        $buf[12] =
          Vector{0, $y_[1], $y_[2], $y_[3], (int) ($buf[4] + $buf[6])};
      }
      return $result;
    };
    $lex_refill = (dynamic $read_fun, dynamic $aux_buffer, dynamic $lexbuf) : dynamic ==> {
      $n = null as dynamic;
      $s = null as dynamic;
      $t = null as dynamic;
      $v_ = null as dynamic;
      $w_ = null as dynamic;
      $i = null as dynamic;
      $v = null as dynamic;
      $x_ = null as dynamic;
      $newlen = null as dynamic;
      $newbuf = null as dynamic;
      $read = $call2(
        $read_fun,
        $aux_buffer,
        $caml_ml_bytes_length($aux_buffer)
      );
      if (0 < $read) {$n = $read;}
      else {$lexbuf[9] = 1;$n = 0 as dynamic;}
      if ($caml_ml_bytes_length($lexbuf[2]) < (int) ($lexbuf[3] + $n)) {
        if (
          (int)
          ((int) ($lexbuf[3] - $lexbuf[5]) + $n) <= $caml_ml_bytes_length($lexbuf[2])
        ) {
          $call5(
            $Bytes[11],
            $lexbuf[2],
            $lexbuf[5],
            $lexbuf[2],
            0,
            (int)
            ($lexbuf[3] - $lexbuf[5])
          );
        }
        else {
          $newlen =
            $call2(
              $Pervasives[4],
              (int)
              (2 * $caml_ml_bytes_length($lexbuf[2])),
              $Sys[13]
            );
          if ($newlen < (int) ((int) ($lexbuf[3] - $lexbuf[5]) + $n)) {
            $call1($Pervasives[2], $cst_Lexing_lex_refill_cannot_grow_buffer);
          }
          $newbuf = $caml_create_bytes($newlen);
          $call5(
            $Bytes[11],
            $lexbuf[2],
            $lexbuf[5],
            $newbuf,
            0,
            (int)
            ($lexbuf[3] - $lexbuf[5])
          );
          $lexbuf[2] = $newbuf;
        }
        $s = $lexbuf[5];
        $lexbuf[4] = (int) ($lexbuf[4] + $s);
        $lexbuf[6] = (int) ($lexbuf[6] - $s);
        $lexbuf[5] = 0;
        $lexbuf[7] = (int) ($lexbuf[7] - $s);
        $lexbuf[3] = (int) ($lexbuf[3] - $s);
        $t = $lexbuf[10];
        $w_ = (int) ($t->count() - 1 + -1) as dynamic;
        $v_ = 0 as dynamic;
        if (! ($w_ < 0)) {
          $i = $v_;
          for (;;) {
            $v = $caml_check_bound($t, $i)[$i + 1];
            if (0 <= $v) {
              $caml_check_bound($t, $i)[$i + 1] = (int) ($v - $s);
            }
            $x_ = (int) ($i + 1) as dynamic;
            if ($w_ !== $i) {$i = $x_;continue;}
            break;
          }
        }
      }
      $call5($Bytes[11], $aux_buffer, 0, $lexbuf[2], $lexbuf[3], $n);
      $lexbuf[3] = (int) ($lexbuf[3] + $n);
      return 0;
    };
    $from_function = (dynamic $f) : dynamic ==> {
      $k_ = Vector{0} as dynamic;
      $l_ = 0 as dynamic;
      $m_ = 0 as dynamic;
      $n_ = 0 as dynamic;
      $o_ = 0 as dynamic;
      $p_ = 0 as dynamic;
      $q_ = 0 as dynamic;
      $r_ = 0 as dynamic;
      $s_ = $caml_create_bytes(1024);
      $t_ = $caml_create_bytes(512);
      return Vector{
        0,
        (dynamic $u_) : dynamic ==> {return $lex_refill($f, $t_, $u_);},
        $s_,
        $r_,
        $q_,
        $p_,
        $o_,
        $n_,
        $m_,
        $l_,
        $k_,
        $zero_pos,
        $zero_pos
      };
    };
    $from_channel = (dynamic $ic) : dynamic ==> {
      return $from_function(
        (dynamic $buf, dynamic $n) : dynamic ==> {
          return $call4($Pervasives[72], $ic, $buf, 0, $n);
        }
      );
    };
    $from_string = (dynamic $s) : dynamic ==> {
      $b_ = Vector{0} as dynamic;
      $c_ = 1 as dynamic;
      $d_ = 0 as dynamic;
      $e_ = 0 as dynamic;
      $f_ = 0 as dynamic;
      $g_ = 0 as dynamic;
      $h_ = 0 as dynamic;
      $i_ = $runtime["caml_ml_string_length"]($s);
      $j_ = $call1($Bytes[5], $s);
      return Vector{
        0,
        (dynamic $lexbuf) : dynamic ==> {$lexbuf[9] = 1;return 0;},
        $j_,
        $i_,
        $h_,
        $g_,
        $f_,
        $e_,
        $d_,
        $c_,
        $b_,
        $zero_pos,
        $zero_pos
      };
    };
    $lexeme = (dynamic $lexbuf) : dynamic ==> {
      $len = (int) ($lexbuf[6] - $lexbuf[5]) as dynamic;
      return $call3($Bytes[8], $lexbuf[2], $lexbuf[5], $len);
    };
    $sub_lexeme = (dynamic $lexbuf, dynamic $i1, dynamic $i2) : dynamic ==> {
      $len = (int) ($i2 - $i1) as dynamic;
      return $call3($Bytes[8], $lexbuf[2], $i1, $len);
    };
    $sub_lexeme_opt = (dynamic $lexbuf, dynamic $i1, dynamic $i2) : dynamic ==> {
      $len = null as dynamic;
      if (0 <= $i1) {
        $len = (int) ($i2 - $i1) as dynamic;
        return Vector{0, $call3($Bytes[8], $lexbuf[2], $i1, $len)};
      }
      return 0;
    };
    $sub_lexeme_char = (dynamic $lexbuf, dynamic $i) : dynamic ==> {
      return $caml_bytes_get($lexbuf[2], $i);
    };
    $sub_lexeme_char_opt = (dynamic $lexbuf, dynamic $i) : dynamic ==> {
      return 0 <= $i ? Vector{0, $caml_bytes_get($lexbuf[2], $i)} : (0);
    };
    $lexeme_char = (dynamic $lexbuf, dynamic $i) : dynamic ==> {
      return $caml_bytes_get($lexbuf[2], (int) ($lexbuf[5] + $i));
    };
    $lexeme_start = (dynamic $lexbuf) : dynamic ==> {return $lexbuf[11][4];};
    $lexeme_end = (dynamic $lexbuf) : dynamic ==> {return $lexbuf[12][4];};
    $lexeme_start_p = (dynamic $lexbuf) : dynamic ==> {return $lexbuf[11];};
    $lexeme_end_p = (dynamic $lexbuf) : dynamic ==> {return $lexbuf[12];};
    $new_line = (dynamic $lexbuf) : dynamic ==> {
      $lcp = $lexbuf[12];
      $lexbuf[12] = Vector{0, $lcp[1], (int) ($lcp[2] + 1), $lcp[4], $lcp[4]};
      return 0;
    };
    $flush_input = (dynamic $lb) : dynamic ==> {
      $lb[6] = 0;
      $lb[4] = 0;
      $a_ = $lb[12];
      $lb[12] = Vector{0, $a_[1], $a_[2], $a_[3], 0};
      $lb[3] = 0;
      return 0;
    };
    $Lexing = Vector{
      0,
      $dummy_pos,
      $from_channel,
      $from_string,
      $from_function,
      $lexeme,
      $lexeme_char,
      $lexeme_start,
      $lexeme_end,
      $lexeme_start_p,
      $lexeme_end_p,
      $new_line,
      $flush_input,
      $sub_lexeme,
      $sub_lexeme_opt,
      $sub_lexeme_char,
      $sub_lexeme_char_opt,
      $engine,
      $new_engine
    } as dynamic;
    
    return($Lexing);

  }
  public static function from_channel(dynamic $ic): dynamic {
    return static::syncCall(__FUNCTION__, 2, $ic);
  }
  public static function from_string(dynamic $s): dynamic {
    return static::syncCall(__FUNCTION__, 3, $s);
  }
  public static function from_function(dynamic $f): dynamic {
    return static::syncCall(__FUNCTION__, 4, $f);
  }
  public static function lexeme(dynamic $lexbuf): dynamic {
    return static::syncCall(__FUNCTION__, 5, $lexbuf);
  }
  public static function lexeme_char(dynamic $lexbuf, dynamic $i): dynamic {
    return static::syncCall(__FUNCTION__, 6, $lexbuf, $i);
  }
  public static function lexeme_start(dynamic $lexbuf): dynamic {
    return static::syncCall(__FUNCTION__, 7, $lexbuf);
  }
  public static function lexeme_end(dynamic $lexbuf): dynamic {
    return static::syncCall(__FUNCTION__, 8, $lexbuf);
  }
  public static function lexeme_start_p(dynamic $lexbuf): dynamic {
    return static::syncCall(__FUNCTION__, 9, $lexbuf);
  }
  public static function lexeme_end_p(dynamic $lexbuf): dynamic {
    return static::syncCall(__FUNCTION__, 10, $lexbuf);
  }
  public static function new_line(dynamic $lexbuf): dynamic {
    return static::syncCall(__FUNCTION__, 11, $lexbuf);
  }
  public static function flush_input(dynamic $lb): dynamic {
    return static::syncCall(__FUNCTION__, 12, $lb);
  }
  public static function sub_lexeme(dynamic $lexbuf, dynamic $i1, dynamic $i2): dynamic {
    return static::syncCall(__FUNCTION__, 13, $lexbuf, $i1, $i2);
  }
  public static function sub_lexeme_opt(dynamic $lexbuf, dynamic $i1, dynamic $i2): dynamic {
    return static::syncCall(__FUNCTION__, 14, $lexbuf, $i1, $i2);
  }
  public static function sub_lexeme_char(dynamic $lexbuf, dynamic $i): dynamic {
    return static::syncCall(__FUNCTION__, 15, $lexbuf, $i);
  }
  public static function sub_lexeme_char_opt(dynamic $lexbuf, dynamic $i): dynamic {
    return static::syncCall(__FUNCTION__, 16, $lexbuf, $i);
  }
  public static function engine(dynamic $tbl, dynamic $state, dynamic $buf): dynamic {
    return static::syncCall(__FUNCTION__, 17, $tbl, $state, $buf);
  }
  public static function new_engine(dynamic $tbl, dynamic $state, dynamic $buf): dynamic {
    return static::syncCall(__FUNCTION__, 18, $tbl, $state, $buf);
  }

}
/* Hashing disabled */
