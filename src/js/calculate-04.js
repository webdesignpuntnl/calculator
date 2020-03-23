/* eslint-disable */
/*
const buttons = Array.from(document.querySelectorAll('.calculationSection__button'));
const outputScreen = document.querySelector('.screenSection');


const calculations = {
  initialInput: [],
  nextInput: [],
  resultInBetween: 0,
  operator: '',
  operatorPressed: false,
  equalsignPressed: false,


  onScreen(event, item) {
    item.push(event.target.innerText);
    outputScreen.innerHTML = item.join('');
  },

  reset() {
    this.initialInput = [],
      this.nextInput = [],
      this.resultInBetween = 0;
    this.operator = '';
    this.operatorPressed = false,
      this.equalsignPressed = false

    outputScreen.innerHTML = 0;
  },

  calculate() {
    if (this.operator === '+' && !this.equalsignPressed) {
      this.resultInBetween = parseInt(this.initialInput.join('')) + parseInt(this.nextInput.join(''));
      this.equalsignPressed = true;

    } else if (this.equalsignPressed && this.operator === '+') {
      this.resultInBetween = this.resultInBetween + parseInt(this.nextInput.join(''));

    } else if (this.operator === '-' && !this.equalsignPressed) {
      this.resultInBetween = parseInt(this.initialInput.join('')) - parseInt(this.nextInput.join(''));
      this.equalsignPressed = true;

    } else if (this.equalsignPressed && this.operator === '-') {
      this.resultInBetween = this.resultInBetween - parseInt(this.nextInput.join(''));

    } else if (this.operator === 'x' && !this.equalsignPressed) {
      this.resultInBetween = parseInt(this.initialInput.join('')) * parseInt(this.nextInput.join(''));
      this.equalsignPressed = true;

    } else if (this.equalsignPressed && this.operator === 'x') {
      this.resultInBetween = this.resultInBetween * parseInt(this.nextInput.join(''));

    } else if (this.operator === '/' && !this.equalsignPressed) {
      this.resultInBetween = parseInt(this.initialInput.join('')) / parseInt(this.nextInput.join(''));
      this.equalsignPressed = true;

    } else if (this.equalsignPressed && this.operator === '/') {
      this.resultInBetween = this.resultInBetween / parseInt(this.nextInput.join(''));
    }

    outputScreen.innerHTML = this.resultInBetween;

    this.initialInput = [];
    this.nextInput = [];
    this.operator = '';
    this.operatorPressed = false;
  }
}


const processInput = (e) => {

  const { initialInput, nextInput, operatorPressed } = calculations;
  let userInput = e.target.dataset.value;

  if (userInput === 'number' && !operatorPressed) calculations.onScreen(e, initialInput);

  if (userInput === 'operator') {
    calculations.operatorPressed = true;
    return calculations.operator = e.target.innerText;
  }

  if (userInput === 'number' && operatorPressed) calculations.onScreen(e, nextInput);

  if (userInput === 'equal') calculations.calculate();

  if (userInput === 'reset') calculations.reset();
}


buttons.forEach(button => button.addEventListener('click', processInput));
*/