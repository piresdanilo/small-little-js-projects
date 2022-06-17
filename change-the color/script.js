
function changeColor(){
  let currentColor = document.querySelector('body').style;

  let newRed = function(){
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
  };
  let newGreen = function(){
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
  };
  let newBlue = function(){
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
  };
  let newA = function(){
    return Math.floor(Math.random() + 0.1)
  };

  let newColor = `rgba(${newRed()}, ${newGreen()}, ${newBlue()}, ${newA()})`

  currentColor.backgroundColor = newColor;
  
}