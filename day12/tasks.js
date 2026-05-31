const num1 = 1
const num2 = 2
const num3 = 3
const num4 = 4
const num5 = 5

const add = (val1, val2) => {
    return val1 + val2
}
const subtract = (val1, val2) => {
    return val1 - val2
}
const multiply = (val1, val2) => {
    return val1 * val2
}
const division = (val1, val2) => {
    return val1 / val2
}

const addTwo = (val) => {
    console.log(`The Initial Value is ${val}`)
    val += 2
    console.log(`The Ending Value is ${val}`)
} 

const compareToFive = (val) => {
    if (val > 5) {
        console.log(`The Value is Greater than 5`)
    } else if (val < 5) {
        console.log(`The Value is Smaller than 5`)
    } else if (val == 5) {
        console.log(`The value is Equal to 5`)
    }
}

const maleAndTweenty = (gender, age) => {
    if (gender == 'male' && age == 20) {
        console.log(`You're a 20 years old male!`)
    } else if (gender != "male" || age != 20) {
        console.log(`You're not a 20 years old male`)
    }
}

const fullname = (firstName, lastName) => {
    console.log(firstName + " " + lastName)
}

const welcome = (name, place) => {
    console.log(`Welcome to ${place}, ${name}!`)
}

const canBuyAlcohol = age => {
    if (age >= 21) {
        console.log(`You can legally buy alcohol!`)
    } else {
        console.log(`You cannot buy alcohol under 21!`)
    }
}

const roleLogIn = (password, role) => {
    if (password != 'correct') {
        console.log(`You entered a wrong password!`)
        return
    }

    if (role != 'admin') {
        console.log(`You cannot change the system`)
        return
    }

    console.log(`Welcome back admin, you can modify the system`)
}

const checkGrade = grade => {
    if (grade >= 6) {
        console.log(`You've PASSED`)
    } else {
        console.log(`You've FAILED`)
    }
}

console.log(add(num1, num2))
console.log(subtract(num4, num2))
console.log(multiply(num3, num2))
console.log(division(num5, num2))

addTwo(3)

compareToFive(32)
compareToFive(3)
compareToFive(5)

maleAndTweenty('male', 20)
maleAndTweenty('male', 30)
maleAndTweenty('female', 30)

fullname('Quan', 'Nguyen')

welcome('Quan', 'Disney Land')

canBuyAlcohol(21)
canBuyAlcohol(31)
canBuyAlcohol(14)

roleLogIn('correct', 'admin')
roleLogIn('incorrect', 'admin')
roleLogIn('correct', 'user')

checkGrade(7)
checkGrade(5)

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday'
    console.log(`Its ${day}. Have some rest!`)
    break;
  case 1:
    day = "Monday";
    console.log(`Its ${day}. Gotta go to work!`)
    break;
  case 2:
     day = "Tuesday";
     console.log(`Its ${day}. Gotta go to work!`)
    break;
  case 3:
    day = "Wednesday";
    console.log(`Its ${day}. Gotta go to work!`)
    break;
  case 4:
    day = "Thursday";
    console.log(`Its ${day}. Gotta go to work!`)
    break;
  case 5:
    day = "Friday";
    console.log(`Its ${day}. Gotta go to work!`)
    break;
  case 6:
    day = "Saturday";
    console.log(`Its ${day}. Have some rest!`)
    break;
  default: 
    console.log('unknown')
}