const { Observable } = require("rxjs");

function elementosComDelay(tempo, ...elementos) {
  return Observable.create((subscriber) => {
    (elementos || []).forEach((elemento, index) => {
      setTimeout(() => {
        subscriber.next(elemento);
        if (elementos.length === index + 1) {
          subscriber.complete();
        }
      }, tempo * (index + 1));
    });
  });
}

elementosComDelay(1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10).subscribe(console.log);
