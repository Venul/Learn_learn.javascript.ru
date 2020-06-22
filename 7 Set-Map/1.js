//Фильтрация уникальных элементов массива
function unique (arr) {
  let set = new Set(arr);
  let res = [];
for (let user of set) {
   res.push(user);
}
  return res;
  // return Array.from(new Set(arr));
}