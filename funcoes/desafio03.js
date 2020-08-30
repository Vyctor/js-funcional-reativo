const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

const lerArquivo = (caminho) => {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString());
    });
    console.log("Depois de ler");
  });
};

lerArquivo(caminho)
  .then((conteudo) => conteudo.split("\n"))
  .then((linhas) => linhas.join(","))
  .then((conteudo) => `O valor final é ${conteudo}`)
  .then((valorFinal) => console.log(valorFinal));
