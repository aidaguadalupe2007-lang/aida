const prompt = require("prompt-sync")();

let numeroN = parseInt(prompt("Ingresa un número mayor que cero: "));

if (numeroN > 0) {
  if (numeroN % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
} else {
  console.log("El número debe ser mayor que cero");
}
