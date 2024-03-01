// function isPositive(positive) {
//     return positive = positive > 0
//     }
//     function isMale() {
//     // писать код тут
//     }
//     function filter() {
//     // писать код тут
//     }

//     console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];

//     console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

function isPositive(positive) {
  return positive;
}

function filter(array, positiveNumber) {
  const arr = [];
  console.log(positiveNumber);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) arr.push(positiveNumber(array[i]));
  }
  return arr;
}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

function isMale() {
  
}
const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
