let number = +prompt('Пожалуйста, введите любое число', '0');

if (Number.isFinite(number)) {
    number % 2 === 0 ? console.log('even') : console.log('odd');
} else {
    console.log(NaN);
}