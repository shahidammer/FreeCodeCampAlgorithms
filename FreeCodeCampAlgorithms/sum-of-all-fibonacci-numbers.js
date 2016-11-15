
function sumFibs(num) {
    var result = 1;
    var first = 1,
        second = 1,
        arr = [];
    result = first + second;
    arr.push(first);
    arr.push(second);
    while (result <= num) {
        arr.push(result);
        first = result;
        result = result + second;
        second = first;
    }
    return arr.reduce(function(a, b) {
        if (b % 2 === 1)
            return a + b;
        else
            return a;
    }, 0);

}

sumFibs(75025);
