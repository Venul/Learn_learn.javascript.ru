// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести 
// "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
//  А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, 
//  т.е. 31.12.16 10:00.



function formatDate(date) {
const curDate = new Date();
debugger
let newDate = new Date(curDate - date);
const getSeconds = newDate.getTime()/1000;

if (getSeconds<=1) {
  return "прямо сейчас";
} else if (getSeconds <= 60) {
  return `${Math.round(getSeconds)} сек. назад`
} else if (getSeconds <= 3600) {
  return `${Math.round(getSeconds/60)} минут назад`
} else {
  return 'test'
}
}

formatDate(new Date(new Date - 5 * 60 * 1000))