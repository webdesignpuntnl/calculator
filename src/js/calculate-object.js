/* eslint-disable */

const buttons = document.querySelectorAll('.calculationSection__button');
const outputScreen = document.querySelector('.screenSection');

function Calculations(inputLeft, inputRight, operator) {
  let result = 0;

  this.firstInput = function() {
    console.log(inputLeft);
  }

  this.nextInput = function() {
    console.log(inputRight);
  }

  this.operator = function() {
    console.log(operator);
  }
  
  this.calculate = function() {
    console.log(result);
  }
}

const test = new Calculations();


buttons.forEach((button) => {
  button.addEventListener('click', function() {
    console.log('werkt');
  });
});
