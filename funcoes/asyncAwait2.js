const gerarNumerosEntre = (min, max, numeroProibidos) => {
  if (min > max) {
    let [max, min] = [min, max];
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const randomValue = parseInt(Math.random() * fator) + min;
    if (numeroProibidos.includes(randomValue)) {
      reject("Número repetido");
    }
    resolve(randomValue);
  });
};

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (error) {
    if (tentativas > 10) {
      throw "Que chato";
    }
    return gerarMegaSena(qtdeNumeros, tentativas++);
  }
}

gerarMegaSena(6).then(console.log).catch(console.log);
