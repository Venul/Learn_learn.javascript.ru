// Вычислить факториал
function f(n) {
  return n==1 ? n : f(n-1)*n;
  // return n ? n * factorial(n - 1) : 1;
}

//new
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
