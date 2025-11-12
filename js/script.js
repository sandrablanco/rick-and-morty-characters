//funcion que devuelva los personajes (contenedor donde se verán)
const characterList = document.getElementById('character-list');

//hacemos una funcion que traiga el array mediante la API fetch 

function getCharacters(page) {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      characterList.innerHTML = '';

      for (let i = 0; i < data.results.length; i++) {
        const character = data.results[i];
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('character-tarjeta');
        tarjeta.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <h3>${character.name}</h3>
          <p>${character.species}</p>
        `;
        
        characterList.appendChild(tarjeta);
      }
    });
}
getCharacters(1);

//agregar botones con eventos para cambiar de página
let paginaActual = 1;
const botonprevio = document.getElementById('prev-page');
const botonsiguiente = document.getElementById('next-page');

botonprevio.addEventListener('click', () => {
  if (paginaActual > 1) { //empiea la página en 1 y solo resta si estas en la 2 o +
    paginaActual --; //resta 1 a la página actual
    getCharacters(paginaActual);
  }
});
botonsiguiente.addEventListener('click', () => {
    paginaActual ++; //+1 // si estamos en la 1 pasa a la 2
    getCharacters(paginaActual);
});

getCharacters(currentPage);