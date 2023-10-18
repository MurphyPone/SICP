const A = (x: number, y: number): number => {
    return y === 0
        ? 0
        : x === 0
            ? 2 * y
            : y === 1
                ? 2
                : A(x - 1, A(x, y - 1))
}

console.log(A(1, 10)) // 1024
console.log(A(2, 4)) // 65536
console.log(A(3, 3)) // 65536

// no idea how to figure this out w/p guess and check but:

function f(n: number): number {
    return A(0, n);
}

function g(n: number): number {
    return A(1, n);
}

function h(n: number): number {
    return A(2, n);
}

function k(n: number): number {
    return 5 * n * n;
}

const sampleVals: number[] = [0, 1, 2, 3, 4]
const funcs = [f, g, h] // 2n, 2^n, 2^(2^n)

funcs.forEach((fn) => {
    console.log(fn)
    sampleVals.forEach((i) => {
        console.log(fn(i))
    })
})
