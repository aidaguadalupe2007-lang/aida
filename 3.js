const prompt = require("prompt-sync")();

let calificacion = parseFloat(prompt("Ingresa tu calificación (0-100): "));

if (calificacion >= 90 && calificacion <= 100) {
  console.log("Excelente");
} else if (calificacion >= 70 && calificacion < 90) {
  console.log("Bien");
} else if (calificacion >= 0 && calificacion < 70) {
  console.log("Reprobado");
} else {
  console.log("Calificación inválida");
}
