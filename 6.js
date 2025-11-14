const prompt = require("prompt-sync")();

let edadAnios = parseInt(prompt("Ingresa tu edad en años: "));
let diasVividos = edadAnios * 365;
let horasDormidas = diasVividos
console.log(`las horas  de toda tu vida son:${horasDormidas}`);
