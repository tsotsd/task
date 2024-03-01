function add(number1, number2) {
    return number1 + number2;
  }
  
  function map(arr, ruleFunction) {
    const output = [];
  
    // Добавил консоль лог для отладки
    console.log("ruleFunction", ruleFunction);
  
    for (let i = 0; i < arr.length; i++) {
      output.push(ruleFunction(arr[i]));
    }
  
    return output;
  }
  
  // Добавим функцию-обертку, которая «синхронизирует» функцию add с колбэком, который ожидает map-функция
  console.log(map([1, 4, 9, 16], (item) => {return add(10, item);})); // => [ 11, 14, 19, 26 ]

// // ------------------------------
// // const people = [
// //     { name: 'Глеб', age: 29 },
// //     { name: 'Анна', age: 17 },
// //     { name: 'Олег', age: 7 },
// //     { name: 'Оксана', age: 47 }
// //  ];
 
//  // Допишите колбэк для sort, изучите, как работает колбэк, в документации
//  console.log(people.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1;
        
//     }
//     if (a.age < b.age) {
//         return -1;
//     }

//     return 0;
//  }));
//  // код выше должен вывеcти =>
//  // [
//  //  { name: 'Олег', age: 7 },
//  //  { name: 'Анна', age: 17 },
//  //  { name: 'Глеб', age: 29 },
//  //  { name: 'Оксана', age: 47 }
//  // ]