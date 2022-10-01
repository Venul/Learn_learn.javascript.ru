// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со 
// свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

//old new
let sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age );
    // arr.sort((a, b) => a.age > b.age ? 1 : -1);    --book
}

sortByAge(arr);

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя