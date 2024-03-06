const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");

const students = [
  {
    name: "Глеб",
    color: "#ff2600",
    isMale: true,
  },
  {
    name: "Иван",
    color: "#00f900",
    isMale: true,
  },
  {
    name: "Люси",
    color: "#0432ff",
    isMale: false,
  },
];


const renderStudents = () => {
  const studentsHtml = students
    .map((student) => {
      return `<li class="student" data-color="${student.color}">
    <p class="student-name" ${student.isMale ? `style="color: #FF8800"` : ""}>
    ${student.name}, любимый цвет
    <span style="color: ${student.color}"> ${student.color}</span>
    </p>
    <button class="delete-button" data-name="${student.name}">Удалить</button>
  </li>`;
    }).join("");
 

  listElement.innerHTML = studentsHtml;

  initEventListners();
  initEventListnersHi();
};

const initEventListnersHi = () => {
  const buttonsElementsHis = document.querySelectorAll(".delete-button");

  for (const buttonElementHi of buttonsElementsHis) {
    buttonElementHi.addEventListener("click", () => {
      console.log("deleting..");
      console.log(listElement.innerHTML);
    });
  }
};

const initEventListners = () => {
  const studentElements = document.querySelectorAll(".student");

  for (const studentElement of studentElements) {
    studentElement.addEventListener("click", () => {
      console.log(studentElement.dataset.color);
    });
  }
};
renderStudents();

buttonElement.addEventListener("click", () => {
  nameInputElement.classList.remove("input-error");

  if (nameInputElement.value === "") {
    nameInputElement.classList.add("input-error");
    return;
  }

  students.push({
    name: nameInputElement.value,
    color: colorInputElement.value,
  });

  renderStudents();


  nameInputElement.value = "";
});
