function exec(fn, a, b) {
  return fn(a, b);
}

somarNoTerminal = (a, b) => console.log(a + b);
subtrairNoTerminal = (a, b) => console.log(a - b);

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);
