const pokemonList = document.getElementById('pokemonList')
const loadButton = document.getElementById('loadButton')

const maxRecords = 151
const limit = 10
let offset = 0;


function PokeConvert(pokemon){
    return  `
    
    <a href="stats.html?id=${pokemon.number}">
    <li class="pokemon ${pokemon.type}" onclick="fetchPokemon(${pokemon.number})">

         <span class="number"></span>
         <span class="name">${pokemon.name}</span>

        <div class="detail">

            <ol class="types">

                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}

            </ol>

            <img src="${pokemon.photo}" 
            alt="${pokemon.name}">

        </div>
    </li>
    </a>

`
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(PokeConvert).join('')
        pokemonList.innerHTML += newHtml
    })
}


loadPokemonItens(offset, limit)

loadButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadButton.parentElement.removeChild(loadButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})



