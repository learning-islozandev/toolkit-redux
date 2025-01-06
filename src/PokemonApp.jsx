import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from "./store/slices/pokemon/thunks";


export const PokemonApp = () => {

    const dispath = useDispatch();
    const { isLoading, pokemons, page } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispath(getPokemons());
    }, [])


    return (
        <>
            <h3>Pokemon App</h3>
            <hr />
            {
                isLoading
                    ? <span>Loading...</span>
                    : null
            }
            <ul>
                {
                    pokemons.map(pokemon => (
                        <li key={pokemon.name}>
                            {pokemon.name}
                        </li>
                    ))
                }
            </ul>

            <button onClick={() => dispath(getPokemons(page))}>
                Next
            </button>

        </>
    )
}
