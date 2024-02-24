// const getMonth = () => {
// let userEnter = +prompt('enter seasons');
//     switch (userEnter) {
//         case 1:
//             console.log('winter');
//             break;
//         case 2:
//             console.log('winter');
//             break;
//         case 12:
//             console.log('winter');
//             break;
//         case 3:
//             console.log('spring');
//             break;
//         case 4:
//             console.log('spring');
//             break;
//         case 5:
//             console.log('spring');
//             break;
//         case 6:
//             console.log('summer');
//             break;
//         case 7:
//             console.log('summer');
//             break;
//         case 8:
//             console.log('summer');
//             break;
//         case 9:
//             console.log('autumn');
//             break;
//         case 10:
//             console.log('autumn');
//             break;
//         case 11:
//             console.log('autumn');
//             break;
//         default: console.log('enter from 1 to 12');
//             break;
//     }
// }

// getMonth();

// function getArea() {
//     return Math.PI * this.radius ** 2;
// }

// function getPerimetr() {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 5,
//     getArea: getArea,
//     getPerimetr: getPerimetr,
// }

// const circle2 = {
//     radius: 4,
//     getArea: getArea,
//     getPerimetr: getPerimetr,
// }

// console.log(circle1.getArea())
// console.log(circle1.getPerimetr());
// console.log(circle2.getArea())
// console.log(circle2.getPerimetr());



// const cube = () => {
//     let number = +prompt('enter number');
//     if (isNaN(number)) {
//         console.log('value is not a number');
//     } else {
//         console.log(`${number} in cube equals ${number **3}`);
//     }
// }
// cube();

// function calcMult() {
//     let first = +prompt('enter the first number');
//     let second = +prompt('enter the second number');

//     if (isNaN(first) || isNaN(second)) {
//         alert('One or both values are not a number');
//     } else {
//         alert (first * second);
//     }
// }

//calcMult();

// const askUser = () => {
//     let question = +prompt('Сколько тебе лет', 'year');
//     if (question < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (question < 13) {
//         console.log('Привет, друг!');
//     } else {
//         console.log('Добро пожаловать!');
//     }
// }
// askUser();

// const square = (number) => {
//     let getSquare = number ** 2;
//     return getSquare;
// }
// console.log(square(5));


// const square = (number) => {
//     return console.log(number ** 2);
// }

// square(5);

// const evenOdd = (number) => {
//     return number % 2 === 0 ? "Четное" : "Нечетное";
// }
// console.log(evenOdd(567890));


// const min = (a, b) => {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(500, 400));