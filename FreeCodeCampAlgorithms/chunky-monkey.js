function chunkArrayInGroups(arr, size) {
    var finalArr = [];
    for (var i = 0; i < arr.length; i = i + size) {
        finalArr.push(arr.slice(i, i + size));
    }
    return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

// 0,2,4
