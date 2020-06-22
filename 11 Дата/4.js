// Какой день месяца был много дней назад ?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days = 365 и больших значениях:

function getDateAgo(date, days) {
  let newDate = new Date(date);
  //клонируем значение по условию задачи
  newDate.setDate(newDate.getDate() - days);
  // сперва нужно засетить значение, для корректной работы
  return newDate.getDate();
}

