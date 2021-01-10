const { of } = require("rxjs");
const { map, last } = require("rxjs/operators");

of(1, 2, "ana", false, "ultimo")
  .pipe(
    last(),
    map((value) => value[0])
  )
  .subscribe((valor) => {
    console.log("A letra encontrada foi: ", valor);
  });
