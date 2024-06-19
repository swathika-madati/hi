let currentInput = '';

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function appendInput(value) {
  currentInput += value;
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}
