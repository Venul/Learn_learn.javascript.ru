
//Вывести простые числа
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...
  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i); // простое число
}


//Функция возведения в степень
function pow(x, n) {
let result = x;
for (let i = 1; i < n; i++) {
  result *= x;
}
return result;
}				


//Проверка конкретного свойства в объекте
//Также существует специальный оператор "in" для проверки существования свойства в объекте.

//Синтаксис оператора:
"key" in object
let user = {};

alert(user.noSuchProperty === undefined); // true означает ""свойства нет"""				


//Пустой объект
function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}				


//Отличие var и let
console.log(x);
console.log(y)
var x = 42;
let y = 38;
//что будет в консоли?
// а будет undefined и error!			


//Возможно ли создать функции A и B в примере ниже, 
//где объекты равны new A() == new B() ?
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true


/*Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
getMaxSubSum([-1, -2, -3]) = 0

Идём по массиву и накапливаем текущую частичную сумму элементов в переменной s.Если s в какой - то момент становится отрицательной – присваиваем s = 0. Максимальный из всех s и будет ответом.
Если объяснение недостаточно понятно, посмотрите на код, он вполне лаконичен:
*/
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива				
    partialSum += item; // добавляем значение элемента к partialSum				
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент				
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное				
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5				
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11				
alert(getMaxSubSum([-2, -1, 1, 2])); // 3				
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100				
alert(getMaxSubSum([1, 2, 3])); // 6				
alert(getMaxSubSum([-1, -2, -3])); // 0				
//Этот алгоритм требует ровно 1 проход по массиву и его оценка сложности O(n).


// input:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// output:
// A4B3C2XYZD4E3F3A6B28
// ....,,,,!!!!!!!
// .4,4!6
// 111122233AAAA
// 142332A4

function rle(input) {
  if (typeof input !== 'string') {
    throw new Error('Input is not string');
  }
  if (input.length == 0) return '';

  let res = [];
  let arr = input.split('');
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // arr[0] == 'B'
    if (!isNaN(+arr[i])) {
      throw new Error('There is number');
    }
  };

  res.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      if (count) res.push(count + 1);
      res.push(arr[i + 1]);
      count = 0;
    }
  }
  return res.join('');
}