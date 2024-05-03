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
    let inputValue = '';
</script>

<section>
    <div class="form">
        <form>
            <input id="pokemonInput" placeholder="Nom du Pokémon" bind:value={inputValue}/>
            <button>
                <a href={`/pokemons/${inputValue}`}>
                    Rechercher
                </a>
            </button>
        </form>
    </div>
    <div class="pokemons">
        <ul>
            {#each pokemons as pokemon}
                <li>
                    <a href={`/pokemons/${pokemon.name}`}>
                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                        <span>{pokemon.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</section>
<style>
    section {
        width: 100%;
        height: 100%;
    }
    section .form {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    section > div > form {
        background-color: #ebebeb;
        
        border-radius: 12px;
        padding: 30px;
        display: flex;
        gap: 15px;
    }
    form input {
        width: 30vw;
        height: 4vh;
        border: none;
        text-indent: 10px;
        border-radius: 6px;
    }
    form button {
        width: 10vw;
        height: 4vh;
        border: none;
        border-radius: 6px;
        background-color: black;
        padding-left: 10px;
        padding-right: 10px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form button a {
        text-decoration: none;
        color: #fff;
    }
    .pokemons {
        margin-top: 20px;
        width: 100%;
    }
    .pokemons ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .pokemons li {
        width: 50%;
        list-style: none;
    }
    .pokemons li a {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        align-items: center;
        text-transform:capitalize;
        color: #000;
        background-color: #ebebeb;
        border-radius: 12px;
    }
    .pokemons li a:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 2px rgba(229, 229, 229, 0.492);
    }
    .pokemons li a img {
        max-height: 100px;
    }
    .pokemons li a span {
        width: 70%;
    }
</style>