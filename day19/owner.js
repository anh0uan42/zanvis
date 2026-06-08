import { employees, tasks } from './data.js'

const completedTask = tasks.filter(task => task.status === 'Completed')
const pendingTask = tasks.filter(task => task.status === 'Pending')
const inProgessTask = tasks.filter(task => task.status === 'In Progress')

const completedTaskBtn = document.getElementById("completed-task")
const pendingTaskBtn = document.getElementById("pending-task")
const inprogressTaskBtn = document.getElementById("in-progress")

const taskDisplay = document.getElementById('task-display')

completedTaskBtn.addEventListener('click', () => {
    taskDisplay.innerHTML = ""

    let header = document.createElement('li')
    header.id = "list-header"
    header.innerHTML = `<h4>Task</h4><h4>Status</h4><h4>Assigned To</h4><h4>Department</h4>`
    taskDisplay.appendChild(header)

    completedTask.forEach(task => {
        let li = document.createElement('li')
        const assignedEmployee = employees.find(employee => employee.id == task.employeeId)
        li.innerHTML = `<p>${task.title}</p><p>${task.status}</p><p>${assignedEmployee.name}</p><p>${assignedEmployee.department}</p>`
        taskDisplay.appendChild(li)
    })

    completedTaskBtn.style.backgroundColor = "rgba(46, 45, 45, 0.502)"
    pendingTaskBtn.style.backgroundColor = ""
    inprogressTaskBtn.style.backgroundColor = ""
})

pendingTaskBtn.addEventListener('click', () => {
    taskDisplay.innerHTML = ""

    let header = document.createElement('li')
    header.id = "list-header"
    header.innerHTML = `<h4>Task</h4><h4>Status</h4><h4>Assigned To</h4><h4>Department</h4>`
    taskDisplay.appendChild(header)

    pendingTask.forEach(task => {
        let li = document.createElement('li')
        const assignedEmployee = employees.find(employee => employee.id == task.employeeId)
        li.innerHTML = `<p>${task.title}</p><p>${task.status}</p><p>${assignedEmployee.name}</p><p>${assignedEmployee.department}</p>`
        taskDisplay.appendChild(li)
    })
    completedTaskBtn.style.backgroundColor = ""
    pendingTaskBtn.style.backgroundColor = "rgba(46, 45, 45, 0.502)"
    inprogressTaskBtn.style.backgroundColor = ""
})

inprogressTaskBtn.addEventListener('click', () => {
    taskDisplay.innerHTML = ""

    let header = document.createElement('li')
    header.id = "list-header"
    header.innerHTML = `<h4>Task</h4><h4>Status</h4><h4>Assigned To</h4><h4>Department</h4>`
    taskDisplay.appendChild(header)

    inProgessTask.forEach(task => {
        let li = document.createElement('li')
        const assignedEmployee = employees.find(employee => employee.id == task.employeeId)
        li.innerHTML = `<p>${task.title}</p><p>${task.status}</p><p>${assignedEmployee.name}</p><p>${assignedEmployee.department}</p>`
        taskDisplay.appendChild(li)
    })
    completedTaskBtn.style.backgroundColor = ""
    pendingTaskBtn.style.backgroundColor = ""
    inprogressTaskBtn.style.backgroundColor = "rgba(46, 45, 45, 0.502)"
})