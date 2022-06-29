
const Pokemon = ( pokemon: any) => {
    return (
        <>
        <br />
        Name: {pokemon.pokemon.name}
        <br />
        Number: {pokemon.pokemon.number}
        <br />
        Type: {pokemon.pokemon.type}
        <br />
        </>
    )
};

export default Pokemon;