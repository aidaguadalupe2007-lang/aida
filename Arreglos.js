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
    let Datos =[3,7,9,3,2];
    let suma=0;
    for(i=0;i<Datos.length;i++){
        if((Datos[i])%2===0);
        suma+=Datos[i];
        //console.log(`la posicion es ${i} y el valor es ${Datos[i]}`);
        }


console.log(`la suma de los arreglos es: ${suma}`);

    }
DatosArreglos();