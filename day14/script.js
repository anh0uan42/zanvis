const students = [
  "Liam Smith",
  "Olivia Johnson",
  "Noah Williams",
  "Emma Brown",
  "Oliver Jones",
  "Ava Garcia",
  "Elijah Miller",
  "Charlotte Davis",
  "William Rodriguez",
  "Sophia Martinez"
];

const listContainer = document.getElementById('student-list')
const inputElement = document.getElementById('fullname')
const addStudentBtn = document.getElementById('add-student')

const redText = document.getElementById('red-text')
const changeFont = document.getElementById('change-font')
const textBold = document.getElementById('text-bold')
const background = document.getElementById('background')

const changeText = document.getElementById('change-text')
const textChange = document.getElementById('text-change')

function renderList() {
    listContainer.innerHTML = ""; 
    
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = student + " ";
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove";
        deleteBtn.onclick = () => removeStudent(index);
        
        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
    });
}

function addStudent() {
    const newName = inputElement.value.trim();
    
    if (newName === "") {
        alert("Please enter a name");
        return;
    }
    
    students.push(newName);
    inputElement.value = "";
    renderList();
}

function removeStudent(index) {
    students.splice(index, 1);
    renderList();
}

redText.addEventListener('click', () => {
  const listItems = document.querySelectorAll('li')

  listItems.forEach(item => {
    item.style.color = "red"
  })
})

changeFont.addEventListener('click', () => {
  const listItems = document.querySelectorAll('li')

  listItems.forEach(item => {
    item.style.fontFamily = 'Courier New, monospace'
  })
})

textBold.addEventListener('click', () => {
  const listItems = document.querySelectorAll('li')

  listItems.forEach(item => {
    item.style.fontWeight = 'bold'
  })
})

background.addEventListener('click', () => {
  document.body.style.backgroundColor = "lightblue"; 
})

changeText.addEventListener('click', () => {
  textChange.textContent = "The text has been updated successfully!"
})

addStudentBtn.addEventListener('click', addStudent);
renderList();