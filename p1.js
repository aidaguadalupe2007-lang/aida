const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingresa el número: "));
let exponente = parseInt(prompt("Ingresa el exponente: "));
let resultado;

if (exponente > 0) {
  resultado = Math.pow(numero, exponente);
  console.log("El resultado es: " + resultado);
} else if (exponente === 0) {
  console.log("El resultado es: 1");
} else {
  resultado = 1 / Math.pow(numero, Math.abs(exponente));
  console.log("El resultado es: " + resultado);
}
