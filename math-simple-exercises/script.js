let getFirstNumber = document.querySelector('#numberOne');
let getSecondNumber = document.querySelector('#numberTwo');

let result = document.querySelector('#resultSpot');

function sum() {
  let firstNumber = parseInt(getFirstNumber.value);
  let secondNumber = parseInt(getSecondNumber.value);
  if (firstNumber.value <= 0 || secondNumber.value <= 0){
    result.innerHTML= `Please insert a number greater than 0.`
  } else{
    result.innerHTML= `The module is ${firstNumber % secondNumber}`;
  }
  
}

let container = document.querySelector('.container')

function turnRed() {
  if (container.classList.contains('white')){
    container.classList.remove('white');
    container.classList.add('red');
  } else if (container.classList.contains('blue')){
    container.classList.remove('blue');
    container.classList.add('red');
  } else if (container.classList.contains('white')){
    container.classList.remove('white');
    container.classList.add('red');
  } else if (container.classList.contains('yellow')){
    container.classList.remove('yellow');
    container.classList.add('red');
  }
}

function turnBlue() {
  if (container.classList.contains('white')){
    container.classList.remove('white');
    container.classList.add('blue');
  } else if (container.classList.contains('red')){
    container.classList.remove('red');
    container.classList.add('blue');
  } else if (container.classList.contains('yellow')){
    container.classList.remove('yellow');
    container.classList.add('blue');
  } else if (container.classList.contains('pink')){
    container.classList.remove('pink');
    container.classList.add('blue');
  }
}

function turnYellow() {
  if (container.classList.contains('white')){
    container.classList.remove('white');
    container.classList.add('yellow');
  } else if (container.classList.contains('red')){
    container.classList.remove('red');
    container.classList.add('yellow');
  } else if (container.classList.contains('blue')){
    container.classList.remove('blue');
    container.classList.add('yellow');
  } else if (container.classList.contains('pink')){
    container.classList.remove('pink');
    container.classList.add('yellow');
  }
}

function turnPink() {
  if (container.classList.contains('white')){
    container.classList.remove('white');
    container.classList.add('pink');
  } else if (container.classList.contains('red')){
    container.classList.remove('red');
    container.classList.add('pink');
  } else if (container.classList.contains('blue')){
    container.classList.remove('blue');
    container.classList.add('pink');
  } else if (container.classList.contains('yellow')){
    container.classList.remove('yellow');
    container.classList.add('pink');
  }
}

function turnWhite() {
  if (container.classList.contains('pink')){
    container.classList.remove('pink');
    container.classList.add('white');
  } else if (container.classList.contains('red')){
    container.classList.remove('red');
    container.classList.add('white');
  } else if (container.classList.contains('blue')){
    container.classList.remove('blue');
    container.classList.add('white');
  } else if (container.classList.contains('yellow')){
    container.classList.remove('yellow');
    container.classList.add('white');
  }
}