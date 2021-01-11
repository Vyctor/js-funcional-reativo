const { of, Observable } = require("rxjs");

function terminadoCom(parteFinal) {
  return function (fonte) {
    return Observable.create((subscriber) => {
      fonte.subscribe({
        next(valor) {
          if (Array.isArray(valor)) {
            subscriber.next(
              valor.filter((element) => element.endsWith(parteFinal))
            );
          } else if (valor.endsWith(parteFinal)) {
            subscriber.next(valor);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of("Ana Silva", "Maria Silva", "Pedro Rocha")
  .pipe(terminadoCom("Silva"))
  .subscribe(console.log);
