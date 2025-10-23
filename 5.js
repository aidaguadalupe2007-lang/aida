// Ejercicio 5: Convertir medidas (cm, mts, kg)
const prompt = require("prompt-sync")();

let cm = parseFloat(prompt("Ingresa la medida en centímetros: "));
let mts = parseFloat(prompt("Ingresa la estatura en metros: "));
let kg = parseFloat(prompt("Ingresa el peso en kilogramos: "));

let pulgadas = cm * 0.394;
let pies = mts * 3.28084;
let libras = kg * 2.20462;

console.log(pulgadas);
console.log(pies);
console.log(libras);