<script>
    import { onMount } from 'svelte';
    let pokemons = [];

    onMount(async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        pokemons = data.results.map(pokemon => ({
        ...pokemon,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(pokemon.url)}.png`
        }));
    });

    function getIdFromUrl(url) {
        const parts = url.split('/');
        return parts[parts.length - 2];
    }
</script>

<section>
    <div>
        <form>
            <input placeholder="nom du pokemon"/>
            <button>
                Rechercher
            </button>
        </form>
    </div>
    <div class="pokemons">
        <ul>
            {#each pokemons as pokemon}
                <li>
                    <img src={pokemon.imageUrl} alt={pokemon.name} />
                    <span>{pokemon.name}</span>
                </li>
            {/each}
        </ul>
    </div>
</section>