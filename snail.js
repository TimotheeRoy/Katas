// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function (array) {
    let rep = [];
    let [top, bottom, left, right] = [
        0,
        array.length - 1,
        0,
        array[0].length - 1,
    ];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            rep.push(array[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            rep.push(array[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                rep.push(array[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                rep.push(array[i][left]);
            }
            left++;
        }
    }

    return rep;
};
