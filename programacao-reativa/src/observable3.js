const { Observable, noop } = require("rxjs");

function imprimirEntre(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Observable((observer) => {
    for (let index = min + 1; index < max; index++) {
      observer.next(index);
    }
    observer.complete();
  });
}

imprimirEntre(1, 10).subscribe(
  (number) => console.log(number),
  noop,
  () => console.log("FIM")
);
