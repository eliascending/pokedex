<script>
const url = window.location.pathname;
const dernierMot = url.split("/").pop();

import { onMount } from 'svelte';

let pokemonData;

onMount(async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${dernierMot}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon');
        }
        pokemonData = await response.json();
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
});
</script>
<h1>{pokemonData ? pokemonData.name : "Loading..."}</h1>
{#if pokemonData}
    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
{/if}