function Dude(name, age, job){
    this.name = name,
    this.age = age,
    this.job = job,
    this.who = function(){
        return "Я " + name + " мне " + age + " лет. Я работаю " + job + "ом."
    }
}

let dima = new Dude("Дмитрий", 26, "Дизайнер");
let slava = new Dude("Станислав", 29, "Программист");
let sergey = new Dude("Сергей", 35, "Менеджер");

console.log(dima.who());
console.log(slava.who());
console.log(sergey.who());

