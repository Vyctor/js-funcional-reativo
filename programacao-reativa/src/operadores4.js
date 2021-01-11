const { from, Observable } = require("rxjs");
const { last } = require("rxjs/operators");

function primeiro() {
  return (source) => {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.next(v + 1000);
        },
      });
    });
  };
}

function nenhum() {
  return (source) => {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return (source) => {
    return Observable.create((subscriber) => {
      let ultimo;
      source.subscribe({
        next(v) {
          ultimo = v;
        },
        complete() {
          if (ultimo !== undefined) {
            subscriber.next(ultimo);
          }
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5])
  .pipe(nenhum(), ultimo(), primeiro())
  .subscribe(console.log);
