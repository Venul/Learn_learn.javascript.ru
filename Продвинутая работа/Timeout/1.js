// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.


//new
function timer(from, to) {
  let time = (to - from + 1) * 1000;

  let timerId = setInterval(() => alert(from++), 1000);
  setTimeout(() => { clearInterval(timerId) }, time);
}

function timer2(from,to) {
  setTimeout(function run() {
    if (from-1 != to) {
    alert(from);
    from++;
    setTimeout(run, 1000);
    }
  }, 1000);
}

//book

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);

function printNumbers2(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers2(5, 10);