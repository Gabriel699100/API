let contenedor = document.getElementById("container");
let personajes = {};

const traer_datos = (id)=>{
    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then((response) => response.json())
    .then((data) => {
        personajes = data;
        print();

    })
    .catch((error) => console.log(error))
}

const print = ()=>{
    contenedor.innerHTML = "";
    contenedor.insertAdjacentHTML('beforeend',`
    
    <div class="datos">
        <img class="personaje" src="${personajes.image}">
        <h1>${personajes.name}</h1>
        <div>
          <div class="descripcion"> Gender:  ${personajes.gender}</div>
        </div>
    </div>
    `)
    contenedor.insertAdjacentHTML('beforeend', `
      <center><button id="random">RANDOM</button></center>
    `)
    let rand_btn = document.getElementById("random")
    rand_btn.addEventListener("click", ()=>{
        traer_datos(aleatorio_entre(1,826));
    })
}

const aleatorio_entre = (min,max)=>{
    return Math.ceil(Math.random()*(max-min)+min);
}

traer_datos(1);