// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

//old
arr.sort( (a, b) => b - a );
// поменял b-a
alert( arr ); 

//new
console.log(arr.sort((a, b) => a - b).reverse())