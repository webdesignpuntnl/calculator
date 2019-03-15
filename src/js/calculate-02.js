/* eslint-disable */

const buttons = document.querySelectorAll('.calculationSection__button');
const outputScreen = document.querySelector('.screenSection');
let calculate = { numbers: 0 };

function number(buttonPressed) {
  if(buttonPressed.dataset.value === 'number') {
    const number = parseInt(buttonPressed.innerText);
    calculate.numbers = number;
  }
  outputScreen.innerText = calculate.numbers;
} 




buttons.forEach((button) => {
  button.addEventListener('click', function() {
    number(this);
  });
});
