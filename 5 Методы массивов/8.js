// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.

let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 }
let petya = { name: 'Петя', surname: 'Иванов', id: 2 }
let masha = { name: 'Маша', surname: 'Петрова', id: 3 }

let users = [vasya, petya, masha]

let usersMapped = users.map(item => {
  return { 
      fullname: item.name + ' ' + item.surname, 
      // fullName: `${user.name} ${user.surname}`,
      id: item.id 
  }
})

// let usersMapped = [];
// for (let i=0; i<users.length; i++) {
//   usersMapped[i] = {};
//   usersMapped[i].fullName = users[i].name + " " + users[i].surname;
//   usersMapped[i].id = users[i].id;
// }

console.log(usersMapped)