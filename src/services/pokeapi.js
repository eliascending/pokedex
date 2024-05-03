import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (pokemonName) => {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        console.error('Erreur : ', error);
        return null;
    }
};