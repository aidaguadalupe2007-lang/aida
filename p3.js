const prompt = require('prompt-sync')();
let alumnos = parseInt(prompt("Ingresa el número de alumnos: "));
let costoAlumno;
let total;
if (alumnos >= 100) {
  costoAlumno = 65;
  total = alumnos * costoAlumno;
} else if (alumnos >= 50 && alumnos <= 99) {
  costoAlumno = 70;
  total = alumnos * costoAlumno;
} else if (alumnos >= 30 && alumnos <= 49) {
  costoAlumno = 95;
  total = alumnos * costoAlumno;
} else {
  total = 4000;
  costoAlumno = total / alumnos;
}
console.log("El costo total del viaje es: $" + total);
console.log("Cada alumno paga: $" + costoAlumno.toFixed(2));