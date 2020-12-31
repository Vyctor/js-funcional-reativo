function ordernar(array) {
  return [...array].sort();
}

const numeros = [3, 5, 1, 7, 2, 8, 4, 6];

const ordenados = ordernar(numeros);

console.log(numeros);
console.log(ordenados);
