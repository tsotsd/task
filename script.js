



// // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// // а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond();
// setTimeout(() => {
//     sayHi('Глеб') 
// }, 2000);



// function delayForSecond(callback) {
//   setTimeout(() => {
//   callback()}, 1000);
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })




// const timer = (deadline) => {
  
//     let time = new Date();
  
//     const interval = setInterval(() => {
//         console.log(time);
//     }, 3000)

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('time off');
//     }, deadline * 9000)
// }

// timer(3);


// const timer = (deadline) => {
//     const interval = setInterval(() => {
//         let currentDate = new Date();
//      console.log(currentDate);
//      }, 3000);
    
    
//      setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//       }, deadline * 1000)
//     };
    
//     timer(30);


// function isPositive(number) {
//     if (number > 0) {
//         return number;
//     }
// }
// function isMale(whoIS) {
//     if (whoIS.gender == 'male') {
//         return whoIS;
//     }
// }
// function filter(arr, ruleFunction) {
//     console.log(ruleFunction);
//     for (let i = 0; i < arr.length; i++) {
//         return arr.filter(ruleFunction);
//     }
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', g






// function isPositive(number) {
//     if (number > 0) {
//         return number;
//     }
// }
// function isMale(whoIS) {
//     if (whoIS.gender == 'male') {
//         return whoIS;
//     }
// }
// function filter(arr, ruleFunction) {
//     for (let i = 0; i < arr.length; i++) {
//     return arr.filter(ruleFunction);

//     }
// }
// console.log(filter([3, -4, 1, 9], isPositive));
// const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
// ];
// console.log(filter(people, isMale));