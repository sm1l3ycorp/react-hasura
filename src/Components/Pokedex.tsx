import { useQuery } from "@apollo/client";
import { GET_POKEMON, PokemonList } from "../GraphQL/queries";
import Pokemon from "./Pokemon/Pokemon";
import AddPokemon from "./AddPokemon/AddPokemon";
import RemovePokemon from "./RemovePokemon/RemovePokemon";
import UpdatePokemon from "./UpdatePokemon/UpdatePokemon";

const Pokedex = () => {
    const {loading, error, data}  = useQuery(GET_POKEMON)    

    if (loading) {
        return <div className="tasks">Loading...</div>;
      }
      if (error) {
        return <div className="tasks">Error!</div>;
      }
    
      return (
        <div className="pokedex">
          <h3>Pokedex</h3>
            {data.pokemon.map((pokemon: PokemonList) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
            <AddPokemon />
            <RemovePokemon />
            <UpdatePokemon />
        </div>
      );
    };

export default Pokedex;