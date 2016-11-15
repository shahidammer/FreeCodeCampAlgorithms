function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments).slice(1);
    return arr.filter(function(val) {
        if (args.indexOf(val) === -1)
            return val;
    });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
