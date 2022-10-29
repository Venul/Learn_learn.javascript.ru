// Вывод односвязного списка
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.
function listshow(n) {
  for (let i = 0; i < 10; i++) {
    console.log(n.value);
    n = n.next;
    // if (n === null) return;
    if (n) return;
  }
}

function listshow2(n) {
  let tmp = n;
  do {
    console.log(tmp.value);
    tmp = tmp.next;
  } while (tmp)
}

function listshow3(n) {
  if (n) {
    console.log(n.value);
    listshow3(n.next);
  } else {
    return;
  }
}

function printList(list) {

  console.log(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}

//new

function printList2(list) {
  let lt = list;
  while (lt) {
    console.log(lt.value);
    lt = lt.next;
  }
}

function printList3(lt) {
  console.log(lt.value);
  if (lt.next) {
    printList3(lt.next);
  }
}




let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// listshow(list);
// listshow2(list);
// listshow3(list);

printList(list);