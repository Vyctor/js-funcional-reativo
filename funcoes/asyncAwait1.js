function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
}

executar = async () => {
  await esperarPor(2000);
  await esperarPor(3000);
  await esperarPor(4000);
};

executar();
