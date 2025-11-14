const prompt = require("prompt-sync")();
function tabla_de_multiplicar(){
let numero = parseInt(prompt("Ingresa un número: "));
for ( i = 1; i <= 10; i++) {
  console.log(numero,"x" , i, "=", numero*i );
}
}
tabla_de_multiplicar();
