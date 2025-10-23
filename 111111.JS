const prompt = require("prompt-sync")();

function TablaMultiplicar() {
  let numero = parseInt(prompt("Ingresa un valor:"));
  let resultado = 0;

  if (numero > 0 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
      resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  } else {
    console.log("Valor inválido");
  }
}

TablaMultiplicar();