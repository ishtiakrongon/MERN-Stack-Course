const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const resultDiv = document.getElementById('result');

function calculateBMI() {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; // convert cm to m
  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(1); // round BMI to one decimal place
  resultDiv.textContent = `Your BMI is ${bmiRounded}.`;
}

calculateBtn.addEventListener('click', calculateBMI);
