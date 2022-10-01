//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём
//элементы между a и b и отдаёт массив этих элементов.

//old
let filterRange = (arr, a, b) => {
    let str = [];
    for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) str.push(arr[i]);
    }
    return str;
}

//new
function filterRange(arr, min, max) {
    const newArr = [];
    for (let key in arr) {
      if(arr[key]>=min && arr[key] <=max) newArr.push(arr[key]);
    }
  
    return newArr;
  
  }

//book
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}