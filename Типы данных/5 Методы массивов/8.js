// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.

let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 }
let petya = { name: 'Петя', surname: 'Иванов', id: 2 }
let masha = { name: 'Маша', surname: 'Петрова', id: 3 }

let users = [vasya, petya, masha]

//old
let usersMapped = [];
for (let i=0; i<users.length; i++) {
  usersMapped[i] = {};
  usersMapped[i].fullName = users[i].name + " " + users[i].surname;
  usersMapped[i].id = users[i].id;
}

// new
usersMapped = users.map(item => {
  return { 
      fullname: item.name + ' ' + item.surname, 
      // fullName: `${user.name} ${user.surname}`, //book
      id: item.id 
  }
})

console.log(usersMapped)