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

function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
      return fn(acc);
    }, valor);
  };
}

function agruparPalavras(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const elemento = palavra.toLowerCase();
      const qtde = acc[elemento] ? acc[elemento].qtde + 1 : 1;

      acc[elemento] = { elemento: elemento, qtde };

      return acc;
    }, {})
  );
}

function ordenarPorAtributoNumerico(atributo, ordem) {
  return function (array) {
    const asc = (o1, o2) => o2[atributo] - o1[atributo];
    const desc = (o1, o2) => o1[atributo] - o2[atributo];
    return array.sort(ordem === "asc" ? asc : desc);
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
  composicao,
  agruparPalavras,
  ordenarPorAtributoNumerico,
};
