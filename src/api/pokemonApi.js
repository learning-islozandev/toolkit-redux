import axios from 'axios';

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

const getPokemonsAxios = async (page = 0) => {
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    return resp.data;
}

export {
    getPokemonsAxios
}