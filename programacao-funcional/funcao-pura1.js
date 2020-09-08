const PI = 3.14;

// função impura pois depende do valor de PI, que está fora da função.
function areaCirculo(raio) {
  return Math.pow(raio, 2) * PI;
}

// Refatorada para uma função pura, não dependendo de nada fora da função.
function areaCirculoPura(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCirculo(10));
console.log(areaCirculoPura(10, 3.14));
