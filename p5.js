const prompt = require('prompt-sync')();
let numero = 0;
while (true) {
  numero = parseInt(prompt("Teclea un número entre 1 y 5: "));
  if (numero >= 1 && numero <= 5) {
    console.log( numero);break;
  } else {
    console.log("Número fuera de rango, inténtalo de nuevo.");
  }
}