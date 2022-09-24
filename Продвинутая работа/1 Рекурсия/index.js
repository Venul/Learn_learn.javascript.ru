//--Арифм. прогрессия--

function sumTo(arg) {
    let result = 0;
    for (let i=0; i<=arg; i++) {
        result +=i;
    }
    return result;
}

function sumTo2(arg) {
    if (arg != 1) {
        return arg + sumTo2(arg-1);
    } else {
        return arg;
    }
}

function sumTo3(arg) {
    return (arg*(arg+1))/2;
}

// console.log(sumTo(100));

//--Факториал--

function factorial(arg) {
    if (arg != 1) {
        return arg * factorial(arg-1);
    } else {
        return 1;
    }
}

// console.log(factorial(5));


//--Фибоначчи--

function fib(n) {
    if (n >= 1) {
        return fib(n-1) + fib(n-2);
    } else {
        return 1;
    }
}

console.log(fib(3));

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   alert( fib(77) ); // 5527939700884757
//   Цикл здесь начинается с i=3, так как первое и второе числа Фибоначчи заранее записаны в переменные a=1, b=1.