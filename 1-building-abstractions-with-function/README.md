## Evaluation Order

**Applicative Order** -  Evaluate the arguments, then apply (what the interpreter actually does)

```js
sumOfSquares(5 + 1, 5 * 2)
sumOfSquares(6, 10)

square(6) + square(6)

36 + 100

136
```

**Normal Order** - Fully expand expressions, then reduce. 

```js
sumOfSquares(5 + 1, 5 * 2)

square(5 + 1) + square(5 * 2)

(5 + 1) * (5 + 1) + (5 * 2) * (5 * 2)

6 * 6 + 10 * 10

36 + 100

136
```

>  It can be shown that, for function applications that can be modeled using substitution and that yield legitimate values, normal-order and applicative-order evaluation produce the same value.

Applicative Order tends to be more efficient since we only have to compute arguments once, even if they're used multiple times further up the callstack

Bastard nested ternary operations:

```js
function abs(x) { 
    return x > 0
    ? x
    : x === 0 ?0
    : - x;
}
```

The general form is:

```js 
const expression = p1 
                    ? e1
                    : p2
                    ? e2
                    .
                    .
                    .
                    : pn
                    ? en
                    : defaultCase
```

## Operator Precedence

- multplication and division have higher precedence than addition, multiplication which governs how they behave w/o parens
- conditionals are right associative
- unary operators preceed binary operators