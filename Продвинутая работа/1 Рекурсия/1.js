// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sum(n) {
  let res = 0;
  for (let i=0; i<=n; i++) {
    res +=i;
  }
  return res;
}

//old
function sum2(n) {
  return n==1 ? n : sum2(n-1)+n;
}

//new
function sumTo2(n) {
  let sum = 0;
  if (n > 1) {
    sum += n + sumTo2(n - 1)
  } else {
    sum = n;
  }
  return sum;
}

function sumTo3(n) {
  return (1 + n) / 2 * n;
}