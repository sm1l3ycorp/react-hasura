import { gql } from "@apollo/client";

export const ADD_POKEMON = gql`
mutation AddPokemon ($name: String, $number: Int, $type: String) {
  insert_pokemon(objects: {name: $name, number: $number, type: $type}) {
    affected_rows
  }
}
`

export const REMOVE_POKEMON = gql`
mutation DeletePokemon($number: Int!) {
  delete_pokemon(where: {number: {_eq: $number}}) {
    affected_rows
  }
}
`

export const UPDATE_POKEMON = gql`
mutation UpdatePokemon($name: String!, $number: Int!, $type: String!) {
  update_pokemon(where: {number: {_eq: $number}}, _set: {name: $name, type: $type}) {
    affected_rows
  }
}
`