const { Observable, noop } = require("rxjs");

function imprimirEntre(min, max) {
  return new Observable((observer) => {
    Array(max - min + 1)
      .fill()
      .map((_, i) => {
        observer.next(min + i);
      });
    observer.complete();
  });
}

imprimirEntre(4, 10).subscribe(
  (number) => console.log("num =", number),
  noop,
  () => console.log("FIM!")
);
