// https://www.codewars.com/kata/53d40c1e2f13e331fc000c26

function fib(n) {
    if (n === 0 || n === 1) return BigInt(n);
    // cas où n est paire
    else if (n >= 2 && n % 2 === 0) {
        let k = n / 2;
        let fk = fib(k);
        return (2n * fib(k - 1) + fk) * fk;
    }

    // cas où n est impaire
    else if (n >= 2) {
        let k = (n + 1) / 2;
        let fk1 = fib(k - 1);
        let fk2 = fib(k);
        return fk2 * fk2 + fk1 * fk1;
    }

    // cas où n est négatif
    else {
        let a = 0n;
        let b = 1n;
        for (let i = 0; i > n; i--) {
            [a, b] = [b - a, a];
        }
        return a;
    }
}
