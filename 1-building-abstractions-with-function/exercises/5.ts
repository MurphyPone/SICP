function p() {
  return p();
}

function test(x: number, y) {
  return x === 0 ? 0 : y;
}

test(0, p());

// What behavior will Ben observe with an interpreter that uses applicative-order evaluation?
// What behavior will he observe with an interpreter that uses normal-order evaluation?
// Explain your answer. (Assume that the evaluation rule for conditional expressions is the same
// whether the interpreter is using normal or applicative order:
//  The predicate expression is evaluated first, and the result determines whether to evaluate
//  the consequent or the alternative expression.)

// For applicative-order eval (eager): the code will loop infinitely since y will never resolve
// For normal-order eval (lazy): the code will return 0 since y never needs to be evaluated
