const numeros = [3, 5, 1, 7, 2, 8, 4, 6];

// Estratégia #1 - Dados Mutáveis
let total = 0;
for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
console.log("Soma: ", total);

// Estratégia #2 - Reduce
const somar = (a, b) => a + b;
const totalSoma = numeros.reduce(somar);
console.log("Soma: ", totalSoma);

// Estratégia #3 - Recursiva
function somarArray(array, total = 0) {
  if (array.length === 0) return total;
  return somarArray(array.slice(1), total + array[0]);
}
const somaArray = somarArray(numeros);
console.log("Soma: ", somaArray);
