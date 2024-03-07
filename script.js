"use strict";
// Код писать здесь
const buttonElement = document.getElementById('add-name-comment');
const listElement = document.getElementById('list');
const nameInputElement = document.getElementById('name-input');
const commentTextareaElement = document.getElementById('comment-textarea');

const comments = [
  {
    name: 'Глеб Фокин',
    comment: 'Это будет первый комментарий на этой странице',
    like: 3,
  }
  {
    name: 'Варвара Н.',
    comment: 'Мне нравится как оформлена эта страница! ❤',
    like: 75,
  }
];




let myDate = new Date();

let todayDate = myDate.getDate();
let todayMonth = myDate.getMonth() + 1;
if (todayDate < 10) {
  todayDate = '0' + todayDate;
}
if (todayMonth < 10) {
  todayMonth = '0' + todayMonth;
}
let hour = myDate.getHours();
let minute = myDate.getMinutes();

if (hour < 10) {
  hour = '0' + hour;
}
if (minute < 10) {
  minute = '0' + minute;
}

let dateHours = todayDate + '.' + todayMonth + '.' + myDate.getFullYear().toString().substr(-2) + ' ' + hour + ':' + minute;
console.log(dateHours);
console.log(buttonElement.disabled);

const currentDate = new Date().toLocaleDateString('default', {day: '2-digit', month: '2-digit', year: '2-digit'}) + " "+ new Date().toLocaleTimeString().slice(0, -3);
console.log(currentDate);

  buttonElement.addEventListener('click', () => {
  // nameInputElement.classList.remove('error');
  // commentTextareaElement.classList.remove('error');

  console.log(buttonElement.removeAttribute);

  if (nameInputElement.value === '' || commentTextareaElement.value ==='') {
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled');
  }

  // if (commentTextareaElement.value === '') {
  //   commentTextareaElement.classList.add('error');
  //    return; 
  // }

  const oldListElement = listElement.innerHTML;
  listElement.innerHTML = oldListElement + ` <li class="comment">
      <div class="comment-header">
        <div>${nameInputElement.value}</div>
        <div>${dateHours}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${commentTextareaElement.value}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">0</span>
          <button class="like-button"></button>
        </div>
      </div>
    </li>`
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      const oldListElement = listElement.innerHTML;
  listElement.innerHTML = oldListElement + ` <li class="comment">
      <div class="comment-header">
        <div>${nameInputElement.value}</div>
        <div>${dateHours}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${commentTextareaElement.value}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">0</span>
          <button class="like-button"></button>
        </div>
      </div>
    </li>`
    }
  })

console.log("It works!");
