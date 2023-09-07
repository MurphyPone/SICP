const sqrt = (x: number): number => {
  return sqrtIter(1, x);
};

const sqrtIter = (guess: number, x: number): number => {
  return conditional(
    isGoodEnough(guess, x),
    () => guess,
    () => sqrtIter(improve(guess, x), x),
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
  return Math.abs((guess * guess) - x) < tolerance;
};

const improve = (guess: number, x: number) => {
  return average(guess, x / guess);
};

const average = (x: number, y: number): number => {
  return (x + y) / 2;
};

console.log(sqrt(9));
