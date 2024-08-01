"use strict";

document.querySelector('#load').addEventListener('click', load);

function load(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(function(data){
        let loadArea = document.querySelector('#load-area');
        let html = data.map(function(item){
            return item.completed ? "<li>Пользователь " + item.userId + ": выполнил задачу №" + item.id + " (" + item.title + ")</li>" : ""
        }).join(" ");
        loadArea.insertAdjacentHTML('afterbegin', `<ul>${html}</ul>`);
      })
}
