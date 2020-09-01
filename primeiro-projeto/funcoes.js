const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map((arquivo) => {
        return path.join(caminho, arquivo);
      });
      resolve(arquivosCompletos);
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function elementosTerminadosCom(terminadoCom) {
  return function (array) {
    return array.filter((elemento) => elemento.endsWith(terminadoCom));
  };
}

function removerElementosSeVazio(array) {
  return array.filter((elemento) => elemento.trim());
}

function removerElementosSeIncluir(valor) {
  return function (array) {
    return array.filter((elemento) => !elemento.includes(valor));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter((elemento) => {
    const num = parseInt(elemento.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((elemento) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("");
      }, elemento);
    });
  };
}

function mesclarElementos(array) {
  return array.join(" ");
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
};
