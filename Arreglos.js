//Declaracion de arreglos
/*
tipos de datos
number
string
Boolean
null
undifined
Tipos de datos compuestos
object
Array
function
|*/

function DatosArreglos(){
    let Datos =[3,7,9,3,2,6];
   /* // let suma=0;
    //for(i=0;i<Datos.length;i++){
        //if((Datos[i])%2===0);
       // suma+=Datos[i];
        //console.log(`la posicion es ${i} y el valor es ${Datos[i]}`);
        }


//console.log(`la suma de los arreglos es: ${suma}`);

    } */ 
   //for..in
   /* for(let numeros in Datos){
    console.log (`los datos del arreglo son :${Datos[numeros]}`)
} */
//for ...each
/* Datos.forEach(function(numeros){
    console.log(numeros);
}) */
/* Datos.forEach(numeros=>console.log(numeros)) */
//while
/* let i=0;
while(i<Datos.length){ 
    console.log(Datos[i]);
    i++;
} */
/* let i=0;
do{
    console.log(Datos[i]);
    i++;
   }   while(i<Datos.length) */
      //map
/* Datos.map(numero=>console.log(numero*2)) */
//filter
/* const newArreglo=Datos.filter((numeros)=>{
    return numeros <7;
})
console.log(newArreglo); */
let suma=0;
Datos.reduce((a,b)=>suma=a+b)
console.log(suma);
}
DatosArreglos();
///modificaciones 