// function greeting() { // Функция выводит приветственное сообщение
//     console.log('Hello, dear friend!');
//   }
  
//   function printFrame(call) { // callback — это имя параметра
//       console.log('–––––––––––start–––––––––––'); // Код до функции callback
//       // Здесь может быть более полезный код
//     call(); // Здесь мы вызываем функцию, переданную в качестве параметра
//       console.log('–––––––––––end–––––––––––'); // Код после функции callback
//       // Здесь может быть более полезный код
//   }
  
//   printFrame(greeting); // В функцию printFrame в качестве параметра
//   // передаем другую функцию greeting, обратите внимание, мы передаем ф-цию greeting
//   // без круглых скобок, только имя функции.
//   // В консоли получим
  /*
  –––––––––––start–––––––––––
  Hello, dear friend!
  –––––––––––end–––––––––––
  */

// const timer = (deadline) => {
//   if (isNaN(+deadline)) {
//     console.log("not a number");
//     return;
//   }
//   time = deadline;
//   console.log(time);
//   const interval = setInterval(() => {
//     time -= 1;
//     console.log(time);
//   }, 1000);
  
//   setTimeout(() => {
//     clearInterval(interval)
//     console.log('time off');
// }, deadline * 1000)


// };

// timer(3);

// const timer = (deadline) => {
//     if (isNaN(+deadline)) {
//         console.log('Not a number');
//         return;
//     }
//     let time = deadline;
//     console.log(deadline);
//     const interval = setInterval(() => {
//     time -= 1;
//     console.log(time);
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(interval);
//     console.log('Time off!');
//   }, deadline * 1000)
// };
// const deadline = prompt('timer')
// timer('5');

// let delay = 5000;

// let timerId = setTimeout(function request() {

//   if (ошибка запроса из-за перегрузки сервера) {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

// /** вместо:
// let timerId = setInterval(() => alert('tick'), 2000);
// */

// let timerId = setTimeout(function tick() {
//     alert('tick');

//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);
// setTimeout(() => { clearInterval(timerId); alert('stop'); alert('dsf')}, 5000);

// let timerId = setTimeout(() => console.log("ничего не происходит"), 3000);
// console.log(timerId); // идентификатор таймера

// clearTimeout(timerId);

// function copyArrayAndDoSmth(arr, instruction) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(instruction(arr[i]));
//     }
//     return output;
// }

// function numSquared(num, num2, num3) {
//     return num + num2 + num3;
// }

// const result = copyArrayAndDoSmth([2, 3, 4], (item) => { return numSquared(item, 10, 5)});

// console.log(result);

// function add(number1, number2) {
//     return number1 + number2;
//   }

//   function map(arr, ruleFunction) {
//     const output = [];

//     // Добавил консоль лог для отладки
//     console.log("ruleFunction", ruleFunction);

//     for (let i = 0; i < arr.length; i++) {
//       output.push(ruleFunction(arr[i]));
//     }
//       return output;
//   }
//   // Функция map вызывает колбэк с одним аргументом, получается вызов add(arr[i]),
//   // Такой вызов вернет NaN, потому что попытается сложить число с undefined

//  // console.log(map([1, 4, 9, 16], add)); // => [ NaN, NaN, NaN, NaN ]

//   // Добавим функцию-обертку, которая «синхронизирует» функцию add с колбэком, который ожидает map-функция
// console.log(map([1, 4, 9, 16], (item) => {return add(10, item);
//   })
// ); // => [ 11, 14, 19, 26 ]
