const pokemon_numbler = document.getElementById("pkum")
const pokemon_name = document.getElementById("pkname")
const pokemon_img = document.getElementById("pkimg")

const pokemon_form = document.getElementById("form")
const pokemon_input = document.getElementById("imput")

const pokemon_prev = document.getElementById("bnt-prev")
const pokemon_next = document.getElementsByTagName("bnt-next")

let searchPokemon= 1;

const fetchPokemon= async (pokemon) =>{
const APIResponse=  ava1t fetch
(https)://pokeapi.co/api/v2/pokemon/${pokemon};
if(APIResponse.status==200)
 constdata = await APIResponse.json();
return data;

}


const rederPokemon = async (pokemon)=>{
 const data = await(fetchPokemon(pokemon))
 if(data){
   pokemon_name_imeriHTML = data.name;
   pokemon_nunbler_imeriHTML = data.id;
   pokemon_img.scr= data('sprites')['version']
   ('generation_v') ['black-white']['']['front_default'];
  else(
 pokemon_name



  )

}

