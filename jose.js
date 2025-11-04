//1.Imprimir "Hola,mundo!"en la consola
console.log("hola,mundo");

//2.sumar dos numeros
function sumar(a,b){
return a+b;
}
console.log(sumar(5,3));//imprime 8

//3.determinar si un numero es par o impar
function esPar(numero){
if(numero%2===0){
return"par";
}else {
 return"impar" ;
}
}
console.log(espar(7));//imprime "impar"

//4.calcular el factorial de un numero
function factorial(N){
