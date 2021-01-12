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

module.exports = { readPath, elementsEndingWith, readFile };
