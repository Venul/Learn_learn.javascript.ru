// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S.Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ / значение.

function topSalary(salaries) {
  let mostSalary = (Math.max.apply(Math, Object.values(salaries)));
  return (Object.keys(salaries).find(key => salaries[key] === mostSalary)) || null;
}



function topSalary(salaries) {
  let mostSalary = 0;
  let namePerson;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > mostSalary) {
      mostSalary = value;
      namePerson = key;
    } // name:John, затем age:30
  }
  return namePerson || null;
}