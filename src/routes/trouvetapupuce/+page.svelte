<script>
    let inputValue = '';
</script>
<section>
    <div>
        <form>
            <input id="pokemonInput" placeholder="nom du pokemon" bind:value={inputValue}/>
            <button>
                <a href={`/pokemons/${inputValue}`}>
                    Rechercher
                </a>
            </button>
        </form>
    </div>
</section>