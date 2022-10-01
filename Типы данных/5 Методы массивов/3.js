// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет
//  из него все значения кроме тех, которые находятся между a и b.
//  То есть, проверка имеет вид a ≤ arr[i] ≤ b.

let filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (a <= arr[i] && arr[i] >= b) {
      arr.splice(i, 1);
      i--;
    }
  }
}


