// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function getDate(date) {
    
//     let fullDate = "Дата:" + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' +
//                         + date.getFullYear() + " - это" + ' ' + days[date.getDay()];
                       
//     let fullTime = 'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
//     return (`${fullDate}\n${fullTime}`)

// }


// let myDate = new Date();
// const formatDate = getDate(myDate)

// console.log(formatDate);



// let currentDate = new Date();
// console.log(currentDate);
// currentDate.setDate(73);
// console.log(currentDate);

// let futureDays73 = 3 * 24 * 60 * 60 * 1000;
// console.log(futureDays73);

// let searchDate = currentDate - futureDays73;
// console.log(searchDate);
// let futureDay73 = (new Date(searchDate));

// console.log(futureDay73);



// let myDate = new Date(); // получаем текущую дату
// console.log(+myDate); // 1674177444332, + преобразует дату в миллисекунды
// // теперь нам нужно узнать, какая дата была, к примеру, 20 дней назад
// let days20 = 20 * 24 * 60 * 60 * 1000; // переводим дни в миллисекунды
// // 20 дней * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд = 1 728 000 000 миллисек
// let searchDate = myDate + days20; // получаем колличество миллисекунд, текущая дата — 20 дней
// let daysAgo20 = new Date(searchDate); // дата 20 дней назад
// console.log(daysAgo20); // Sat Dec 31 2022 04:17:24 GMT+03:00 (Москва, стандартное время)









// let myDate = new Date();
// console.log(+myDate);

// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue-minValue) + minValue)
// }

// console.log(getRandomInt(1,19));




// function getRandomArrNumbers(num) {
// const arr = [];
// for (let index = 0; index < Math.floor(num / 2); index++) {
//     arr.push(Math.round(Math.random() * num));
// }
// return arr;
// }

// console.log(getRandomArrNumbers(12));

// function getRandomArrNumbers(number) {
//     let arr = [];
//     number = Math.floor(Math.random(number % 2));
//     console.log(number);
//     if (number) {
//        return arr.push(Math.floor(Math.random(number % 2)));
//     }
// }

// console.log(getRandomArrNumbers(7));

// function randomNumber() {
//     return Math.round(Math.random() * 10);
// }

// console.log(randomNumber());

// console.log(Math.min(52, 53, 49, 77, 21, 32));

// let number = 32.58884;
// number = Math.floor(number);
// console.log(number);

// const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';

// products.forEach((product) => {
// 	// проходимся по массиву products и проверяем каждый элемент на наличие
// 	// подстроки 'молоко' в начале названия, не забыв привести элемент и
// 	// искомую подстроку к одному регистру
// 	if (product.toLowerCase().startsWith(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });

// function searchStart(array, str) {
//     let arr = [];
//     for (el of array) {
//         console.log(el);
//         let element = el.toLowerCase().startsWith(str.toLowerCase())
//         element ? arr.push(el.toLowerCase()) : el;
//     }
//     return arr;
// }

// console.log(searchStart(['Кимар', 'Кипр', 'Кошка', 'Кит', 'Комар'], 'ки' ));

// function searchStart(array, str) {
//     const arr = [];
//     array.forEach((element) => {
//         if (element.toLowerCase().startsWith(str.toLowerCase())) {
//             arr.push(element.toLowerCase());
//         }
//     });
// }

// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру' )); // ['груша']);

// let str = 'abcdefg';
// srt = str.toUpperCase();
// console.log(srt);

// let currentDate = new Date();

// console.log(currentDate.toLocaleTimeString('ru-RU'));

// let regexp = /[A-Z]*/;
// console.log(regexp.test('выражение')); // true
// regexp.test('word'); // true
// regexp.test('Read'); // true

// const arrText = [
//     'Пункт1. Описание пункта',
//     'Заголовок1. Описание',
//     'Пункт2. Описание пункта',
//     'Заголовок2. Описание',
// ]; // массив с размеченным текстом

// let title = prompt('Вы хотите прочитать заголовки или пункты?'); // ожидаем
// // ввод пользователя 'Заголовок' или ' Пункт'

// // let regexp = `/${title}/`; // если попыться создать регулярное выражение через /.../
// // и передать title, то в этом случае получим обычную строку
// // console.log(regexp);
// // let regexp = /`${title}`/; // в этом случае получим регулярное выражение, но
// // оно будет выглядеть как /`${title}`/, т. е. значение title не передастся

// let regexp = new RegExp(`${title}`); // используя такую запись создания регулярного
// // выражения, мы получим то, что хотим. Например, при вводе 'Пункт' мы получим регулярное
// // выражение /Пункт/

// arrText.forEach((el) => {
//     if (regexp.test(el)) { // если есть совпадения с регулярным выражением,
//         console.log(el);  // то выводим этот элемент
//     }
// });
// let xp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
// let name = prompt('Введите ваше имя. Используйте только кириллические символы');

// if (xp.test(name)) {
// 	alert('Ваше имя сохранено');
// } else {
// 	alert('Введены некорректные символы');
// }

// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция', 'Молоко Груша'];
// const search = 'молоко';

// products.forEach((product) => {
// 	// проходимся по массиву products и проверяем каждый элемент на наличие
// 	// подстроки 'молоко' в начале названия, не забыв привести элемент и
// 	// искомую подстроку к одному регистру
// 	if (product.toLowerCase().startsWith(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });
// в результате будет выведено 'Молоко Молочник'

// const answerUser = prompt('question');

// if (answerUser.toLowerCase === 'yes') {
//     console.log('yes');
// } else {
//     console.log('no');
// }
