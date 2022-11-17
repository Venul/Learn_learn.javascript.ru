//book
function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

function printReverseList2(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

//new
function printList4(list) {
  let lt = list;
  const arr = [];
  while (lt) {
    arr.push(lt.value);
    lt = lt.next;
  }
  arr.reverse().map(item => alert(item))
}


function printList5(lt) {
  if (lt.next) {
    printList5(lt.next);
  }
  alert(lt.value);
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

printReverseList(list);
printReverseList2(list);