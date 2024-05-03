<script>
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
</section>

<style>
        section {
        padding: 10px;
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
</style>