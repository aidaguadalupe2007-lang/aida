const prompt = require('prompt-sync')();
let numero;
let cantidadPares = 0;
while (3) {
  numero = parseInt(prompt("Teclea un número: "));
  if (numero % 2 !== 0) {
    console.log("Número impar detectado. Fin del programa.");break;
  } else {
    cantidadPares++;
  }
}
console.log("Cantidad de números pares ingresados (incluyendo el 0 si lo hubo): " + cantidadPares);