const prompt = require('prompt-sync')();
let numero;
let suma = 0;
while (true) {
  numero = parseInt(prompt("Teclea un número (0 para terminar): "));
  if (numero === 0) {
    console.log("La suma total es: " + suma);
    break;
  }
  suma += numero;
}