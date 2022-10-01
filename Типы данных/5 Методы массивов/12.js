// Оставить уникальные элементы массива
// Пусть arr – массив строк. Напишите функцию unique(arr), которая возвращает 
// массив, содержащий только уникальные элементы arr.


//old
function unique (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])) {
        res.push(arr[i])
      }
    }
    return res
}

 //mew - book
 function unique(arr) {
  const newArr = [];
  for (let key in arr) {
    if (!newArr.includes(arr[key])) {
      newArr.push(arr[key])
    }
  }

  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));  