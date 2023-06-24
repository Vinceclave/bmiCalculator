let heightInputField = document.getElementById('height-input-field');
let weightInputField = document.getElementById('weight-input-field');
let formElement = document.querySelector('.bmi-calculator');
let minWeightElement = document.querySelector('.min-weight');
let maxWeightElement = document.querySelector('.max-weight');
let button = document.querySelector('.bmi-calculator > button');

function validateInputs() {
  if (!heightInputField.value || !weightInputField.value) {
    return false; // Invalid inputs
  }
 
  return true; // Valid inputs
}

function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters ** 2);
  return bmi.toFixed(2);  
}

function updateBMIResult() {
  if (validateInputs()) {
    const weight = parseFloat(weightInputField.value);
    const height = parseFloat(heightInputField.value);
    const bmi = calculateBMI(weight, height);
    const heightInMeters = height / 100;
    const minWeight = (18.5 * (heightInMeters ** 2)).toFixed(2);
    const maxWeight = (24.9 * (heightInMeters ** 2)).toFixed(2);
    
    
    
    button.innerHTML = `
    <div class="calculated-bmi">
      <p class="bmi-result">Your BMI is 
        <span>${bmi}
        </span>
      </p>
        <div class="range-weight">
          <p>Your BMI suggests you're a healthy weight. Your ideal weight is between 
            <div class="minmax-result">
              <span class="min">
                ${minWeight}kgs
              </span> -
             <span class="max">
                ${maxWeight}kgs
             </span>
           </div> 
          </p>
       </div>
    </div>
    `;
  
  } else {
    button.innerHTML = `
    <div class="greetings">
    <h3>Welcome!</h3>
    <p>Enter your height and weight and you'll see your BMI result here</p>    
    </div>
    `;
  }
  
}

heightInputField.addEventListener('input', updateBMIResult);
weightInputField.addEventListener('input', updateBMIResult);

formElement.addEventListener('submit', e => {
  e.preventDefault(); // Prevent the default form submission behavior
});
