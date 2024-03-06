const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");

// const bodyElements = document.querySelectorAll('body');

// for (const bodyElement of bodyElements) {
//   bodyElement.addEventListener('click', () => {
//     bodyElement.style.backgroundColor = 'red'
//   })
  
// }



const initEventListners = () => {
  const studentElements = document.querySelectorAll(".student");

  for (const studentElement of studentElements) {
    studentElement.addEventListener("click", () => {
      console.log(1);
    });
  }
};

initEventListners();

buttonElement.addEventListener("click", () => {
  nameInputElement.classList.remove("input-error");

  if (nameInputElement.value === "") {
    nameInputElement.classList.add("input-error");
    return;
  }

  listElement.innerHTML =
    listElement.innerHTML +
    `<li class="student">
        <p class="student-name">
          ${nameInputElement.value}, любимый цвет
          <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
        </p>
      </li>`;

  initEventListners();

  nameInputElement.value = "";
});
