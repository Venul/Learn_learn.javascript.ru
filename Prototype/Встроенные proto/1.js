// Добавить функциям метод "f.defer(ms)"
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

// function f() {
//   alert("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 


//new
Function.prototype.defer = function (x) { const me = this; setTimeout(me, x)}

//book
Function.prototype.defer = function (x) { setTimeout(this, x)}