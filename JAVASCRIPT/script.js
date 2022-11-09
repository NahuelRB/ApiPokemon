
let button = document.getElementById('boton-random');


/*button.addEventListener("click",async() =>{
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then((data) => data.json())
        .then((data2) => console.log(data2))
})*/
window.onload = function(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${getNumberRandom(1,905)}`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(info){
        console.log(info);
        uploadImage(info);
       
    })

    
}

function uploadImage(info){
    console.log("llego");
    document.getElementById('card-body-portrait').url ="https://static.wikia.nocookie.net/doblaje/images/a/aa/Pikachu_XY.png/revision/latest?cb=20161002184039&path-prefix=es";
}

const getNumberRandom = (min,max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}

