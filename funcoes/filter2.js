Array.prototype.myFilter = function (fn) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

const pares = (item) => item % 2 === 0;

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const paresFilter = arr.filter(pares);
const paresMyFilter = arr.myFilter(pares);

console.log(paresFilter);
console.log(paresMyFilter);
