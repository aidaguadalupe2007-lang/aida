const prompt = require('prompt-sync')();
let respuesta = "";
while (true) {
  respuesta = prompt("¿Deseas continuar? (n para salir): ");
  if (respuesta === "n" || respuesta === "N") {
    console.log("Programa finalizado."); break;
  } else {
    console.log("Repetimos la pregunta...");
  }
}
