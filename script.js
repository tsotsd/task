while (true) {
    const msg = prompt('Введите text', 'text')
    if (msg === 'continue') {
        continue
    }
    console.log(msg);
    if (msg === 'break') {
        break;
    } 
}