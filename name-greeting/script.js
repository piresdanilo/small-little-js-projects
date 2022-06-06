let nameInput = document.querySelector('#name');
let surnameInput = document.querySelector('#surname');
let outputInfo = document.querySelector('#output');

function outputName() {
  outputInfo.innerHTML = `The complete name is ${nameInput.value} ${surnameInput.value}`
}