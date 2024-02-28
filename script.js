

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
