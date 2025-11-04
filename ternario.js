const prompt = require('prompt-sync')();
let cal = parseInt(prompt("ingrese la calificacion"));

if (cal >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");

let resultado = cal> 8 ? "muy bien" :
                 cal >6? "bien" :
                 "Excelente";
console.log(resultado) ;
}