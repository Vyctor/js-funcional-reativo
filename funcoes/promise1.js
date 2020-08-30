let promise = new Promise((fulfillPromise) => {
  fulfillPromise([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

const numerosPares = (value) => value.filter((x) => x % 2 === 0);
const printNumero = (value) => console.log(value);

promise.then(numerosPares).then(printNumero);
