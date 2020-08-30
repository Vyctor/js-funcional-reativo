Array.prototype.myReduce = function (fn, inicial = 0) {
  let accumulator = inicial;

  for (let i = 0; i < this.length; i++) {
    accumulator = fn(accumulator, this[i], i, this);
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arr.myReduce((acumulator, nextElement) => acumulator + nextElement);

console.log(sum);
