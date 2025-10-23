const prompt = require('prompt-sync')();
let cal=parseInt(prompt("Ingresa la calificacion"));
let resultado=cal>6?"bien":cal>8?"muy bien":"Excelente"
 console.log(resultado);         