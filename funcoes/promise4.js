const gerarNumerosEntre = (min, max, tempo) => {
  if (min > max) {
    let [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const randomValue = parseInt(Math.random() * fator) + min;
      resolve(randomValue);
    }, tempo);
  });
};

console.time("promise");

const gerarVariosNumeros = () => {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ]);
};

gerarVariosNumeros()
  .then((numeros) => console.log(numeros))
  .then(() => {
    console.timeLog("promise");
    console.timeEnd("promise");
  });
