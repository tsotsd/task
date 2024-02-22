const user = {
    name: 'Alex',
    age: 25,
    isAdmin: true,
    'city of residence': 'Moscow'
}


user.age = 30;
delete user['city of residence'];

console.log(user);