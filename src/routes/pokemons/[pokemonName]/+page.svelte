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
    <div class="card">
        {#if pokemonData}
            <div class="main-info">
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <h1>{pokemonData.name}</h1>
            </div>
            <p>Type : {pokemonData.types[0].type.name}</p>
            <p>Compétences : 
            {#each pokemonData.abilities as ability}
                <li>{ability.ability.name}</li>
            {/each}
            </p>
            <p> Statistiques : 
                {#each pokemonData.stats as stat}
                    <li>{stat.stat.name} : {stat.base_stat}</li>
                {/each}
            </p>
        {/if}
        {#if !pokemonData}
        <h1>Introuvable</h1>
        {/if}
    </div>
</section>

<style>
    section {
        padding: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        width: 80%;
        height: 100%;
        background-color: #ebebebeb;
        border-radius: 12px;
        padding: 15px;
        text-transform: capitalize;
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .card li {
        list-style: none;
    }

</style>