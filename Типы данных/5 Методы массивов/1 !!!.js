// Напишите функцию camelize(str), которая преобразует строки вида 
// «my-short-string» в «myShortString».

function camelize(str) {
  let arr = str.split('-');
  //массив, убрали разделитель
  for (let i=1; i<arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    // первая большая + вторая часть массива
  }
  return arr.join('');
// склеили
}

function camelize (str) {
  const arr = str.split('');
  
  let findKey = arr.findIndex(item => item ==='-')
  
  while ( findKey != -1) {
    arr[findKey+1] = arr[findKey+1].toUpperCase();
    arr.splice(findKey,1);
    findKey = arr.findIndex(item => item ==='-')
  }
  
  return console.log(arr.join(''))

}
// .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
// .map(
//   // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//   // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//   (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// )
// .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'}