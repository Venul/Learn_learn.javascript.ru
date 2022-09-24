// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
  let sum = 0;
  let max = 0;
  for (let key of arr) {
    sum +=key;
    if (sum<0) {
     sum = 0;
      continue;
    }
    if (max<sum) {
      max = sum;
    }
  }
  return max;
}



getMaxSubSum([-1, 2, 3, -9, 11])