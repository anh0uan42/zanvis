const clickBtn = document.getElementById('click')

const eventType = document.getElementById('event-type')

const firstNameInput = document.getElementById('firstname');
const middleNameInput = document.getElementById('middlename');
const lastNameInput = document.getElementById('lastname');
const fullNameDisplay = document.getElementById('fullname');

const signinForm = document.getElementById('sign-in')

const toggleP = document.getElementById('toggle-p')
const hiddenP = document.getElementById('hidden')

const count = document.getElementById('count')
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')

const todoInput = document.getElementById('todo-input')
const addTodoBtn = document.getElementById('add-todo')
const todoList = document.getElementById('todo-list')

clickBtn.addEventListener('click', () => {
    eventType.textContent = "You have CLICK the button!"
})

clickBtn.addEventListener('dblclick', () => {
    eventType.textContent = "You have DOUBLE CLICK the button!"
})

clickBtn.addEventListener('mouseenter', () => {
    clickBtn.style.backgroundColor = 'black'
    clickBtn.style.color = 'white'

})

clickBtn.addEventListener('mouseleave', () => {
    clickBtn.style.backgroundColor = ''
    clickBtn.style.color = ''

})

function updateFullName() {
  const first = firstNameInput.value.trim();
  const middle = middleNameInput.value.trim();
  const last = lastNameInput.value.trim();


  const name = `${first} ${middle} ${last}`

  fullNameDisplay.textContent = name;
}

signinForm.addEventListener('submit', () => {
    event.preventDefault()

    const formData = new FormData(signinForm)
    const username = formData.get('username')
    const pwd = formData.get('password')

    if (username.trim() == '' || pwd.trim() == '') {
        alert('Username and Password are required!')
        return
    }

    alert("Signing in with username: " + username)
})

toggleP.addEventListener('click', () => {
    toggleP.classList.toggle('active')

    if (toggleP.classList.contains('active')) {
        toggleP.textContent = "Show Paragraph"
        hiddenP.style.display = ''
        toggleP.style.backgroundColor = ''
        toggleP.style.color = ''
    } else {
        toggleP.textContent = "Hide Paragraph"
        toggleP.style.backgroundColor = 'black'
        toggleP.style.color = 'white'
        hiddenP.style.display = 'block'
    }
})

let countValue = 0

const updateCount = () => {
    count.textContent = Number(countValue)
}

addBtn.addEventListener('click', () => {
    countValue++;
    updateCount()
})

subtractBtn.addEventListener('click', () => {
    countValue--;
    updateCount()
})

let todos = []

const renderTodos = () => {
    todoList.innerHTML = ""

    todos.forEach(todo  => {
        const li = document.createElement('li')

        if (todo.completed) {
            li.classList.add('completed')
        }

        const textSpan = document.createElement('span')
        textSpan.className = 'todo-text'
        textSpan.innerText = todo.text

        textSpan.addEventListener('click', () => toggleTodo(todo.id))

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn'
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.ariaLabel = 'Delete task'
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id))

        li.appendChild(textSpan)
        li.appendChild(deleteBtn)
        todoList.appendChild(li)
    })
}

const addTodo = () => {
    const taskText = todoInput.value.trim()

    if (taskText === "") {
        return
    }

    const newTodo = {
        id: Date.now(),
        text: taskText,
        completed: false
    }

    todos.push(newTodo)
    todoInput.value = ""
    renderTodos()
}

const  toggleTodo = (id) => {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed}
        }

        return todo
    })

    renderTodos()
}

function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
}

addTodoBtn.addEventListener("click", addTodo)


firstNameInput.addEventListener('input', updateFullName);
middleNameInput.addEventListener('input', updateFullName);
lastNameInput.addEventListener('input', updateFullName);