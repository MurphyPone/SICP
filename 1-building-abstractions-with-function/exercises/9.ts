function inc(a: number): number { return a + 1 }
function dec(a: number): number { return a - 1 }

function plus_1(a: number, b: number): number {
    console.log(a, b, a == 0)
    return a === 0 ? b : inc(plus_1(dec(a), b));
}

function plus_2(a: number, b: number): number {
    console.log(a, b, a == 0)
    return a === 0 ? b : plus_2(dec(a), inc(b));
}

console.log(plus_1(4, 5))
/**  recursive

    inc(plus(dec(4), 5))
    inc(plus(3, 5))
    inc(inc(plus(dec(3), 5)))
    inc(inc(plus(2, 5)))
    inc(inc(inc(plus(dec(2), 5)))
    inc(inc(inc(plus(1, 5))))
    inc(inc(inc(inc(plus(dec(1), 5)))))
    inc(inc(inc(inc(plus(0, 5)))))
    inc(inc(inc(inc(5))))
    inc(inc(inc(6)))
    inc(inc(7))
    inc(8)
    9

    4 5 false
3 5 false
2 5 false
1 5 false
0 5 true
9
*/

console.log(plus_2(4, 5))

/**
    plus(dec(4), inc(5));
    plus(3, 6);
    plus(dec(3), inc(6));
    plus(2, 7);
    plus(dec(2), inc(7));
    plus(1, 8);
    plus(dec(1), inc(8));
    plus(0, 9);
    9

4 5 false
3 6 false
2 7 false
1 8 false
0 9 true
9
 */