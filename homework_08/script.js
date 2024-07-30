let container = document.querySelector('.container').style;
container.display = 'flex';
container.flexDirection = "column"

class Element{
    constructor(icon, h5){
        this.src = icon;
        this.h5 = h5;
    }
    render(clas, num){
        this.out = `
            <img src="${this.src}" alt="icon">
            <h4>${this.h5}</h4>
        `;
        document.querySelectorAll(`.${clas}`)[`${num}`].innerHTML = this.out;
        console.log(`${clas}`, `${num}`);
    }
}

let icons = [
    ['https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-grin-beam-64.png', 
    'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/image-64.png',
    'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/hand-lizard-64.png'],

    ['https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-dizzy-64.png',
    'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-frown-64.png',
    'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-kiss-wink-heart-64.png'],

    ['https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-rolling-eyes-64.png',
    'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/trash-can-64.png',
    'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/576/credit-card-64.png']
];

let titles = [
    ['Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году',
    'Нет географических границ',
    'Ассортимент'],

    ['Безопасность',
    'Сокращение расходов на аренду и персонал',
    'Партнерские отношения'],

    ['Покупатель всегда на связи',
    'Комфортный выбор',
    'Удобство оплаты']
];

let counterCol = 0;
for(let i = 0; i < 3; i++){
    let row = `<div class="container_row"></div>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", row);
    for(let j = 0; j < 3; j++){
        let col = `<div class="container_col"></div>`;
        document.querySelectorAll(".container_row")[i].insertAdjacentHTML("beforeend", col);
        let elem = new Element(icons[i][j], titles[i][j]);
        elem.render("container_col", counterCol++);
    }
}

let elementsRow = document.querySelectorAll('.container_row');
elementsRow.forEach(element => {
    element.style.display = "flex";
    element.style.margin = "auto"
});

let elementsCol = document.querySelectorAll('.container_col');
elementsCol.forEach(element => {
    element.style.boxSizing = "border-box";
    element.style.border = "1px solid gray";
    element.style.margin = "10px 20px";
    element.style.padding = "30px 20px 0";
    element.style.width = "250px";
    element.style.textAlign = "center";
    element.style.boxShadow = "0 0 10px";
});

