let getLampStatus = document.querySelector('img');

function turnOnOff(){
  if (getLampStatus.classList.contains('lampOff')) {
    getLampStatus.src=('file:///home/danilo/Documentos/Programa%C3%A7%C3%A3o%20e%20Dev/Origamid/javascript-origamid/02-javascript-para-iniciantes%20(1)/02-javascript-para-iniciantes/praticando-sozinho/lampada-on.jpg');
    getLampStatus.classList.remove("lampOff");
    getLampStatus.classList.add("lampOn");
    
  } else {
    getLampStatus.src=('file:///home/danilo/Documentos/Programa%C3%A7%C3%A3o%20e%20Dev/Origamid/javascript-origamid/02-javascript-para-iniciantes%20(1)/02-javascript-para-iniciantes/praticando-sozinho/lampada.jpg');
    getLampStatus.classList.remove('lampOn')
    getLampStatus.classList.add('lampOff')
  }
} 
