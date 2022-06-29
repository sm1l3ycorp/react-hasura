import { gql } from "@apollo/client";

export interface PokemonList {
    id: Number;
    name: String;
    number: Number;
    type: String;
}

export const GET_POKEMON = gql`
query GetPokemon {
  pokemon(order_by: {number: asc}) {
    id
    name
    number
    type
  }
}
`;