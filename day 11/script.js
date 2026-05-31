const semester = "Fall 2026"

const fullname = document.getElementById('fullname')
const studentId = document.getElementById('studentid')
const email = document.getElementById('email')

const courses = document.getElementById('courses')
const instructor = document.getElementById('instructor')

const chosenInstructor = instructor.options[instructor.selectedIndex].text;
const chosenCourse = courses.options[courses.selectedIndex].text



const enroll = () => {
    console.log(`${fullname.value} with a student Id ${studentId.value} and email ${email.value}\n Erolled in ${chosenCourse} course instructed by ${chosenInstructor}`)
}