// Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35
};


var json = JSON.stringify(user);
console.log(json);

var json2 = JSON.parse(json);
console.log(json2);