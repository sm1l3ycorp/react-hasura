import { useMutation } from "@apollo/client";
import { UPDATE_POKEMON } from "../../GraphQL/mutations";
import { useState } from "react";
import { GET_POKEMON } from "../../GraphQL/queries";

const UpdatePokemon = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [type, setType] = useState("");

    const [updatePokemon, {loading, error, data}] = useMutation(UPDATE_POKEMON);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (name && number && type) {
        updatePokemon({variables: {name: name, number: number, type: type}, refetchQueries: [ GET_POKEMON]})
        } else {
            alert("All fields are required");
        }
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
            <h3>Update Pokemon by Number</h3>
            <form onSubmit={handleSubmit}>
            <label>Name:
                <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Number:
                <input 
                type="text" 
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                />
            </label>
            <label>Type:
                <input 
                type="text" 
                value={type}
                onChange={(e) => setType(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
        </>
    )
};

export default UpdatePokemon;