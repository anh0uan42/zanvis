
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

//calculate average

// const forms = document.querySelectorAll('.calculator-form');

// forms.forEach(form => {
//   form.addEventListener('input', calculateAverage);
// });

// function calculateAverage(event) {
//   const currentForm = event.currentTarget;
  
//   const inputs = currentForm.querySelectorAll('.calc-input');
  
//   let sum = 0;
//   let count = 0;

//   inputs.forEach(input => {
//     const value = parseFloat(input.value);
    
//     if (!isNaN(value)) {
//       sum += value;
//       count++;
//     }
//   });

//   const average = count > 0 ? (sum / count) : 0;
//   const resultDisplay = currentForm.querySelector('.result-display');
  
//   resultDisplay.textContent = average.toFixed(2);
// }

//new method

const forms = document.querySelectorAll('.calculator-form');
// Cache the master display element
const result = document.getElementById('result');

forms.forEach(form => {
  form.addEventListener('input', calculateAverage);
});

function calculateAverage(event) {
  // --- STEP 1: Calculate the single form average ---
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
  
  // Save the raw number on the element for easy retrieval later
  resultDisplay.dataset.value = average; 
  resultDisplay.textContent = average.toFixed(2);

  // --- STEP 2: Calculate the overall master average ---
  calculateMasterAverage();
}

function calculateMasterAverage() {
  const allResults = document.querySelectorAll('.result-display');
  let masterSum = 0;
  let masterCount = 0;

  allResults.forEach(display => {
    // Read the saved raw value, defaulting to 0 if the form hasn't been used yet
    const formAvg = parseFloat(display.dataset.value) || 0;
    
    // Optional: Only include forms in the master average if they have active inputs
    if (formAvg > 0) { 
      masterSum += formAvg;
      masterCount++;
    }
  });

  const masterAverage = masterCount > 0 ? (masterSum / masterCount) : 0;
  
  // Update the master display
  if (masterAverage > 60) {
    result.textContent = `You have PASS the semester with the average of ${masterAverage.toFixed(2)}`;
  } else {
    result.textContent = `You have FAILED the semester with the average of ${masterAverage.toFixed(2)}`;
  }
}