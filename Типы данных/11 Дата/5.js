// Последнее число месяца ?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.Иногда это 30, 31 или даже февральские 28 / 29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29(високосный год, февраль).

//old
function getLastDayOfMonth(year, month) {
  const resDate = new Date(year, month);
  resDate.setMonth(month + 1);
  // берем следующий месяц
  resDate.setDate(resDate.getDate() - 1);
  // отнимаем один день
  return resDate.getDate();
}

//new
function getLastDayOfMonth(year, mth) {
  let newDate = new Date(year,mth+1,1);
    newDate.setDate(newDate.getDate() - 1);
  return newDate.getDate();
}

//book
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// Обычно даты начинаются с 1, но технически возможно передать любое число, и дата сама себя поправит.
// Так что если передать 0, то это значение будет соответствовать «один день перед первым числом месяца», 
// другими словами: «последнее число прошлого месяца».