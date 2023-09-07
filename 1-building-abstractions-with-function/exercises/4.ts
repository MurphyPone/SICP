// Observe that our model of evaluation allows for applications whose function expressions are compound expressions.
// Use this observation to describe the behavior of a_plus_abs_b

function plus(a: number, b: number): number {
  return a + b;
}
function minus(a: number, b: number): number {
  return a - b;
}
function a_plus_abs_b(a: number, b: number): number {
  return (b >= 0 ? plus : minus)(a, b);
}

// a_plus_abs_b determine if a umber is non-negative, and if so performs addition
// if the number is negative, it performs subtraction which is equivalent if b is negative since a - (-b) = a + b
