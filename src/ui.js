import {
    imgBack,
    puntaje,
    setPuntaje,
    intentos,
    setIntentos,
    spanPuntos,
    spanIntentos,
    imgCarta,
    divCartas,
} from "./modelo.js"

import { mostrarCarta, obtenerNumRandom, obtenerNumCarta, obtenerUrlCarta, obtenerPuntosCarta, sumarPuntos, mensajeMePlanto } from "./motor.js";

export function inicializar(){
    setPuntaje(0);
    muestraPunt(puntaje);
    divCartas.innerHTML = "";
    muestraIntentos(intentos);
}

function muestraPunt(punt){
    spanPuntos.innerText = punt;
}

function muestraIntentos(inten){
    setIntentos(inten);
    spanIntentos.innerText = inten;
}

function mostrarUrlCarta(url){
    imgCarta.src = url;
    divCartas.innerHTML += `<img src="${url}" alt="Imagen No Encontrada">`;
    setTimeout(() => {
        imgCarta.src = imgBack;
    }, 700);  // 700 milisegundos = 0.7 segundos
}

function revisarPartida(){
    if (puntaje > 7.5){
        alert(`Game Over, tu puntaje es de ${puntaje}...`);
        setIntentos(parseInt(intentos) + 1);
        inicializar();
    } else if (puntaje === 7.5){
        partidaGanada();
    }
}

function partidaGanada(){
    if (intentos === 0){setIntentos(parseInt(intentos) + 1);}
    if (intentos === 1){
        alert(`¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intento para ganar la partida.`);
    } else {
        alert(`¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intentos para ganar la partida.`);
    }
    intentos = 0;
}

export function dameCarta(){
    //console.log(numCarta);
    //obtenerUrlCarta(obtenerNumCarta(obtenerNumRandom()));
    const carta = obtenerNumCarta(obtenerNumRandom());
    const urlCarta = obtenerUrlCarta(carta);
    mostrarUrlCarta(urlCarta);
    const punto = obtenerPuntosCarta(carta);
    sumarPuntos(punto);
    muestraPunt(puntaje);
    revisarPartida();
}

export function mePlanto(){
    //console.log(puntaje);
    alert(mensajeMePlanto());
    if (puntaje === 7.5){setIntentos(0);}
    inicializar();
}
