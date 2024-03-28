// https://www.codewars.com/kata/54d4c8b08776e4ad92000835

var isPP = function (n) {
    for (let m = 2; m * m <= n; m++) {
        const k = Math.round(Math.log(n) / Math.log(m));
        if (Math.pow(m, k) === n) return [m, k];
    }
    return null;
};
