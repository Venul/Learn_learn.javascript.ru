// Отфильтруйте анаграммы
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

function aclean(arr) {
  let arrWords = [];
  let result = [];
  let arrInLowCase,
    objFromNewArray,
    arrOfCharsFromItems;
  for (let i = 0; i < arr.length; i++) {
    arrOfCharsFromItems = arr[i].split('');
    // разбиваем по буквам
    arrInLowCase = arrOfCharsFromItems.map(item => item.toLowerCase());
    // делаем каждую большой
    arrInLowCase.sort();
    // сортировка
    objFromNewArray = arrInLowCase.join('');
    // склейка 
    arrWords.push(objFromNewArray);
    // новый массив
  }
  let set = new Set(arrWords);
  for (let value of set) result.push(value);
  // пушим только не повторы
  console.log(result.length);
  // Минус: возвращает отсортированные по буквам слова, вместо исходных
  return result;
}

// *******************************************
function aclean2(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    //sorted нужен, как ключ объекта. По нему сохраняется последнее значение
    // в новый объект   
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean2(arr));


// *******************************************
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    //как и в примере выше, собираем объект по ключу осортированного значени
    map.set(sorted, word);
  }

  return Array.from(map.values());
}