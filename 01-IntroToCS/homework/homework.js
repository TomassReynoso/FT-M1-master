'use strict'

function BinarioADecimal(num) {
  // tu codigo aca 


  let decimal = 0;
  let potencia = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    decimal += num[i] * Math.pow(2,potencia);
    potencia ++;
  }
  
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca

  let binario = [];
  
  while(num > 0){
     binario.unshift(num % 2);
     num = Math.floor(num / 2);
  }

  return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}