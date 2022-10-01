/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает
случайным образом) элементы массива.
Все последовательности элементов должны иметь одинаковую вероятность. 
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или 
[3,1,2] и т.д., с равной вероятностью каждого случая.*/


let array = [1, 2, 3];

//old
function shuffle (arr) {
  let newArr = [];
  let getRand;
  for (let i = 0; i < arr.length; i++) {
    getRand = randomInteger(0, arr.length - 1);
    if (newArr.includes(arr[getRand])) {
      i--;
    } else {
      newArr.push(arr[getRand]);
    }
  }
  return newArr;
}

function randomInteger (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//new
// второй массив не нужен, решил также как раньше
function shuffle(array) {
  let min = 0;
  let max = array.length-1;
  
    let newArr2 = [];
    let newArr = [];
  
    for (let i = 0; i<array.length; i++) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    let randElem = Math.round(rand);
    if (newArr2.includes(randElem)) {
      i--;
      continue;
    }
      newArr.push(array[randElem]);
      newArr2.push(randElem);
    }
    return newArr;
  }

console.log(shuffle(array));

// Мое решение работает правильно

//=============================================================

// Есть и другие хорошие способы решить эту задачу. Например, есть 
// отличный алгоритм под названием Тасование Фишера — Йетса. Суть заключается 
// в том, чтобы проходить по массиву в обратном порядке и менять местами каждый
// элемент со случайным элементом, который находится перед ним.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}