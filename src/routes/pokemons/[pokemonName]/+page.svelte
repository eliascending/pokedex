<script>
import { page } from '$app/stores';

const url = window.location.pathname;
const dernierMot = $page.params.pokemonName
// const dernierMot = url.split("/").pop();

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

<section>
<h1>{pokemonData ? pokemonData.name : "Introuvable"}</h1>
{#if pokemonData}
    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    <p>{pokemonData.types[0].type.name}</p>
    <p>
    {#each pokemonData.abilities as ability}
        <li>{ability.ability.name}</li>
    {/each}
    </p>
    <p>
        {#each pokemonData.stats as stat}
            <li>{stat.stat.name} {stat.base_stat}</li>
        {/each}
    </p>
{/if}
</section>