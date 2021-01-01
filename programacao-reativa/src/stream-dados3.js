const { interval } = require("rxjs");

const gerarNumeros = interval(500);

const sub1 = gerarNumeros.subscribe((data) => {
  console.log(data);
});

setTimeout(() => sub1.unsubscribe(), 8000);
