const prompt = require("prompt-sync")();
function natural(){
let numero = parseInt(prompt("Ingresa un número: "));
let contador = 0;
console.log(`Números impares desde 1 hasta ${numero}`);
for (let i = 1; i <= numero; i+=2) {
  console.log(i);
  contador++;
}
console.log(`Cantidad de números impares:${contador}`);
}
natural();
