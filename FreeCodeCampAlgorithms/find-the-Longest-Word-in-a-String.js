function findLongestWord(str) {
    var arr = [];
    var maxVal = 0;
    arr = str.split(" ").filter(function(val) {
        if (val.length > maxVal) {
            maxVal = val.length;
            return val.length;
        }

    });

    return arr[arr.length-1].length; //left of the final element of the array
}

findLongestWord("The quick brown fox jumped over the lazy dog");
