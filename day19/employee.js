import { employees } from './data.js'

const hrEmployees = employees.filter(e => e.department === "HR")
const engineerEmployees = employees.filter(e => e.department === "Engineer")
const financeEmployees = employees.filter(e => e.department === "Financial")
const customerServiceEmployees = employees.filter(e => e.department === "Customer Service")

const hrEmployeesButton = document.getElementById('hr')
const enigineerEmployeesButton = document.getElementById('engineer')
const financeEmployeesButton = document.getElementById('financial')
const customerServiceEmployeesButton = document.getElementById('customer-service')

const employeesListDisplay = document.getElementById('employee-list')

hrEmployeesButton.addEventListener('click', () => {
    employeesListDisplay.innerHTML = ''

    let header = document.createElement('li')
    header.innerHTML = `<h4>Name</h4><h4>Role</h4><h4>Department</h4>`
    employeesListDisplay.appendChild(header)

    hrEmployees.forEach(employee => {
        let li = document.createElement('li')
        li.innerHTML = `<p>${employee.name}</p><p>${employee.role}</p><p>${employee.department}</p>`
        employeesListDisplay.appendChild(li)
    })

    hrEmployeesButton.style.backgroundColor = 'rgba(46, 45, 45, 0.502)'
    enigineerEmployeesButton.style.backgroundColor = ""
    financeEmployeesButton.style.backgroundColor = ""
    customerServiceEmployeesButton.style.backgroundColor = ""
})

enigineerEmployeesButton.addEventListener('click', () => {
    employeesListDisplay.innerHTML = ''

    let header = document.createElement('li')
    header.innerHTML = `<h4>Name</h4><h4>Role</h4><h4>Department</h4>`
    employeesListDisplay.appendChild(header)

    engineerEmployees.forEach(employee => {
        let li = document.createElement('li')
        li.innerHTML = `<p>${employee.name}</p><p>${employee.role}</p><p>${employee.department}</p>`
        employeesListDisplay.appendChild(li)
    })

    enigineerEmployeesButton.style.backgroundColor = 'rgba(46, 45, 45, 0.502)'
    hrEmployeesButton.style.backgroundColor = ""
    financeEmployeesButton.style.backgroundColor = ""
    customerServiceEmployeesButton.style.backgroundColor = ""
})

financeEmployeesButton.addEventListener('click', () => {
    employeesListDisplay.innerHTML = ''

    let header = document.createElement('li')
    header.innerHTML = `<h4>Name</h4><h4>Role</h4><h4>Department</h4>`
    employeesListDisplay.appendChild(header)

    financeEmployees.forEach(employee => {
            let li = document.createElement('li')
            li.innerHTML = `<p>${employee.name}</p><p>${employee.role}</p><p>${employee.department}</p>`
            employeesListDisplay.appendChild(li)
        })

    financeEmployeesButton.style.backgroundColor = 'rgba(46, 45, 45, 0.502)'
    hrEmployeesButton.style.backgroundColor = ""
    enigineerEmployeesButton.style.backgroundColor = ""
    customerServiceEmployeesButton.style.backgroundColor = ""
})

customerServiceEmployeesButton.addEventListener('click', () => {
    employeesListDisplay.innerHTML = ''

    let header = document.createElement('li')
    header.innerHTML = `<h4>Name</h4><h4>Role</h4><h4>Department</h4>`
    employeesListDisplay.appendChild(header)

    customerServiceEmployees.forEach(employee => {
            let li = document.createElement('li')
            li.innerHTML = `<p>${employee.name}</p><p>${employee.role}</p><p>${employee.department}</p>`
            employeesListDisplay.appendChild(li)
        })

        enigineerEmployeesButton.style.backgroundColor = ''
        hrEmployeesButton.style.backgroundColor = ""
        financeEmployeesButton.style.backgroundColor = ""
        customerServiceEmployeesButton.style.backgroundColor = "rgba(46, 45, 45, 0.502)"
})
