// https://www.codewars.com/kata/54d496788776e49e6b00052f

const isPrime = (n) => {
    n = Math.abs(n);
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const getPrimeFactors = (n) => {
    n = Math.abs(n);
    const rep = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) && n % i === 0) {
            rep.push(i);
        }
    }
    return rep;
};

function sumOfDivided(lst) {
    const rep = [];
    const allPrimeFactors = [];
    for (let num of lst) {
        const primeFactors = getPrimeFactors(num);
        for (let primeFactor of primeFactors) {
            if (!allPrimeFactors.includes(primeFactor)) {
                allPrimeFactors.push(primeFactor);
            }
        }
    }
    allPrimeFactors.sort((a, b) => a - b);
    for (let primeFactor of allPrimeFactors) {
        let sum = 0;
        for (let num of lst) {
            if (num % primeFactor === 0) {
                sum += num;
            }
        }
        rep.push([primeFactor, sum]);
    }

    return rep;
}
