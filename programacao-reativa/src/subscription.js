/**
 * Esperar  3000 milliseconds
 * gerar numeros de 500ms em 500ms
 * apos 10 segundos unsubscribe
 */

const { timer } = require("rxjs");

const delay = timer(3000, 500).subscribe((value) => {
  console.log(`${(value + 1) * 500} ms`);
  if (value === 19) {
    delay.unsubscribe();
  }
});
