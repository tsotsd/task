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
    .map((student, index) => {
      return `<li class="student" data-color="${student.color}">
    <p class="student-name">
    <span ${student.isMale ? `style="color: #FF8800"` : ""}>${student.name},</span> 
    <span>любимый цвет</span>
    <span style="color: ${student.color}"> ${student.color}</span>
    </p>
    <button data-index=${index} class="change-name">Стереть имя</button>
    <button data-index="${index}" class="delete-button" data-name="${student.name}">Удалить</button>
    </li>`;
    }).join("");
 

  listElement.innerHTML = studentsHtml;

  initEventListners();
  initEventListnersDelete();
  initEventListnersChangeName();
};



 
const initEventListnersChangeName = () => {
  const buttonElementChangeNames = document.querySelectorAll(".change-name");

  for (const buttonElementChangeName of buttonElementChangeNames) {
    buttonElementChangeName.addEventListener('click', () => {
      const index = buttonElementChangeName.dataset.index;
      students[index].name = 'Неизвестный студент' 
      renderStudents()
    })
  }
}

const initEventListnersDelete = () => {
  const buttonsElementsHis = document.querySelectorAll(".delete-button");


  for (const buttonElementHi of buttonsElementsHis) {
    buttonElementHi.addEventListener("click", () => {
      const index = buttonElementHi.dataset.index;
      students.splice(index, 1);
      renderStudents();
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
