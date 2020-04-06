// variables
const listaTweets = document.getElementById('lista-tweets');
// event liseteners
eventListeners();

function eventListeners() {
    // cuando se agrega al formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

}

// crear botón eliminar

const botonBorrar = document.createElement('a');
botonBorrar.classList = 'borrar-tweet';
botonBorrar.innerText = 'x';
// borrar tweet

listaTweets.addEventListener('click', borrarTweet);

// Funciones

// Agregar al storage

agregarTweetLocalStorage();

// Agregar tweet al formularios

function agregarTweet(e) {
    e.preventDefault();
    // leer tweet

    const tweet = document.getElementById('tweet').value;
    // crear elemento y añadirle contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el botón al twwet
    li.appendChild(botonBorrar);
    // añade el botón a la lista
    listaTweets.appendChild(li); 
}


// Borra tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if (e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove());
        alert('Tweet Eliminado');
    }
}
// Agrega el tweet al local storage
function agregarTweetLocalStorage(Tweet) {
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    // añadir el nuevo tweet

    tweets.push(tweet);

    // convertir de string a arreglo en local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));

    // agregar local
    localStorage.setItem('tweets', tweet);
}

function obtenerTweetsLocalStorage() {
    let tweets;
    // revisar valor local storage
    if (localStorage.getItem('tweets') === null){
        localStorage.clear();
        tweets = [];
    }
    else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}