import {
    btnDameCarta,
    btnMePlanto
} from "./modelo.js"

import { inicializar, dameCarta, mePlanto } from "./ui.js";

document.addEventListener('DOMContentLoaded', inicializar);

if (btnDameCarta !== null && btnDameCarta !== undefined) {
    btnDameCarta.addEventListener('click', () => {
        dameCarta();
    })
}
if (btnMePlanto !== null && btnMePlanto !== undefined){
    btnMePlanto.addEventListener('click', () => {
        mePlanto();
    })
}
