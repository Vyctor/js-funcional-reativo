const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Deu ruim, capitão!");
    } else {
      resolve(valor);
    }
  });
};

funcionarOuNao("Alvo abatido!", 0.6)
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
