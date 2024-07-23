"use strict";
let btn = document.querySelector('button[name="push"]');
btn.addEventListener('click', () => {
    switch(document.form2.choose.value){
        case '1': alert("Луна"); break;
        case '2': alert("Водопад"); break;
        case '3': alert("Эхо"); break;
        case '4': alert("Небо, звёзды, месяц"); break;
        case '5': alert("Дождь"); break;
    }
});