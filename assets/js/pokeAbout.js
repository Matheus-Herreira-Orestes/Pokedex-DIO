
const all = document.getElementById("All")  
let offset = 0;
const limit = 1;


function pokeCreate (pokemon){
    return `
    <div class="container">

        <div class="upper">
            <div class="header">
                <h1>${pokemon.name}</h1>
                <h1>#${pokemon.number}</h1>
            </div>
            <ol class="types">


            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        


            <div class="about">
                <h2>About</h2>

                <ul>
                    <li>Hp:${pokemon.hp}</li>
                    <li>Attack:${pokemon.attack}</li>
                    <li>Defense:${pokemon.defense}</li>
                    <li>Special Attack:${pokemon.special_attack}</li>
                    <li>Special Defense:${pokemon.special_defense} </li>
                    <li>Speed:${pokemon.speed} </li>
                    <li>Weight:${pokemon.weight} </li>
                    <li>Height:${pokemon.height} </li>
                </ul>

            </div>
        
        
    </div>

    `
}

function birthPokemon (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemon) => {
        const newHtml = pokeCreate(pokemon)
        all.innerHTML += newHtml
    })
}

birthPokemon(offset,limit)