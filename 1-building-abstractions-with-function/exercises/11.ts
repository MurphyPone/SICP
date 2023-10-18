const f = (n: number): number => {
    if (n < 3) return n
    return f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3))
}

console.log(f(0))
console.log(f(1))
console.log(f(2))
console.log(f(3))
console.log(f(4))
console.log(f(6))

function f2(n: number): number {
    function iter(a: number, b: number, c: number, n: number): number {
        if (n === 2) return a;
        else if (n === 1) return b;
        else if (n === 0) return c;
        else return iter((a + 2 * b + 3 * c), a, b, (n - 1));
    }
    return iter(2, 1, 0, n);
}

console.log(f2(6))