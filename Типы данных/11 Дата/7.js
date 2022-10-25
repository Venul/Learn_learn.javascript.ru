// Сколько секунд осталось до завтра ?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23: 00, то:
// getSecondsToTomorrow() == 3600
// P.S.Функция должна работать в любой день, т.е.в ней не должно быть конкретного значения сегодняшней даты.

//old
function getSecondsToTomorrow() {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  // получил дату, обнулил время
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  let today = new Date();

  let res = Math.round((date - today) / 1000);
  return res;
}

//new
function getSecondsToTomorrow() {
  const oldDate = new Date();
    let curDate = new Date();
    curDate.setDate(oldDate.getDate()+1);
    curDate.setHours(0,0,0);
    return Math.floor((curDate-oldDate)/1000)
}

//book
function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}

getSecondsToTomorrow();