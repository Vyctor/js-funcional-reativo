const fs = require("fs");
const path = require("path");

const { Observable } = require("rxjs");

function readPath(dirPath) {
  return new Observable((subscriber) => {
    try {
      const files = fs.readdirSync(dirPath).forEach((file) => {
        return subscriber.next(path.join(dirPath, file));
      });
      subscriber.complete("");
    } catch (error) {
      subscriber.error(error);
    }
  });
}

function elementsEndingWith(textPattern) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.endsWith(textPattern)) {
        subscriber.next(text);
      }
    },
  }));
}

function readFile() {
  return createPipeableOperator((subscriber) => ({
    next(filePath) {
      try {
        const content = fs.readFileSync(filePath, { encoding: "utf-8" });
        subscriber.next(content.toString());
        subscriber.complete();
      } catch (error) {
        subscriber.error();
      }
    },
  }));
}

function separateTextBy(symbol) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      text.split(symbol).forEach((part) => {
        subscriber.next(part);
      });
    },
  }));
}

function removeElementIfEmpty() {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.trim()) {
        subscriber.next(text);
      }
    },
  }));
}

function removeElementIfOnlyNumbers() {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const number = parseInt(text.trim());
      if (number !== number) subscriber.next(text);
    },
  }));
}

function removeSymbols(symbols) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const textWithoutSymbols = symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, text);
      subscriber.next(textWithoutSymbols);
    },
  }));
}

function groupWords() {
  return createPipeableOperator((subscriber) => ({
    next(words) {
      const grouped = Object.values(
        words.reduce((acc, word) => {
          const element = word.toLowerCase();
          const qtd = acc[element] ? acc[element].qtd + 1 : 1;
          acc[element] = { elemento: element, qtd: qtd };
          return acc;
        }, {})
      );
      subscriber.next(grouped);
    },
  }));
}

function createPipeableOperator(operatorFn) {
  return function (source) {
    return Observable.create((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || ((e) => subscriber.complete(e)),
      });
    });
  };
}

module.exports = {
  readPath,
  elementsEndingWith,
  readFile,
  separateTextBy,
  removeElementIfEmpty,
  removeElementIfOnlyNumbers,
  removeSymbols,
  groupWords,
};
