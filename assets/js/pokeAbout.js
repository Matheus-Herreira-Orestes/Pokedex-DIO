
const all = document.getElementById("All")  
let offset = 0;
const limit = 1;


function pokeCreate (pokemon){
    return `
    <div class="container">

        <div class="upper">
            <div class="header">
                <h1>${pokemon.name}</h1>
                <h1>#${pokemon.id}</h1>
            </div>
            <ol class="types">


            </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
        


            <div class="about">
                <h2>About</h2>

                <ul>
                    <li>Hp:${pokemon.stats[0].base_stat}</li>
                    <li>Attack:${pokemon.stats[1].base_stat}</li>
                    <li>Defense:${pokemon.stats[2].base_stat}</li>
                    <li>Special Attack:${pokemon.stats[3].base_stat}</li>
                    <li>Special Defense:${pokemon.stats[4].base_stat} </li>
                    <li>Speed:${pokemon.stats[5].base_stat} </li>
                    <li>Weight:${pokemon.weight} </li>
                    <li>Height:${pokemon.height} </li>
                </ul>

            </div>
        
        
    </div>

    `
}



const fetchPokemon = async (query1) =>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${query1}`);
    
    if (APIResponse.status == 200){
        
    const data = await APIResponse.json();

    console.log(data)

    return data;


    }

}



  function birthPokemon (query1) {
    fetchPokemon(query1).then((pokemon) => {
        const newHtml = pokeCreate(pokemon)
        all.innerHTML += newHtml
    })
}

birthPokemon(query1)
