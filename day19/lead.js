import { employees } from './data.js'

// const completedTask = tasks.filter(task => task.status === 'Completed')
// const pendingTask = tasks.filter(task => task.status === 'Pending')
// const inProgessTask = tasks.filter(task => task.status === 'In Progress')

const teamLeaders = employees.filter(e => e.role.includes('Team Lead'))

const teamLeadDisplay = document.getElementById('team-lead-list')

let header = document.createElement('li')
header.innerHTML = `<h4>Name</h4><h4>Department</h4>`
teamLeadDisplay.appendChild(header)

teamLeaders.forEach(leader => {
    let li = document.createElement('li')
    li.innerHTML = `<p>${leader.name}</p> <p>${leader.department}</p>`
    teamLeadDisplay.appendChild(li)
})