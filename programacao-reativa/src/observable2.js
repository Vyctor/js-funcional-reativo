const { Observable } = require("rxjs");

const observable = new Observable((observer) => {
  if (Math.random() > 0.5) {
    observer.next("RxJS");
    observer.next("é");
    observer.next("bem");
    observer.next("poderoso!");
    observer.complete();
  } else {
    observer.error("Que problema?!?!");
  }
});

observable.subscribe(
  (value) => console.log("Valor: ", value),
  (error) => console.log("Erro: ", error),
  () => console.log("FIM")
);

observable.subscribe({
  next(valor) {
    console.log("Valor: ", valor);
  },
  error(error) {
    console.log("Erro: ", error);
  },
  complete() {
    console.log("FIM!");
  },
});
