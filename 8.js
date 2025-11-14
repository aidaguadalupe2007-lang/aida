// Ejercicio 8: Calcular total de compra con descuentos
const prompt=require("prompt-sync")();
let subtotalLibros = 4*568;
subtotalLibros -= subtotalLibros * 0.20;

let subtotalDiscos = 3 * 45;
subtotalDiscos -= subtotalDiscos * 0.15;
let tocadiscos = 678;

let totalSinDescuento = subtotalLibros + subtotalDiscos + tocadiscos;
let totalFinal = totalSinDescuento - (totalSinDescuento * 0.02);

console.log( `El total Sin Descuento es:${totalFinal}pesos`);
