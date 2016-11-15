function largestOfFour(arr) {

    return arr.map(function(line) {
        var maxNum = 0;
        return line.reduce(function(acc, obj) {
            if (obj > maxNum) {
                maxNum = obj;

            }
            return maxNum;

        }, maxNum);
    });
}

largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
