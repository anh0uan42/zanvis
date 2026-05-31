const inputOne = document.getElementById('value1')
const inputTwo = document.getElementById('value2')

const resultOutput = document.getElementById('result')

const add = () => {
    console.log(inputOne)
    const result = Number(inputOne.value) + Number(inputTwo.value)
    resultOutput.textContent = result
}

const subtract = () => {
    console.log(inputOne)
    const result = Number(inputOne.value) - Number(inputTwo.value)
    resultOutput.textContent = result
}

const multiply = () => {
    console.log(inputOne)
    const result = Number(inputOne.value) * Number(inputTwo.value)
    resultOutput.textContent = result
}

const division = () => {
    console.log(inputOne)
    const result = Number(inputOne.value) / Number(inputTwo.value)
    resultOutput.textContent = result
}