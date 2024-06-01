const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const pokemonType1 = document.querySelector('.type_1');
const pokemonType2 = document.querySelector('.type_2');


let searchPokemon = 1;


const fetchPokemon = async (pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200){

        const data = await APIResponse.json();
        return data;
    }


    
}

const renderPokemon = async (pokemon) =>{
    pokemonNumber.innerHTML = '';
    pokemonName.innerHTML = 'Loading...';
    
    const data = await fetchPokemon(pokemon);

    if (data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default'];
        pokemonType1.innerHTML = data['types']['0']['type']['name']
        const type_1 = pokemonType1.innerHTML.toString()
        

        
        searchPokemon = data.id;


        if(data['types']['1'] != null){
            pokemonType2.innerHTML = data['types']['1']['type']['name']
            const type_2 = pokemonType2.innerHTML.toString()
            switch(type_2){
                case 'normal':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(175,164,164,1) 51%, rgba(237,235,233,1) 100%)';
                    pokemonTypee.style.color = '#ffffff';
                    break;
                case 'grass':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(142,255,0,1) 0%, rgba(117,255,117,1) 63%, rgba(215,251,229,1) 100%)';
                    pokemonTypee.style.color = '#ffffff';
                    break;
                case 'fire':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(253,29,29,1) 51%, rgba(252,176,69,1) 100%)';
                    pokemonTypee.style.color = '#ffffff';
                    break;
                case 'water':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(0,139,250,1) 49%, rgba(209,234,254,1) 100%)';
                    pokemonTypee.style.color = '#ffffff';
                    break;
                case 'flying':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(150,173,237,1) 49%, rgba(197,195,247,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'fighting':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(251,0,0,1) 49%, rgba(241,171,171,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'poison':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(167,24,195,1) 49%, rgba(250,137,234,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'electric':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(254,188,3,1) 49%, rgba(251,210,83,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'ground':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(167,125,7,1) 49%, rgba(200,193,143,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'rock':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(115,86,5,1) 49%, rgba(148,133,24,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'psychic':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(252,5,114,1) 49%, rgba(252,110,170,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'ice':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(108,243,254,1) 49%, rgba(208,245,249,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'bug':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(32,54,4,1) 49%, rgba(153,189,109,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'ghost':
                    pokemonType2.style.background = 'llinear-gradient(180deg, rgba(37,0,117,1) 49%, rgba(79,70,121,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'steel':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(85,84,85,1) 49%, rgba(192,192,194,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'dragon':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(1,1,143,1) 49%, rgba(135,99,254,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'fairy':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(241,134,190,1) 49%, rgba(255,238,248,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
                case 'dark':
                    pokemonType2.style.background = 'linear-gradient(180deg, rgba(98,58,39,1) 49%, rgba(65,41,30,1) 100%)';
                    pokemonType2.style.color = '#ffffff';
                    break;
            }


        } 
        else{
            pokemonType2.innerHTML = 'null';
            pokemonType2.style.background =  '#000000';
            pokemonType2.style.color =  '#999393';  
        }
    
        input.value = '';

        switch(type_1){
            case 'normal':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(175,164,164,1) 51%, rgba(237,235,233,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'grass':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(142,255,0,1) 0%, rgba(117,255,117,1) 63%, rgba(215,251,229,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'fire':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(253,29,29,1) 51%, rgba(252,176,69,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'water':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(0,139,250,1) 49%, rgba(209,234,254,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'flying':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(150,173,237,1) 49%, rgba(197,195,247,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'fighting':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(251,0,0,1) 49%, rgba(241,171,171,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'poison':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(167,24,195,1) 49%, rgba(250,137,234,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'electric':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(254,188,3,1) 49%, rgba(251,210,83,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'ground':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(167,125,7,1) 49%, rgba(200,193,143,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'rock':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(115,86,5,1) 49%, rgba(148,133,24,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'psychic':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(252,5,114,1) 49%, rgba(252,110,170,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'ice':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(108,243,254,1) 49%, rgba(208,245,249,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'bug':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(32,54,4,1) 49%, rgba(153,189,109,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'ghost':
                pokemonType1.style.background = 'llinear-gradient(180deg, rgba(37,0,117,1) 49%, rgba(79,70,121,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'steel':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(85,84,85,1) 49%, rgba(192,192,194,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'dragon':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(1,1,143,1) 49%, rgba(135,99,254,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'fairy':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(241,134,190,1) 49%, rgba(255,238,248,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            case 'dark':
                pokemonType1.style.background = 'linear-gradient(180deg, rgba(98,58,39,1) 49%, rgba(65,41,30,1) 100%)';
                pokemonType1.style.color = '#ffffff';
                break;
            default:
                pokemonType1.style.background =  '#000000';
                pokemonType1.style.color =  '#999393';   
        }
        


    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '';
        pokemonType1.innerHTML = 'null';
        pokemonType2.innerHTML = 'null';
    }

    
}


form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
    input.value = '';

});

btnPrev.addEventListener('click', () => {

    if (searchPokemon > 1){
        searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
});

btnNext.addEventListener('click', () => {

    searchPokemon += 1;
    renderPokemon(searchPokemon);
 
});


renderPokemon(searchPokemon);