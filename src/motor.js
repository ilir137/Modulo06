import {
    imgBack, 
    imgAsCopas, 
    img2copas, 
    img3copas, 
    img4copas, 
    img5copas, 
    img6copas, 
    img7copas, 
    imgSotacopas, 
    imgCabcopas, 
    imgReycopas,
    puntaje,
    setPuntaje,
    intentos,
    setIntentos,
    imgCarta,
    divCartas,
} from "./modelo.js"

export function mostrarCarta(img, num){
    imgCarta.src = img;
    setPuntaje(parseFloat(puntaje) + parseFloat(num));
    divCartas.innerHTML += `<img src="${img}" alt="Imagen No Encontrada">`;
}

export function obtenerNumRandom(){
    return Math.floor(Math.random() * 10) + 1;
}

export function obtenerNumCarta(numRandom){
    if (numRandom > 7) {
        return numRandom + 2;
    }

    return numRandom;
}

export function obtenerUrlCarta(numCarta){
    switch(numCarta){
        case 1:
            return imgAsCopas;
        case 2:
            return img2copas;
        case 3:
            return img3copas;
        case 4:
            return img4copas;
        case 5:
            return img5copas;
        case 6:
            return img6copas;
        case 7:
            return img7copas;
        case 10:
            return imgSotacopas;
        case 11:
            return imgCabcopas;
        case 12:
            return imgReycopas;
    }
}

export function obtenerPuntosCarta(carta){
    if (carta > 7) {
        return 0.5;
    }

    return carta;
}

export function sumarPuntos(num){
    setPuntaje(parseFloat(puntaje) + num);
}

export function mensajeMePlanto(){
    if (puntaje <= 4 || puntaje === 4.5){
        setIntentos(parseInt(intentos) + 1);
        return "Has sido muy conservador"
    } else if (puntaje === 5 || puntaje === 5.5){
        setIntentos(parseInt(intentos) + 1);
        return "Te ha entrado el canguelo eh"
    } else if (puntaje === 6 || puntaje === 6.5 || puntaje === 7){
        setIntentos(parseInt(intentos) + 1);
        return "Casi casi..."
    } else if (puntaje === 7.5){
        if (intentos === 0){setIntentos(parseInt(intentos) + 1);}
        if (intentos === 1){
            return `¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intento para ganar la partida.`
        } else {
            return `¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intentos para ganar la partida.`;
        }
    }
}
