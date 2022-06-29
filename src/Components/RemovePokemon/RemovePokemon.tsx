import { useMutation } from "@apollo/client";
import { REMOVE_POKEMON } from "../../GraphQL/mutations";
import { useState } from "react";
import { GET_POKEMON } from "../../GraphQL/queries";

const RemovePokemon = () => {
    const [number, setNumber] = useState(0);
    const [removePokemon, { loading, error, data }] = useMutation(REMOVE_POKEMON);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        removePokemon({variables: {number: number}, refetchQueries: [ GET_POKEMON]})
      };

      if (loading) {
        return <div className="tasks">Loading...</div>;
      }
      if (error) {
        return <div className="tasks">Error!</div>;
      }
    
    return (
    <>
    <br />
    <h3>Remove Pokemon by Number</h3>
            <form onSubmit={handleSubmit}>
            <label>Number:
                <input 
                type="text" 
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                />
            </label>
            <input type="submit" />
        </form>
    </>
    )
};

export default RemovePokemon;