

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