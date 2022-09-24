// Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое(integer) число от min до max(включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.


function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}