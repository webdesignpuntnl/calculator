/* eslint-disable */

const buttons = document.querySelectorAll('.calculationSection__button');
const outputScreen = document.querySelector('.screenSection');
let buttonVal = [];
let firstNumber;
let nextNumber;
let operator;
let result;
let buttonPressed = false;

function calculate(data) {
  if(data.dataset.value === 'number' && data.dataset.value != 'operator' && !buttonPressed) {
    buttonVal.push(data.innerText);
    firstNumber = parseInt(buttonVal.join(''));
    outputScreen.innerText = firstNumber;
  } else if(data.dataset.value != 'number' && data.innerText != '=') {
    operator = data.innerText;
    buttonPressed = true;
    buttonVal = [];
  } else if(data.dataset.value === 'number' && data.dataset.value != 'operator' && buttonPressed && !nextNumber) {
    buttonVal.push(data.innerText);
    nextNumber = parseInt(buttonVal.join(''));
    outputScreen.innerText = nextNumber;
  }
  if(firstNumber && nextNumber && operator === '+' && data.innerText === '=' ) {
      result = firstNumber + nextNumber;
      outputScreen.innerText = result;
  }
  if(firstNumber && nextNumber && operator === '-' && data.innerText === '=' ) {
      result = firstNumber - nextNumber;
      outputScreen.innerText = result;
  }
  if(firstNumber && nextNumber && operator === 'x' && data.innerText === '=' ) {
      result = firstNumber * nextNumber;
      outputScreen.innerText = result;
  }
  if(firstNumber && nextNumber && operator === '/' && data.innerText === '=' ) {
      result = firstNumber / nextNumber;
      outputScreen.innerText = result;
  }
}

function clearScreen() {
  outputScreen.innerText = '0';
  buttonPressed = false;
  buttonVal = [];
  firstNumber = '';
  nextNumber = '';
  operator = '';
} 

buttons.forEach((button) => {
  button.addEventListener('click', function() {
      calculate(this);
      if(this.dataset.value === 'reset') {
        clearScreen();
      };
  });
});
