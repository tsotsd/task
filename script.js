

// let arr = [9, 8, 7, 6, 5];
// function mystery(arr) {
// let answer = +prompt('Угадайте число спрятанное в массиве');

// for (let index = 0; index < arr.length; index++) {
// 	if (arr[index] === answer) {
// 		return alert('Угадал');
// 		} 
// 	}
// 		alert('Не угадал');
// }	
// mystery(arr);

// const array = [9, 8, 7, 6, 5];

// function guess(array) {
// let userGuess = +prompt('Guess the number');

// for (let i = 0; i < array.length; i++) {
//    if (array[i] === userGuess) {
//      return alert('guessed right');
//    } 
// }
//     alert('did not guess');
// }

//    guess(array);

// array.forEach(element => {
//     userGuess == element ? alert('guessed right') : alert('did not guess')
// });

// const array = [9, 8, 7, 'a', 6, 5];
// array.sort();
// console.log(array.pop());
// console.log(array);


// const array = [1, 1, 1];
// array.push(2,2,2)
// console.log(array);

// const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// console.log(arr);

// const array = [];
// for (let i = 0; i < 3; i++) {
//     array[i] = [];   
//     for (let j = 0; j < 3; j++) {
//         // array[i].push(1);
//         array[i][j] = 1;
//     }
// }
// console.log(array);

// for (let i = 0; i < 3; i++) {
//     array.push(2);
//     for (let j = 0; j < 3; j++) {
//         array.push(1);
//         console.log(array);  
//     }
// }

// const array = [1, 5, 4, 10, 0, 3];
// console.log(array.join(' '));



// const array = [1, 5, 4, 10, 0, 3];
// console.log(array.indexOf(4));


// const array = [1, 5, 4, 10, 0, 3];

// array.forEach((element, index) => {
//     if (element == 4) {
//         console.log(index);
//     }
// });


// const array = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if (array[i] == 10) break
// }





// let a = ['a', 'b', 'c'];
// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9], [10],
// ];

// for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < b[i].length; j++) {
//         console.log(b[i][j]);
//     }
// }

// for (const item of b) {
//     for (const el of item) {
//         console.log(el);
//     }
// }

// for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < b[i].length; j++) {
//         console.log(b[i][j]);
//     }
// }

// console.log(a);
// console.log(b);

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// for (let i = 0; i < b.length; i++) {
//     let c = b[i];
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }


 
// const newspaper = {
// 	sports : {
//         title: 'ARod Hits Home Run',
// 	    writes: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
//     },
//     business : {
//         title: 'GE Stock Dips Again',
// 	    writes: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
//     },
//         movies : {
//         title: 'Superman Is A Flop',
// 	    writes: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
//     },        
// }

// console.log(newspaper.length);

// const book = [
// 	{ name: 'foreword', pageCount: 14 },
// 	{ name: 'boyWhoLived', pageCount: 18 },
// 	{ name: 'vanishingGlass', pageCount: 13 },
// 	{ name: 'lettersFromNoOne', pageCount: 17 },
// 	{ name: 'afterword', pageCount: 19 },
// ];

// console.log(book[1].pageCount);


// const arr = [3, 5, 6, 2, 9, 10];
// const even = arr.filter(item => item % 2 == 0);
// console.log(even);



// let line = 'a=b=c=d=e=f';
// const arr = line.split('=');
// console.log(arr);
// // arr.forEach((element, index, array) => {
// //     if (element == 'c') {
// //         console.log(`${index}:${element}, ${array}` );
// //     }
// // });

// console.log(arr.pop());
// console.log(arr);
// let array = arr.shift();
// console.log( typeof array);
// console.log(arr);