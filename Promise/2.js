// Задержка на промисах
// Встроенная функция setTimeout использует колбэк - функции.Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
// так чтобы мы могли добавить к нему.then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));



//my
function delay(ms) {
  return new Promise (function (resolve, reject){
    setTimeout(() => resolve(2), ms);
  })
}

//book
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
