(* Js_of_ocaml compiler
 * http://www.ocsigen.org/js_of_ocaml/
 * Copyright (C) 2013 Hugo Heuzard
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, with linking exception;
 * either version 2.1 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 *)
open Stdlib
open Rehp

class type mapper = object
  method expression : expression -> expression
  method expression_o : expression option -> expression option
  method switch_case : expression -> expression
  method initialiser : (expression * Loc.t) -> (expression * Loc.t)
  method initialiser_o : (expression * Loc.t) option -> (expression * Loc.t) option
  method variable_declaration : variable_declaration -> variable_declaration
  method statement : statement -> statement
  method statements : statement_list -> statement_list
  method statement_o : (statement * Loc.t) option -> (statement * Loc.t) option
  method source : source_element -> source_element
  method sources : source_elements -> source_elements
  method ident : Id.t -> Id.t
  method program : program -> program
end

class map : mapper

class subst : (Id.t -> Id.t) ->  object
    inherit mapper
  end

type t = {
  use_name : StringSet.t;
  def_name : StringSet.t;
  def : Code.Var.Set.t;
  use : Code.Var.Set.t;
  count : int Id.IdentMap.t;
}


class type freevar =
  object('a)
    inherit mapper
    method merge_info : 'a -> unit
    method block : ?catch:bool -> Id.t list -> unit

    method def_var : Id.t -> unit
    method use_var : Id.t -> unit
    method state : t
    method get_free_name : StringSet.t
    method get_free : Code.Var.Set.t
    method get_def_name : StringSet.t
    method get_def : Code.Var.Set.t
    method get_use_name : StringSet.t
    method get_use : Code.Var.Set.t
  end

class free : freevar

class rename_variable : StringSet.t -> freevar

class share_constant : mapper

class compact_vardecl : object('a)
  inherit free
  method exc  : Id.IdentSet.t
end

class clean : mapper
class simpl : mapper
