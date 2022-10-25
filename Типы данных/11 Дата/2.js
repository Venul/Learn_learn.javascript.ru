// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком 
// : «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».


//book
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date) ); // ПТ


//new
function getWeekDay(date) {
  switch (date.getDay()) {
    case 0: 
    return 'ВС'
    break;
  }
//..other days
}