const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Ingresa la nota: "));
let edad = parseInt(prompt("Ingresa la edad: "));
let sexo = prompt("Ingresa el sexo (M/F): ");
if (nota >= 5 && edad >= 18 && sexo === "M") {
  console.log("POSIBLE");
} else if(nota >= 5 && edad >= 18 && sexo === "F") {
  console.log("ACEPTADA");
} else {
  console.log("NO ACEPTADA");
}
