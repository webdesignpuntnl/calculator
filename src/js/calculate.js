/* eslint-disable */

const buttons = Array.from(document.querySelectorAll('.calculationSection__button'));
const outputScreen = document.querySelector('.screenSection');


let initialInput = [];
let nextInput = [];
let resultInBetween = 0;
let operator = '';
let operatorPressed = false;
let equalsignPressed = false;


const onScreen = (event, item) => {
  item.push(event.target.innerText);
  outputScreen.innerHTML = item.join('');
}

const reset = () => {
  initialInput = [];
  nextInput = [];
  resultInBetween = 0;
  operator = '';
  operatorPressed = false;
  equalsignPressed = false;

  outputScreen.innerHTML = 0;
}

const calculate = () => {
  const intial = parseInt(initialInput.join(''));
  const next = parseInt(nextInput.join(''));

  if (operator === '+' && !equalsignPressed) {
    equalsignPressed = true;
    resultInBetween = intial + next;

  } else if (equalsignPressed && operator === '+') {
    resultInBetween = resultInBetween + next;
  }

  if (operator === '-' && !equalsignPressed) {
    resultInBetween = intial - next;
    equalsignPressed = true;

  } else if (equalsignPressed && operator === '-') {
    resultInBetween = resultInBetween - next;
  }

  if (operator === 'x' && !equalsignPressed) {
    resultInBetween = intial * next;
    equalsignPressed = true;

  } else if (equalsignPressed && operator === 'x') {
    resultInBetween = resultInBetween * next;
  }

  if (operator === '/' && !equalsignPressed) {
    resultInBetween = intial / next;
    equalsignPressed = true;

  } else if (equalsignPressed && operator === '/') {
    resultInBetween = resultInBetween / next;
  }

  outputScreen.innerHTML = resultInBetween;

  initialInput = [];
  nextInput = [];
  operator = '';
  operatorPressed = false;
}

const processInput = (e) => {

  let userInput = e.target.dataset.value;

  if (userInput === 'number' && !operatorPressed) onScreen(e, initialInput);

  if (userInput === 'operator') {
    operatorPressed = true;
    return operator = e.target.innerText;
  }

  if (userInput === 'number' && operatorPressed) onScreen(e, nextInput);

  if (userInput === 'equal') calculate();

  if (userInput === 'reset') reset();
}

buttons.forEach(button => button.addEventListener('click', processInput));