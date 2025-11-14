const prompt= require("prompt-sync")();
function arreglos(){
     let frutas=[];
let i=0;
let dimension;
dimension=parseInt(prompt("ingrese la cantidad de datos:"));
while(i<dimension){
    let frutitas=prompt("ingrese la fruta:");
    frutas.push(frutitas);
i++;
}
for (let fruta of frutas ){
console.log(fruta);
}
}
arreglos();