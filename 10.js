const prompt = require("prompt-sync")();

let indice = parseFloat(prompt("Ingresa el índice de contaminación: "));

if (indice <= 37) {
  console.log("Aceptable");
} else if (indice <= 55) {
  console.log("Desagradable");
} else {
  console.log("Peligroso");
}
