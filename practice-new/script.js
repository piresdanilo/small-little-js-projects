let getFirstNumber = document.querySelector('#numberOne');
let getSecondNumber = document.querySelector('#numberTwo');

let result = document.querySelector('#resultSpot');

function sum() {
  let firstNumber = parseInt(getFirstNumber.value);
  let secondNumber = parseInt(getSecondNumber.value);
  if (firstNumber.value <= 0 || secondNumber.value <= 0){
    result.innerHTML= `Please insert a number greater than 0.`
  } else{
    result.innerHTML= `The result is ${firstNumber + secondNumber}`;
  }
  
}