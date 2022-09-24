// Оставить уникальные элементы массива
// Пусть arr – массив строк. Напишите функцию unique(arr), которая возвращает 
// массив, содержащий только уникальные элементы arr.

function unique (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])) {
        res.push(arr[i])
      }
    }
  
    //   for (let str of arr) {
    //     if (!result.includes(str)) {
    //       result.push(str);
    //     }
    //   }
    return res
}

let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));  