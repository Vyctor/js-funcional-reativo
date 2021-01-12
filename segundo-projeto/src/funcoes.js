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

module.exports = { readPath };
