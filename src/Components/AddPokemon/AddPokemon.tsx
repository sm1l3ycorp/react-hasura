import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POKEMON } from '../../GraphQL/mutations';
import { GET_POKEMON } from '../../GraphQL/queries';

const AddPokemon = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [type, setType] = useState("");

    const [addPokemon, {loading, error, data}] = useMutation(ADD_POKEMON)

     const handleSubmit = (event: any) => {
        event.preventDefault();
        if (name && number && type) {
        addPokemon({variables: {name: name, number: number, type: type}, refetchQueries: [ GET_POKEMON]})
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
        <div>
            <br />
            <h3>Add Pokemon</h3>
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
        </div>
        </>
    )
}

export default AddPokemon;