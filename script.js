let a = ['a', 'b', 'c'];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], [10],
];

for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
        console.log(b[i][j]);
    }
}

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