import { getPokemonsAxios } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());

        // TODO: Fetch data from API;
        // const resp = fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        const data = await getPokemonsAxios(page);
        
        dispatch(setPokemon({
            page: page + 1,
            pokemons: data.results
        }));

    }
}
