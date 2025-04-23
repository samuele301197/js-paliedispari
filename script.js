function pariDispari(numero) {
    let result;
    if(numero % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }

    return  result;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  


  const userName = prompt("Pari o Dispari?");
  const userNumberStr = prompt("Dimmi un numero da 1 a 5");
  const userNumber = parseInt(userNumberStr);
  const computerNumber = getRndInteger(1, 5);
  const somma = computerNumber + userNumber;
  const check = pariDispari(somma);
  let message = "";
  console.log(somma, check);
  
  if (check === userName) {
message = "Hai vinto!";
  } else {
    message = "Hai perso!";
  }

  console.log(message);
  
