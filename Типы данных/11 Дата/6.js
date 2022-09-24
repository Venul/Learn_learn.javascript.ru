// Сколько сегодня прошло секунд ?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10: 00, и не было перехода на зимнее / летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е.в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let startDate = new Date (year, month, day);

  let res = Math.round((date-startDate)/1000);

  return res;
}

getSecondsToday();
