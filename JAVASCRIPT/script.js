let button = document.getElementsByClassName(".boton-random");
let imagen = document.createElement("img");
let contenedor = document.querySelector(".card");


function pokemonRandom(){
 
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getNumberRandom(1, 905)}`)
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (info) {
        console.log(info);
        uploadImage(info);
      });
  } catch (error) {
    console.log(error);
  }
};

//Método para obtener un número random
const getNumberRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
//Cargar imágen del pokémon
function uploadImage(info) { 

  const pokemonData ={
    img: info.sprites.other.dream_world.front_default,
    name: info.name,
    hp: info.stats[0].base_stat,
    experience:info.base_experience,
    attack: info.stats[1].base_stat,
    defense: info.stats[2].base_stat,
    speed: info.stats[5].base_stat
  }

  const flex = document.querySelector('.flex');
  const template = document.querySelector(".template-card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  //Creo un clone del contenedor
  clone.querySelector('.card-body-portrait').setAttribute('src',pokemonData.img);
  clone.querySelector('.card-body-title').innerHTML = `${pokemonData.name} <span>${pokemonData.hp} hp</span>`;
  clone.querySelector('.card-body-text').textContent = pokemonData.experience + ' exp'; 
  clone.querySelectorAll('.card-footer-statistics h3')[0].textContent = pokemonData.attack;
  clone.querySelectorAll('.card-footer-statistics h3')[1].textContent = pokemonData.defense;
  clone.querySelectorAll('.card-footer-statistics h3')[2].textContent = pokemonData.speed;

  fragment.appendChild(clone);
  flex.appendChild(fragment); 

  //contenedor = document.querySelector(".card");
  //contenedor.innerHtml = "";
  /*contenedor.innerHtml += `<img
  src="CSS/images/bg-pattern-card.svg"
  alt="imagen header card"
  class="card-header"
/>
<div class="card-body">
  <img
    src="CSS/images/image-victor.jpg"
    alt="image portrait"
    class="card-body-portrait"
  />
  <h2 class="card-body-title">
              card name
              <span>26</span>
            </h2>
            <p class="card-body-text">otras cosas</p>
          </div>
          <div class="card-footer">
            <div class="card-footer-opcion1">
              <h3>Opcion 1</h3>
              <p>prueba</p>
            </div>
            <div class="card-footer-opcion2">
              <h3>Opcion 1</h3>
              <p>prueba</p>
            </div>
            <div class="card-footer-opcion3">
              <h3>Opcion 1</h3>
              <p>prueba</p>
            </div>          
          </div>
          <div class="boton">
            <button onclick="pokemonRandom()">Select</button>
          </div>`;*/
}

/*button.addEventListener("click",async() =>{
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then((data) => data.json())
        .then((data2) => console.log(data2))
})*/
window.onload = function () {
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getNumberRandom(1, 905)}`)
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (info) {

       

        console.log(info); 
        uploadImage(info);
      });
  } catch (error) {
    console.log(error);
  }
};
