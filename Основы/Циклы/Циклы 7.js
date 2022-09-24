function el2() {
  for (let i = 2; i < 10; i++) {
    outher: for (let j = 2; j <= i; j++) {
      if (i % j !== 0) continue;
      if (i % j === 0 && i !== j) {
        break outher;
      } else {
        console.log(i);
      }
    }
  }
}

// из книги
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i); // простое число
}