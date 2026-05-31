//task 1 and 4
const greet = (name, course) => {
    console.log(`Welcome to the ${course} course! ${name}`)
}

//task 2 and 4
const sayName = (name) => {
    console.log(`Hello ${name}, it's a wonderful day!`)
}

//task 3 and 4
const addTwo = num => {
    return num + 2
}

greet('Ben', 'Basic HTML')
sayName('John')
console.log(`Add 2 to 7 give us a ${addTwo(7)}`)

//task 5
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

//task 6
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

//task 7
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

//task 8
const num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

//task9
let second = 10

while (second > 0) {
    console.log(`There is ${second} more seconds to New Year`)
    second--;
}

//task 10
let count = 1
do {
  console.log(`This will run from 1 to 10. This is the ${count} round`)
  count++;
} while (count <= 10)