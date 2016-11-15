function sumPrimes(num) {

    var arr = [];
    var isPrime = false;
    var result = 0;
    for (var i = 2; i <= num; i++) {
        isPrime = true;
        for (var j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            result += i;
    }

    return result;
}

sumPrimes(925);
