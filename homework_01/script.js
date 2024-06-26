let num = 39671, num2 = num;

/* Считаем сколько знаков в числе */
let counter = 0;
while(num2 != 0){
    num2 = parseInt(num2 / 10);
    counter++; 
}

/* Произведение цифр */
let x;
let multiply = 1;
for(let i = counter, a = Math.pow(10, counter-1); i != 0; i--, a /= 10){
    multiply *= parseInt(num / a) % 10;
}
console.log("Произведение цифр: " + multiply);

/* Среднее арифметическое */
let average = 0;
for(let i = counter, a = Math.pow(10, counter-1); i != 0; i--, a /= 10){
    average += parseInt(num / a) % 10;
}
average /= counter;
console.log("Среднее арифметическое: " + average);
