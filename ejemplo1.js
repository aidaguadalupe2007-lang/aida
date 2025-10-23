//libreria para usar los comandos de las consolas
const prompt = require('prompt-sync')();

// funcion de inicio de  operaciones
function calificacion(){
let cal=parseInt(prompt("ingresa la calificacion:"));
let respuesta=cal>6 && cal <8? "regular": cal>= 8? "Execelente":"Reprobado"
console.log(`La calificacion es ${cal} y es ${respuesta}`)
}

calificacion();