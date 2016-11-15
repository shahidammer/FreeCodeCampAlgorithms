
function dropElements(arr, func) {
    var leng = arr.length;
    var newArr = arr;
    var myFunc = func;
    for (var i = 0; i < leng; i++) {
        if (myFunc(arr[0]))
            break;
        else
            newArr.shift();
    }

    return arr;
}
dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
});
