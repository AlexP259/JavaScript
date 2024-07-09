"use strict";

let mounths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

function randomBg(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

for(let i = 0; i < mounths.length; i++){
    document.write("<div class='div-element'>" + mounths[i] + "</div>");
    let element = document.querySelectorAll(".div-element")[i];
    element.style.background=randomBg();
    element.style.textAlign='center';
    element.style.fontFamily='sans-serif';
    element.style.fontWeight='bold';
}
