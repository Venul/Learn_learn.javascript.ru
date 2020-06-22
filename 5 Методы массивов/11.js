// Напишите функцию getAverageAge(users), которая принимает массив 
// объектов со свойством age и возвращает средний возраст.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];


function getAverageAge(arr) {
let result = arr.reduce((sum, current) => sum + current.age, 0);
return result/arr.length;
}
console.log( getAverageAge(arr) );