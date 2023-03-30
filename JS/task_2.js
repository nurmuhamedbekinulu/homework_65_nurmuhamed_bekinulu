numArray1 = [1, 5, 12, 4, 3];
numArray2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray3 = [3, 10, 17];

function fnAvg(numArray) {
    let sum = numArray.reduce((total, value) => total + value, 0);
    let avg = sum / numArray.length;
    return avg;
};

console.log(fnAvg(numArray1));
console.log(fnAvg(numArray2));
console.log(fnAvg(numArray3));