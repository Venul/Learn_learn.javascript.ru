// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sum(n) {
  let res = 0;
  for (let i=0; i<=n; i++) {
    res +=i;
  }
  return res;
}

function sum2(n) {
  return n==1 ? n : sum2(n-1)+n;
}

function sum3(n) {
 return (n*(n+1))/2;
}


console.log(sum(10000));
console.log(sum2(10000));
console.log(sum3(10000));