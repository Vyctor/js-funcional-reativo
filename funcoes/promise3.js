const gerarNumerosEntre = (min, max) => {
  if (min > max) {
    let [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    const fator = max - min + 1;
    const randomValue = parseInt(Math.random() * fator) + min;
    resolve(randomValue);
  });
};

gerarNumerosEntre(1, 60)
  .then((num) => num * 10)
  .then((numX10) => `O número gerado foi ${numX10}`)
  .then(console.log);
