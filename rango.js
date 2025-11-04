const prompt = require('prompt-sync')();
function Rango(){
let valor = 0 ;
while ( valor < 1 || valor > 5 ) {
  valor=parseInt(prompt("ingresa un numero 1-5 para terminar:"));
    console.log(`el numero es ${valor} es valido`);
}
}
Rango()
