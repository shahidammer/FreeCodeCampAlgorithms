function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var i = 0;
    var index = 0;

    arr.sort(function(a, b) {
        return a - b;
    });


    while (num > arr[i]) {
        i++;
        index = i;
    }
    return index;
}

getIndexToIns([40, 60], 50);
