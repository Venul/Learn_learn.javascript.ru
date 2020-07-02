// Числа Фибоначчи
function fib(n) {
  return (n==1 || n==2) ? 1 : fib(n-1) + fib(n-2);
}

// console.log(fib(77))

function fib2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib2(77))