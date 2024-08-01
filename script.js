"use strict";
/* let message;    // let - переменная, const - константа, var
message = "Hello";
console.log(message);
console.log(typeof message);

message = 2.4;
console.log(message);
console.log(typeof message);

message = true;
console.log(message);
console.log(typeof message);

message = undefined;
console.log(message);
console.log(typeof message);

message = null;
console.log(message);
console.log(typeof message); */

/* let a = 10;
let b, c;
b = "Hello";
console.log(a, b);

const pi = 3.14;
// pi = 2;
console.log(pi);

var d = 4;
console.log(d); */

// let camelCase = "";
/* let $_snake_case2 = "Hello";
console.log($_snake_case2); */

/* let str1 = "Двойные кавычки";
let str2 = 'Одинарные кавычки ${3 + 2}';
let str3 = `Обратные кавычки ${str2}`;
console.log("Текст", str1);
console.log(str2);
console.log(str3); */

// alert("Сообщение");

/* let firstName = "Sergey";
alert(`Hello, ${firstName}`); */

/* let res = confirm("Знаете ли Вы HTML");
console.log(res);   // OK => true, Отмена => false
if (res){
    alert("Пора учить JavaScript");
} else {
    alert("Нужно выучить!");
} */

/* let res = prompt("Ваше имя");
console.log("Hello", res);  // OK => введенное значение, Отмена => null
alert("Hello, " + res); */


/* let a = 12;
let b = 8;
console.log("+:", a + b);
console.log("-:", a - b);
console.log("/:", a / b);
console.log("*:", a * b);
console.log("%:", a % b);
console.log("**:", a ** b); */


/* let c = 23;
let d = "6";
console.log(c * d); // 236 */


/* console.log(parseInt("21.84"));
console.log(parseFloat("21.84"));
console.log(Number("21.84"));
console.log(+("21.84"));
console.log(parseFloat("21.8446674").toFixed(3)); */


/* let login = prompt("Login", "admin");
let password = prompt("Password", "123456");
// alert("***Данные для входа***\nВаш логин: " + login + "\nВаш пароль: " + password);
console.log("***Данные для входа***\nВаш логин: " + login + "\nВаш пароль: " + password); */


// let str = "Инструкция:\nДокумент \"script.js\" файлы лежат в папке D:\\\\folder\\file.txt";
// alert(str);

/* let a = prompt("Введите первое число: ", 5);
let b = +prompt("Введите второе число: ", 7);
// a = parseInt(a);
// b = Number(b);
alert(a + b);   // 57 */

// alert(+true);


/* let a = 0, b = 0;
let c = a++ + 2;
let d = ++b + 2;
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
console.log("d: ", d); */

/* let a = +prompt("Введите 1 число: ", 5);
let b = +prompt("Введите 2 число: ", 4);
let c = +prompt("Введите 3 число: ", 6);
alert("Сумма чисел: " + (a + b + c)); */


/* let sum = +prompt("Введите 1 число: ", 5);
sum += +prompt("Введите 2 число: ", 4);
sum += +prompt("Введите 3 число: ", 6);
alert("Сумма чисел: " + sum); */


/* console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 != 3);
console.log(5 != "5");
console.log(5 !== "5"); */


// (7 > 3) ? alert(7) : alert(3);


/* let ch = prompt("Угадайте число от 1 до 10");
let num = 7;
let a = 
ch ==
 num ? "Угадали!" 
: ch < num ?
 "Загаданное число больше!" 
: "Загаданное число меньше!";
alert(a); */


// FALSE: 0, 0.0, "", false, undefined, null, NaN

/* let variable = "0";
if (variable){
    console.log("TRUE")
} else {
    console.log("FALSE");
} */

/* let a = "Hello";
let b = "World";
console.log(a / b);
 */


/*let login = prompt("Введите логин: ", "admin");
// console.log(login);  // Отмена => null, Ok => вернет введенное значение
 if (login){
    if(login == "admin"){
        let psw = prompt("Введите пароль: ", "password");
        if(psw){    
            if(psw == "password"){
                alert("Добро пожаловать!");
            } else {
                alert("Пароль неверен");
            }            
        } else {
            alert("Вход отменен");
        }
    } else {
        alert("Я вас не знаю");
    }
} else {
    alert("Вход отменен");
} */


/* if(5 == 5 || 1 > 2){
    console.log(true);
} else {
    console.log(false);
} */

/* console.log(!!255);
console.log(Boolean(255)); */


/* let a = +prompt("Результат 2 + 2: ");
switch(a){  // a === 1
    case 4: {
        alert("Верно");
        break;
    }
    case 3: 
    case 5: 
        alert("Неверно");
        break;
    default:
        alert("Я таких значений не знаю");
} 
*/

// let a = 10;
// document.write("<p>Текст выведен <b>в окно браузера в самом конце документа</b></p>");
// document.write("<p><img src='1.jpg'>Еще текст</p>");
// document.write("<p>" + a + "</p>");
// document.write(`<p>${a}</p>`);

// let i = 0;
// do{ 
//     document.write("Это номер: " + i + "<br>");
//     i++;
// } while (i < 5)

// let i = 1;
// do{ 
//     document.write("Квадрат: " + i + " равен: " + i ** 2 + "<br>");
//     i++;
// } while (i < 7)

// let i = 0;
// while (i < 5){ 
//     document.write("Это номер: " + i + "<br>");
//     i++;
// } 


// let a, res = 1;
// do{
//     a = +prompt("Введите число: ", 10);
//     if(a == 0){
//         break;
//     }
//     res *= a;
// } while(true);
// alert("Произведение введенных чисел: " + res);


// for(var i = 1; i < 12; i++){
//     document.write(i + " ");
// }
// document.write("<br>i = " + i);


// for(let i = 0; i < 4; i++){
//     document.write("+++ <br>");
//     for(let j = 0; j < 2; j++){
//         document.write("-- <br>");
//     }
// }

// let tr = prompt("Введите количество строк: ");
// let td = prompt("Введите количество столбцов: ");
// let symbol = prompt("Введите символ: ");
// document.write("<table border='1'>");
// for(let i = 0; i < tr; i++){
//     document.write("<tr>");
//     for(let j = 0; j < td; j++){
//         document.write("<td>" + symbol + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// document.write("<table border='1' width='260'>");
// for(let i = 0; i <= 10; i++){
//     document.write("<tr>");
//     for(let j = 0; j <= 10; j++){
//         if (i == 0){
//             document.write("<td>" + j + "</td>");
//             continue;
//         }
//         if(j == 0){
//             document.write("<td>" + i + "</td>");
//         } else {
//             if((i + j) % 2 == 0){
//                 document.write("<td bgcolor='red'>" + i * j + "</td>");
//             } else {
//                 document.write("<td bgcolor='yellow'>" + i * j + "</td>");
//             }
//         }
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// МАССИВЫ 26.06 *************************************************************
// let arr1 = [2,6,8];
// let arr2 = new Array(1,5,7);

// let arr3 = [5]; // массив на 1 элемент со значением 5
// let arr4 = new Array(5);    // массив на 5 элементов, но пустой

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// document.write(arr1);
// alert(arr1);


// let arr1 = [2,6,8];
// console.log(arr1);
// arr1[0] = 100;
// console.log(arr1);
// arr1[10] = 200;
// console.log(arr1);
// console.log("length = ", arr1.length);

// let f = [1, 2, 3, 4, 5, 6];
// console.log(f);
// f.length = 3;
// console.log(f);
// f.length = 6;
// console.log(f);


// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// let sumNegative = 0;
// arr.forEach(x => {if (x < 0) {sumNegative += x;}});
// document.write(sumNegative);

// let arr1 = new Array(5);
// for(let i = 0; i < arr1.length; i++){
//     arr1[i] = +prompt("Введите " + (i + 1) + " элемент массива");
// }
// console.log(arr1.reverse());

// МАССИВЫ 01.07 *************************************************************
// let arr = [2, 5, 7, "Игорь", 1.5, true];
// console.log(arr);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr);
// console.table(arr);
// console.log(arr[2][0]);

/* let question = ["На ноль делить можно", "Волга впадает в Каспийское море", "Атмосферное давление увеличивается с высотой", "2x2 будет 8", "Дельфины - это рыбы", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];
let correct = [false, true, false, false, false, false, false];
let sum = 0;
let res = new Array();

for(let i = 0; i < question.length; i++){
    let answer = confirm(question[i]);
    if(answer == correct[i]){
        res[i] = 10;
    } else {
        res[i] = 0;
    }
    sum += res[i];
}
document.write("<table border='1' width='500'>");
document.write("<tr>");
document.write("<th>Вопрос</th>");
document.write("<th>Баллы</th>");
document.write("</tr>");

for(let i = 0; i < question.length; i++){
    document.write("<tr>");
    document.write("<td>" + question[i] + "</td>");
    document.write("<td>" + res[i] + "</td>");
    document.write("</tr>");
}

document.write("<tr>");
document.write("<th>Итого</th>");
document.write("<th>"+ sum +"</th>");
document.write("</tr>");
document.write("</table>"); */


// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "<b>Новое</b> содержимое";

// let text2 = document.getElementById("text_2");
// console.log(text2);
// console.log(text2.innerHTML);
// text2.innerHTML = "<b>Новое</b> содержимое";


// let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.write("<div id='image'></div>");
// let img = document.getElementById("image");
// switch(res){
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break;
//     default:
//         alert("Такого изображения нет");
// }


// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";
// // list-style-type => listStyleType
// tag.id="text";
// tag.className="x";


// let q = document.getElementsByClassName("a");
// console.log(q);
// q[0].style.color = "blue";
// q[1].style.color = "red";


// document.querySelector(css);
// document.querySelectorAll(css);


// let res = document.querySelector("p");
// console.log(res);
// let res2 = document.querySelectorAll("p")[1];
// console.log(res2);


// let el = document.querySelector("h2");
// console.log(el.innerHTML);
// let els = document.querySelectorAll("h2")[1];
// console.log(els.innerHTML);
// let lists = document.querySelectorAll("li");
// for(let i = 0; i < lists.length; i++){
//     lists[i].innerHTML += "!!!";
// }


// let m = document.querySelectorAll(".purple li")[1];
// m.style.color="orange";


// let m = document.getElementsByClassName("purple")[0].getElementsByTagName("li")[1];
// m.style.color = "orange";
// console.log(m);


// let js = ["нужно", "учить", "JavaScript"];
// console.log(js.pop());  // удаляет последний элемент из массива
// console.log(js);

// js.push("JavaScript");  // добавляет элемент в конец списка
// console.log(js);

// console.log(js.shift());    // удаляет первый элемент из массива
// console.log(js);

// js.unshift("почему", "нужно");  // добавляет элементы в начало
// console.log(js);

// js.splice(1, 1);    // удаляет элементы (начиная с какого индекса, сколько элементов удалить)
// console.log(js);

// js.splice(1, 0, "сложный", "язык"); // также вставляет элементы
// console.log(js);

// js.splice(-2, 0, "но", "очень", "интересный");
// console.log(js);    // работает с отрицательными индексами

// let str = js.join("; ");    // преобразовывает все элементы массива в строку через заданный символ разделитель
// console.log(str);



// Function Declaration ****************************************************

// function test(a, b, c){ // 3 - это значение по умолчанию. Если нет аргумента для параметра "c", то подставится тройка
//     return a + b + c;
// }

// // test(10,20,30); // 60
// // test(5,2);    // NaN
// // test(5,2,3,5,7);    // 10. По трём первым аргументам

// let x1 = 10, x2 = 20, x3 = 30;
// let q = test(x1, x2, x3);    // 10
// alert(q);


/* function showArrayContent(arrayToShow) {
    // Тут идёт код функции.
    if(arrayToShow.length == 1){
        return arrayToShow;
    } else {
        let last = arrayToShow.pop();
        let str = arrayToShow.join(", ");
        let all = str + ' и ' + last;
        return all;
    }
}
// Определяем массивы.
let a = new Array('Текст');
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лета', 'осень');
alert(showArrayContent(a)); // Выводим содержимое массивов,
alert(showArrayContent(b)); // используя созданную выше функцию.
alert(showArrayContent(c)); */



// №1 Function Declaration

/* alert(sum1(2, 3));  // вызов function declaration может быть раньше, чем объявлена сама функция
function sum1 (a, b){
    return a + b;
}
 */


// №2 Function expression

/* let sum2 = function(a, b){
    return a + b;
}
alert(sum2(12, 13));    // вызов function expression должен идти только после того, как объявлена переменная, которой присвоена функция */



// №3 Самовызывающаяся (анонимная) функция. К функции не можем обратиться, т.к. нет имени. Поэтому сам смысл использования анонимных функций теряется

// (function(){
//     alert("Привет мир!");
// }());

// (function(n){
//     alert("Привет мир!!!!!" + n);
// })(4)


//-----------------------------------------
// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }
// alert(test(10,20,30));


// №4 Arrow function - стрелочные функции

// let test2 = (a, b, c) => a + b + c;

// alert(test2(1,2,3));

// let test3 = (a, b, c) => {
//     let res = a + b + c;
//     return res;
// };

// alert(test3(1,2,3));

// let hello = (n) => alert("Hello, " + n);
// hello("Igor");



// Объект Math
// console.log(Math.floor(7.9));
// console.log(Math.ceil(7.1));
// console.log(Math.round(7.4));

// (function(min, max){    // это самовызывающаяся (анонимная) функция
//     document.write(Math.floor(Math.random() * (max - min) + min) + "<br>");
// }(2, 9));

// document.write(Math.floor(Math.random() * (9 - 2) + 2) + "<br>");


// let mas = function(words){
//     return words[Math.floor(Math.random() * words.length)];
// }
// let arr = ["Цикл", "Массив", "Условие", "Функция"];
// let char = mas(arr);
// document.write(char);


// let a = 5;
// if(a > 0){
//     a++;
//     document.write(a + "<br>");
// }
// document.write("a = " + a);

// let j = 2;
// function ch(){
//     j = 3;
// }
// ch();
// alert(j);


// document.write("<div id='block'></div>");
// let id = document.getElementById('block');

// let createColor = () => Math.floor(Math.random() * 256);

// id.style.width = id.style.height = "100px";
// id.style.backgroundColor="rgb(" + createColor() + ", " + createColor() + ", " + createColor() + ")";


// function hello(name="незнакомецъ", age=30) {
//     // name = name || "незнакомецъ";    // старый способ задать значение по-умолчанию
//     document.write("Привет, " + name + "! Мне " + age + " лет.<br>");
// }
// hello("Сергей", 25);
// alert(hello());


// let str = "I\'m a JavaScript \"programmer\"";
// document.write(str + "<br>");
// document.write(str[2] + "<br>");
// str[2] = "y";    // ошибка
// str = str[2] + "y"   // нет ошибки
// document.write(str + "<br>");
// document.write(str.length + "<br>");
// document.write(str.toUpperCase() + "<br>");
// document.write(str.toLowerCase() + "<br>");
// document.write(str.indexOf("m") + "<br>");
// document.write(str.lastIndexOf("m") + "<br>");
// document.write(str.split(" ", 2) + "<br>");  // вернет массив
// console.log(str.split(" ", 2));  // вернет массив
// document.write(str.slice(-23, -10) + "<br>");    // работает с отрицательными индексами, но не понимает диапазонов от большего индекса к меньшему
// document.write(str.substring(3, 0) + "<br>"); // не работает с отрицательными индексами, но понимает диапазоны от больших индексов к меньшим

/* let st = str.split(" ");
console.log(st);
let st2 = st.join(" "); // объединяет элементы массива в 1 строку
console.log(st2);
console.log(typeof(st2)); */


// СОБЫТИЯ *********************************************************************
// Первый способ обработать событие - Использование атрибута HTML ***********************************************************************************************************************
// function click1(){
//     alert("Клик");
// }

// let m = document.getElementById("mes");
// function over(){
//     m.style.color="red";
// }
// function out(){
//     m.style.color="blue";
// }

// // Как обработчик делать на одном элементе, а взаимодействовать с другим элементом
// function change(){
//     let id = document.getElementById("id1");
//     id.style.color="orange";
// }

// // цвет страницы меняется при наведении на изображение
// function randomBg(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
// }

// // меняет текст
// function reset(id){
//     id.innerHTML = "Новый текст";
// }

// // меняет цвет фона всей страницы на тот цвет, что мы нажали
// function setColor(element){
//     document.body.style.background = element.className;
// }

// // меняет по нажатию ЛКМ день на ночь, а при отпускании ЛКМ возвращает обратно
// let newImg = document.getElementById("newimg");
// function on(){
//     newImg.src="night.png";
// }
// function off(){
//     newImg.src="day.png";
// }


// Второй способ обработать событие, НЕ прописывая само событие в HTML-разметке *******************************************************************************************************
// document.getElementById("but").onclick = function(){
//     alert("Спасибо");
// }

// по ID можно напрямую обратиться к элементу. Но, так лучше не делать, т.к. если уже есть переменные с таким же именем как ID у элемента, то мы обратимся к переменной, а не к элементу с аналогичным ID
// but.onclick = function(){   
//     alert("Спасибо");
// }

// function hello() {
//     alert("Спасибо");
// }
// but.onclick = hello;    // если поставить круглые скобки, то вызов произойдет сразу при загрузке страницы. Т.е. к функции не применится событие. НЕЛЬЗЯ СТАВИТЬ КРУГЛЫЕ СКОБКИ, т.к. мы передаем функцию в качестве обработчика события


// Третий способ обработать событие *******************************************************************************************************
// let el = document.getElementById("but");
// добавляем обработчик события click к элементу el. При событии click будет вызвана анонимная функция
// el.addEventListener("click", function(){    
//     el.innerHTML = "Новый текст";
// });
// можем сделать функцию не анонимной. Функцию тоже писать без скобочек, т.к. мы передаем функцию в качестве аргумента
// function setText(){    
//     el.innerHTML = "Новый текст";
// }
// el.addEventListener("click", setText);
// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// });




// document.addEventListener('mousemove', function(event){
//     let c = document.querySelector('#ev');
//     let x = event.clientX;
//     let y = event.clientY;

//     c.textContent = "X = " + x + ", Y = " + y;

//     c.addEventListener('dblclick', function(event){
//         event.target.style.background="red";
//     });
// });


// let input = document.querySelector("#but");
// input.addEventListener('click', handler);
// function handler(){
//     alert('Спасибо');
//     input.removeEventListener('click', handler);
// }


// setTimeout("alert('Текст')", 3000); // если в функцию передается параметр, то оборачиваем в кавычки

// setTimeout(hello, 3000, "Привет", "друг");
// function hello(h, n){
//     alert(h + ", " + n + "!");
// };


// document.write("<div id='dt'>Создание анимированного текста</div>");
// let id = document.querySelector('#dt');
// let text = document.querySelector('#dt').innerHTML;
// let i = 0;
// // console.log(id);
// window.addEventListener('load', animText);
// function animText(){
//     id.innerHTML = text.substring(0, i);
//     i++;
//     if(i > text.length){
//         i = 0;
//     }
//     setTimeout(animText, 100);
// }


// let d = new Date();
// document.write(d + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.getFullYear() + "<br>");   // 2024
// document.write(d.getMonth() + "<br>");   // 6, месяцы от 0 до 11
// document.write(d.getDate() + "<br>");   // 15
// document.write(d.getDay() + "<br>");   // 1, 0 - воскресенье, 6 - суббота


// let arr1 = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
// let arr2 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// let t = new Date();
// document.write("Сегодня: " + t.getDate() + " " + arr1[t.getMonth()] + " " + t.getFullYear() + ", " + arr2[t.getDay()]);


// document.write('<input type="button" value="Start / Stop">');
// let button = document.querySelector("input").addEventListener('click', st);
// let run, act;
// function st(){
//     if(!run){
//         act = setInterval(setColor, 1000);
//         // run = true;
//     } 
//     else {
//         clearInterval(act);
//         // run = false;
//     }
//     run = !run;
// }
// function setColor(){
//     let x = document.body;
//     x.style.background = (x.style.background == 'yellow') ? 'orange' : 'yellow';
// }


// document.write('<div id="text">Здесь будет отображаться текущее время</div>');

// window.addEventListener("load", () => setInterval(time, 1000));

// window.addEventListener("load", st);
// function st(){
//     setInterval(time, 1000);
// }

// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();

//     if(sec < 10){
//         sec = "0" + sec;
//     }

//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector('#text').innerHTML = tim;
// }

// let a = document.querySelector("#cl");
// a.addEventListener('click', myMove);
// function myMove(){
//     // a.style.visibility = 'hidden';
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 5);
//     function frame(){
//         if(pos == 150){
//             // a.style.visibility = 'visible';
//             a.addEventListener('click', myMove);
//             clearInterval(id);
//         }
//         else{
//             a.removeEventListener('click', myMove);
//             pos++;
//             elem.style.top = pos +'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }


// let img = document.image;
// let img = document.getElementsByName("image")[0];

// img.style.border = "1px solid black";
// img.width = 200;
// document.write("<p>Ширина изображения: " + img.width + "<br>Высота изображения: " + img.height +  "</p>");

// let check = false;
// img.addEventListener("click", () => {
//     img.src = check == false ? "blue_star.png" : "golden_star.png";
//     check = !check;
// });


// let array = ["2.jpg", "3.jpg", "4.jpg"];
// document.write('<input type="button" name="left" value="<">');
// document.write('<img id="sl" src="' + array[0] + '">');
// document.write('<input type="button" name="right" value=">">');
// let image = document.getElementById("sl");
// let i = 0;
// document.getElementsByName("right")[0].addEventListener("click", rightBtn);
// document.getElementsByName("left")[0].addEventListener("click", leftBtn);
// function rightBtn(){
//     i++;
//     if(i == array.length){
//         i = 0;
//     }
//     image.src = array[i];
// }
// function leftBtn(){
//     i--;
//     if(i < 0){
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }


// let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"];
// let t = document.querySelectorAll("#clock img");
// clock();
// function clock(){
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     getImg(hour, min, sec);
//     setTimeout(clock, 1000);
// }
// function getImg(h, m, s){
//     t[0].src = imgTime[parseInt(h / 10)];       
//     t[1].src = imgTime[h % 10];       
//     t[3].src = imgTime[Math.floor(m / 10)];       
//     t[4].src = imgTime[m % 10];       
//     t[6].src = imgTime[parseInt(s / 10)];       
//     t[7].src = imgTime[s % 10];       
// }


// alert(document.documentElement); // выведет объект-ноду элемента <html> в текущем документе HTML.
// alert(document.documentElement.innerHTML);   // свойство innerHTML выведет HTML-содержимое элемента <html> в текущем документе. Это будет включать весь HTML-код, который находится внутри элемента <html>, включая все вложенные элементы, атрибуты и текстовые узлы.
// alert(document.documentElement.innerText);   // выведет текстовое содержимое всех элементов, включая вложенные элементы, внутри корневого элемента <html> в текущем документе. 
// alert(document.body.innerHTML);

// let title = document.querySelector("h1").innerHTML;
// console.log(title);

// let title = document.querySelector("h1").firstChild;    // вернет текст из h1 В КАВЫЧКАХ, то есть вернет текстовую ноду, которая является дочерней нодой у h1

// let title = document.querySelector("h1").firstChild.nodeValue;    // вернет текст из дочерней тексовой ноды у h1 БЕЗ КАВЫЧЕК

// let title = document.querySelector("h1").firstChild.nodeName;    // вернет #text

// let title = document.querySelector("h1").nodeName;    // вернет H1

// let title = document.querySelector("h1").firstChild.nodeType;    // вернет тип ноды. Он указан числом, например, TEXT_NODE это 3, а ELEMENT_NODE это 1
// console.log(title);



/******************************** Создаем новые элементы относительно других ********************************/  

// let elem = document.querySelector("#root");

// let tag = document.createElement("p");  // нода элемента <p></p>  создалась, но на страницу пока никуда не добавляется
// let node = document.createTextNode("Новый текст!!!"); // создали текстовую ноду, тоже пока никуда не добавлена
// tag.append(node);   // тут мы взяли тег <p> и вложили в него текст



// есть 4 метода, которые могут добавлять элементы ***********************************

// ДОБАВЛЯЮТ ДОЧЕРНИМ ЭЛЕМЕНТОМ:
// elem.append(tag);   // тег p добавился последним потомком в div с id root
// elem.prepend(tag);   // тег p добавился первым дочерним элементом внутри div с id root
// методы append и prepend взаимозаменяемы, поэтому отработает то, где мы тег p вложили первым очерним элементом в элемент с id root

// ДОБАВЛЯЮТ РЯДОМ (ДО ИЛИ ПОСЛЕ)
// elem.before(tag);   // тег p добавился ДО блока div с id root
// elem.after(tag);   // тег p добавился ПОСЛЕ блока div с id root

// ЗАМЕНИМ ОДИН ЭЛЕМЕНТ ДРУГИМ
// elem.replaceWith(tag);  // заменили div#root на p


// let list = document.querySelector("ul");
// let newItem = document.createElement("li"); // <li></li>
// newItem.innerHTML = "Новый <i>элемент списка</i>";
// list.append(newItem);


// let i = 1;
// document.querySelector("#func2").addEventListener("click", add);
// document.querySelector("#func1").addEventListener("click", change);
// let list2 = document.querySelector("#list2");

// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water" + i;
//     list2.append(elem);
//     i++;
// }

// function change(){
//     document.querySelector("#list1").append(list2.lastChild);    // одна нода не может быть в 2 местах. Поэтому, они перемещается
// }


// let div = document.querySelector("#root");
// div.insertAdjacentHTML("beforebegin", "<p>До выбранного элемента</p>");
// div.insertAdjacentHTML("afterend", "<p>После выбранного элемента</p>");
// div.insertAdjacentHTML("afterbegin", "<p>Первым внутри выбранного элемента</p>");
// div.insertAdjacentHTML("beforeend", "<p>Последним внутри выбранного элемента</p>");


// let one = document.querySelector("#p1");
// // one.remove();   // удаляет выбранный элемент
// let two = document.querySelector("#p2");
// two.after(one);


// let ul = document.getElementsByTagName("ul")[0];
// let li = ul.cloneNode(true);    // true - разрешили клонировать дочерние элементы
// li.querySelector('li').innerHTML = "Начало клонируемых элементов";
// ul.after(li);


// let list = document.querySelector("ul.list");
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText("beforeend", "планет");

// list.insertAdjacentHTML("afterend", "<hr>");

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");  // <h4>Конец списка</h4>
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4);

// // бум удалять планеты
// let idRemove = setInterval(function() {
//     let li = document.querySelector("ul.list > li");
//     if(li == null){
//         clearInterval(idRemove);
//         // alert("Список удален");
//         list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>");
//     } else {
//         li.remove();
//     }
// }, 500);


// let spans = document.querySelectorAll(".remove-button");

// for(let i = 0; i < spans.length; i++){
//     spans[i].addEventListener("click", function(){
//         this.parentNode.remove();
//     });
// }


// let div = document.querySelector("div");
// div.className = 'alert';
// let activeDiv = document.querySelector(".active");
// // activeDiv.className = "hidden"; // свойство className заменяет тот класс, что был у элемента изначально. Чтобы использовать несколько классов можно применять свойство classList
// activeDiv.classList.add("hidden"); // добавляем класс hidden, не удаляя класс active
// // activeDiv.classList.remove("hidden");
// activeDiv.classList.toggle("hidden");   // метод toggle добавляет класс hidden, если его нет в свойстве classList. А если он там есть, то наоборот, удаляет
// activeDiv.classList.replace('active', 'alert');


// let frogImg = document.querySelector('#greenFrog');

// console.log(frogImg.id);
// console.log(frogImg.className);
// console.log(frogImg.src);
// console.log(frogImg.alt);
// console.log(frogImg.title);
// // console.log(frogImg.data-set);

// frogImg.title = 'Новый текст подсказки';
// console.log(frogImg.getAttribute('src'));
// console.log(frogImg.getAttribute('data-set'));
// frogImg.setAttribute('src', '4.jpg');
// frogImg.removeAttribute('data-set');
// console.log(frogImg.hasAttribute('src'));


// document.form1.style.background='silver';
// document.forms[0].style.padding = '16px';
// document.forms['form1'].style.border = '2px dotted gray';  // самый защищенный способ, т.к. обращаемся по конкретному атрибуту name, а не высчитываем какая форма на странице по счету


// document.form1.name1.style.color = 'blue';
// document.form1['name-1'].style.background = 'aqua';
// document.forms['form1']['name-1'].style.background = 'aqua';


// let txt = document.querySelector('#text1');
// let but = document.querySelector('button');
// but.addEventListener('click', content);
// function content(){
//     alert(txt.value);   // вводимое содержимое получаем через value из input
// }


// let choose = document.querySelector('input[type="button"]');
// choose.addEventListener('click', chooseColor);
// function chooseColor(){
//     document.body.style.background = document.form3.radio2.value;
// }


// let input = document.querySelectorAll('input[type="checkbox"]');

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('click', checkAll);
// }

// let numChecked;
// function checkAll(){
//     numChecked = 0;
//     for(let i = 0; i < input.length; i++){
//         if(input[i].checked){   // && input[i].type == "checkbox"
//             numChecked++;
//         }
//     }
//     if(numChecked == 3){
//         for(let i = 0; i < input.length; i++){
//             if(!input[i].checked){  // && input[i].type == "checkbox"
//                 input[i].disabled = true;
//             }
//         }
//     } else {
//         for(let i = 0; i < input.length; i++){
//             input[i].disabled = false;
//         }
//     }
//     console.log(numChecked);
// }


// let city = document.querySelector("#city");
// city.addEventListener('change', setImage);
// function setImage(){
//     let cities = city.selectedIndex;
//     let options = city.options;
//     let code = options[cities].value;
//     let div = document.querySelector('#image');
//     div.innerHTML = "<img src='img/" + code + ".png'>";
// }


// let gas = document.querySelectorAll('.petrol');
// for(let i = 0; i < gas.length; i++){
//     gas[i].addEventListener('click', function(){
//         let gallons = document.querySelector('.gallons').value;
//         let amount = this.getAttribute('data-get');
//         let res = gallons * amount;
//         let sum = document.querySelector('.sum');
//         sum.innerHTML = res;
//     });
// }


// Объекты

// let car = new Object();
// let car1 = {};

// let car = new Object();
// car["type"] = "BMW";
// car.color = "white";
// console.log(car);
// document.write(car.type + " " + car["color"]);



// let menu1 = {
//     "width": 300,
//     height: 200,
//     title: "Menu1"
// };
// console.log(menu1);
// document.write(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");
// delete menu.width;

// let menu = {};  // создали переменную и инициализировали ее пустым объектом
// menu["width"] = 300;
// menu.height = 200;
// menu.title = "Menu";
// console.log(menu);
// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");
// delete(menu.width);
// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// menu.age = 25;
// console.log(menu);

// for(let key in menu){
//     document.write("<br>Ключ = " + key + ", значение = " + menu[key]);
// }

// document.write("<br>Имена ключей: " + Object.keys(menu));
// document.write("<br>Всего свойств: " + Object.keys(menu).length);

// Object.keys(menu).forEach(function(key){
//     document.write("<br>" + menu[key]);
// });


// let obj = {
//     name: "Гомер",
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ], 
//     hello: function(){
//         document.write("Привет");
//     }
// }
// console.log(obj);
// document.write(obj.name + " " + obj.colors.second + " " + obj.color[2] + "<br>");
// obj.hello();    // ключ + скобки = вызов функции, которая является значением этого поля

// let fil = obj.color.filter(function(elem){
//     return elem.length < 5;
// });

// let fil1 = obj.color.filter(elem => elem.length < 5);
// document.write("<br>" + fil1 + "<br>");


// let mas = obj.color.map(function(elem, index, all){
//     return "color: " + elem + ", index: " + index + ", весь массив:" + all + "<br>";
// });

// let mas = Object.keys(obj.colors).map(function(elem, index, all){
//     return elem + ": " + obj.colors[elem] + "<br>";
// });
// document.write("<br>" + mas + "<br>");

// let mas1 = obj.color.map(elem => elem.toUpperCase());
// document.write("<br>" + mas1 + "<br>");


// let calc = {
//     num1: 5,
//     num2: 4,
//     calc: function(){
//         // this.res = this.num1 * this.num2;
//         calc.res = calc.num1 * calc.num2;
//     }
// }
// document.write(calc.num1 + "<br>");
// calc.calc();
// document.write(calc.res);


let x = 15, y = 10;

// let coords = {
//     x: x,
//     y: y,
//     calc: function(){
//         document.write(this.x * this.y);
//     }
// }
// coords.calc();

// let coords = {
//     x, y,
//     calc(){
//         document.write(this.x * this.y);
//     }
// }
// coords.calc();


/************************* Деструктуризация *************************/  

// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: 'pavlova'
//     },
//     passw: 'qwerty',
//     role: 'quest'
// }

// let r = user.role;
// document.write(r);

// let {login: {firstName: f, lastName: l}, passw, role} = user;
// let {login: {firstName: f, lastName: l}, ...rest} = user;
// document.write(f + " " + l + " " + rest.passw + " " + rest.role);


/******************* Деструктуризация массива ******************/

// let number = [3, 5, 7];
// document.write(number[1] + "<br>");
// let [, b, ] = number;
// document.write(b);


/******************* Функция-конструктор *******************/
// создание объектов в любых языках идет через классы, а в js через функции

// function Car(name, year){
//     this.name = name;
//     this.year = year;
// }

/****************************** Раньше чтобы создать метод, надо было оратиться к имени существующей функции-конструктора, указать prototype, придумать и указать название метода. Далее указать, что это функция и т.д. ******************************/
// Car.prototype.getAge = function(){
//     return new Date().getFullYear() - this.year;
// }
// Car.prototype.color = "black";

// let ford = new Car("Ford", 2019);
// console.log(ford);
// console.log(ford.getAge());

// let bmw = new Car("BMW", 2017);
// console.log(bmw.getAge());


// function Car(name, year){
//     this.name = name;
//     this.year = year;
//     this.getAge = function(){
//         return new Date().getFullYear() - this.year;
//     }
// }

// Car.prototype.color = "black";  

// let ford = new Car("Ford", 2019);
// console.log(ford);
// console.log(ford.getAge());

// let bmw = new Car("BMW", 2017);
// console.log(bmw.getAge());


// let form = document.form1;

// form.addEventListener('submit', event => {
//     event.preventDefault(); // отменяет поведение формы по-умолчанию

//     // теперь метод get отменен, но нам все равно нужно получить доступ к введенным значениям
//     let title1 = form.title.value;
//     let text1 = form.text.value;
//     let description1 = form.description.value;

//     // console.log(title, text);
//     saveForm({title2: title1, text2: text1, description2: description1}); // вызываем функцию, а в качестве аргумента создаем объект и ему задаем 2 свойства:
//     // ключ title2, которому присваиваем значение из переменной title1
//     // ключ text2, которому присваиваем значение из переменной text1 
//     // это можно заменить на saveForm({title, text}), если ключ и значение называются одинаково
// })

// function saveForm(data){ // функция принимает 1 аргумент, это будет наш объект
//     let {title2: title, text2: text, description2: description} = data;
//     let formData = {    // создаем объект formData с 3 свойствами
//         date: new Date().toLocaleDateString(),
//         // title, text, description
//         ...data
//     }
//     console.log("Form data: ", formData);
// }
 


// class User{
//     constructor(name){
//         this.name = name;   // name - Это свойства-данные (data properties)
//     }
//     // Гет и Сет в JS это не функции. Это свойства-аксессоры
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(value.length < 6){
//             alert("Имя слишком короткое");
//             return;
//         }
//         this._name = value; // с подчеркиванием чтобы это было незарезервированное имя, иначе ошибка
//     }
//     sayHi(){
//         document.write("Hello, " + this.name + "!");
//     }
// }

// let user = new User("Иван");
// user.name = "Максимильян";
// console.log(user.name);
// user.sayHi();

// user.sayHi();
// alert(typeof(User));    // покажет, что наш "класс" User - Это функция


// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         document.write(`${this.name} бежит с скоростью ${this.speed} км/ч.<br>`);
//     }
//     stop(){
//         this.speed = 0;
//         document.write(`${this.name} стоит.<br>`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide(){
//         document.write(`${this.name} прячется!<br>`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
//         console.log("Rabbit");
//     }
// }

// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();

// let rabbit = new Rabbit("Белый кролик", 10);
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
// document.write(rabbit.earLength);


// class Header{
//     constructor(img, h1, h2){
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = "";
//     }
//     render(id){
//         this.out = `
//             <img src="${this.src}" alt="logo">
//             <h1>${this.h1}</h1>
//             <h1>${this.h2}</h1>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// class HeaderExt extends Header{
//     constructor(img, h1, h2, tel){
//         super(img, h1, h2);
//         this.tel = tel;
//     }
//     get tel(){
//         return this._tel;
//     }
//     set tel(t){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(t)){
//             this._tel = t;
//         } 
//         else {
//             alert("Некорректный номер телефона");
//             return;
//         }
//     }
//     render(id){
//         super.render(id);
//         this.out += `
//             <h2>${this.tel}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-64.png";
// let header = new Header(img, "Заголовок", "Описание");
// header.render("header");

// let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/187_Js_logo_logos-64.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render("header2");

// let img3 = "https://cdn3.iconfinder.com/data/icons/file-extension-vol-1/48/Js_file_internet_extension-64.png";
// let header3 = new HeaderExt(img3, "Класс-наследник", "Описание наследника", "+7 901 555-55-55");
// header3.tel = "Hello";
// // header3.tel = "+7 333 987-54-53";
// header3.render("header-ext");



/******************************* JSON *******************************/
// JSON - объект всегда нужно преобразовывать в подобный тип данных независимо от ЯП. В Java это коллекция Map.



// let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

// console.log(info);

// let person = JSON.parse(info);  // JSON => JS

// console.log(person);

// person.first_name = "Петр";
// delete person.age;  // удаляем свойство
// person.work = "programmer";

// for(let i in person){
//     document.write(i + ": " + person[i] + "<br>");
// }


// Преобразуем наш объект в JSON-объект
// let personString = JSON.stringify(person);

// console.log(personString);


// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())    // JSON => JS
//       .then(json => console.log(json)); // json - это объект java script


// document.querySelector('#load').addEventListener('click', load);

// function load(){
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             let ul = document.querySelector('#list');
//             let html = data.map(function(item){
//                 return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
//             })
//             ul.insertAdjacentHTML("afterbegin", html.join(" "));
//         })
// }



let box = document.querySelector("div");
console.log(box.getBoundingClientRect().right);



      