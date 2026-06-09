const loginBtn = document.getElementById('login')
const signupBtn = document.getElementById('signup')

const signInForm = document.getElementById('sign-in')
const signUpForm = document.getElementById('sign-up')

loginBtn.addEventListener('click', () => {
    signInForm.style.display = 'block'
    signUpForm.style.display = ''
})

signupBtn.addEventListener('click', () => {
    signUpForm.style.display = 'block'
    signInForm.style.display = ''
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        signUpForm.style.display = ''
        signInForm.style.display = ''
    }
})