const sqrt = (x: number): number => {
  return sqrtIter(1, x);
};

const sqrtIter = (guess: number, x: number): number => {
  return conditional(
    isGoodEnough(guess, x),
    () => guess,
    () => sqrtIter(improve_2(guess, x), x),
  );
};

const conditional = (predicate, then_clause, else_clause) => {
  return predicate ? then_clause() : else_clause();
};

const isGoodEnough = (
  guess: number,
  x: number,
  tolerance = 0.0001,
): boolean => {
  return Math.abs((guess * guess * guess) - x) < tolerance;
};

const improve = (guess: number, x: number) => {
  return average(guess, x / guess);
};

const average = (x: number, y: number): number => {
  return (x + y) / 2;
};

const improve_2 = (guess: number, x: number) => {
  let y = guess;
  let y2 = guess * guess;

  return (x / y2 + (2 * y)) / 3;
};

console.log(sqrt(8));
// console.log(sqrt(1e-10)); // doesn't work for small, should be 0.00001 but is 0.0078...
// console.log(sqrt(1e10)); // doesn't work for big,
