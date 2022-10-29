// Числа Фибоначчи
//book
function fib(n) {
  return (n==1 || n==2) ? 1 : fib(n-1) + fib(n-2);
}

//new
function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

//book
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

//new
function fib2(n) {
  //золотое сечение
  const fi = (1 + Math.sqrt(5)) / 2;
  return (Math.pow(fi, n) - Math.pow(-fi, -n)) / (2 * fi - 1);
}

// console.log(fib(77))