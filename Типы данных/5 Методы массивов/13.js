let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


//new
function groupById (arr) {
  let newObj = {};
  for (let key in arr) {
     newObj[arr[key].id] =arr[key];
  }
  return newObj;
}

console.log(usersById[0])

//book
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}