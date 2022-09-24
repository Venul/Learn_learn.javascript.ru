// Вычислить факториал
function f(n) {
  return n==1 ? n : f(n-1)*n;
  // return n ? n * factorial(n - 1) : 1;
}

console.log(f(1))