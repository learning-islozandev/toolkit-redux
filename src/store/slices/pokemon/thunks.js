import { getPokemonsAxios } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async (dispatch) => {
        dispatch(startLoadingPokemon());

        try {
             // Obtener datos de la API usando Axios
            const data = await getPokemonsAxios(page);

            // Despachar acción para actualizar el estado con los datos obtenidos
            dispatch(setPokemon({
                page: page + 1,
                pokemons: data.results
            }));

        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }

    }
}
