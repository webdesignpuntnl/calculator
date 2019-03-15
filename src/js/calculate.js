/* eslint-disable */

const buttons = document.querySelectorAll('.calculationSection__button');
const outputScreen = document.querySelector('.screenSection');
let firstPressed = [];
let secondPressed = [];
let result = []; // nadat er een operator is gebruikt stop je het resultaat hierin en rekent hier dan verder mee
let operatorPressed = false;

//! op basis van de operator die gebruikt wordt nadat result is gevuld ga je naar een psecifieke functie
//! elke formule krijgt zijn eigen functie dus optellen, aftrekken enz. op basis van de operator key
//*
//?
//TODO

function number(data) {
  const buttonNumber = parseInt(data.innerText, 0);
  if(!operatorPressed) {
    firstPressed.push(buttonNumber);
    outputScreen.innerText = firstPressed.join('');
  } else {
    secondPressed.push(buttonNumber);
    outputScreen.innerText = secondPressed.join('');
  }
}

function operator(data) {
  operatorPressed = true;
  let first = parseInt(firstPressed.join(''), 0);
  let second = parseInt(secondPressed.join(''), 0);
  const operator = data.innerText;
  if(second) doTheMath(first, second, operator);
}

function doTheMath(first, second, operator) {
  console.log(operator); //! krijgt '=' mee omdat dat als laatste geklikt wordt OOK EEN ARRAY MET OPERATORS??
  result.push(first + second);
  
  
  if (second) {
    outputScreen.innerText = result;
    firstPressed = [];
    secondPressed = [];
    operatorPressed = false;
  }
}

function clearScreen() {
  firstPressed = [];
  secondPressed = [];
  result = [];
  outputScreen.innerText = '0';  
}

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if(this.dataset.value === 'number') {
      number(this);
    } else if(this.dataset.value === 'operator') {
      operator(this);
    } else if(this.dataset.value === 'reset') {
      clearScreen();
    }
  });
});
