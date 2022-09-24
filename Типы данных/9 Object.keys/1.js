// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

function sumSalaries(obj) {
  let res = 0;
  for (let value of Object.values(obj)) {
    res += value;
  }
  return res;
}