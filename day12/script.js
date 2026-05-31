
const firstNameInput = document.getElementById('firstname');
const middleNameInput = document.getElementById('middlename');
const lastNameInput = document.getElementById('lastname');
const fullNameDisplay = document.getElementById('fullname');


function updateFullName() {
  const first = firstNameInput.value.trim();
  const middle = middleNameInput.value.trim();
  const last = lastNameInput.value.trim();


  const name = `${first} ${middle} ${last}`

  fullNameDisplay.textContent = name;
}

firstNameInput.addEventListener('input', updateFullName);
middleNameInput.addEventListener('input', updateFullName);
lastNameInput.addEventListener('input', updateFullName);


const forms = document.querySelectorAll('.calculator-form');

const result = document.getElementById('result');

forms.forEach(form => {
  form.addEventListener('input', calculateAverage);
});

function calculateAverage(event) {

  const currentForm = event.currentTarget;
  const inputs = currentForm.querySelectorAll('.calc-input');
  
  let sum = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      sum += value;
      count++;
    }
  });

  const average = count > 0 ? (sum / count) : 0;
  const resultDisplay = currentForm.querySelector('.result-display');
  
  resultDisplay.dataset.value = average; 
  resultDisplay.textContent = average.toFixed(2);

  calculateMasterAverage();
}

function calculateMasterAverage() {
  const allResults = document.querySelectorAll('.result-display');
  let masterSum = 0;
  let masterCount = 0;

  allResults.forEach(display => {
    const formAvg = parseFloat(display.dataset.value) || 0;
    
    if (formAvg > 0) { 
      masterSum += formAvg;
      masterCount++;
    }
  });

  const masterAverage = masterCount > 0 ? (masterSum / masterCount) : 0;
  
  if (masterAverage > 60) {
    result.textContent = `You have PASS the semester with the average of ${masterAverage.toFixed(2)}`;
  } else {
    result.textContent = `You have FAILED the semester with the average of ${masterAverage.toFixed(2)}`;
  }
}