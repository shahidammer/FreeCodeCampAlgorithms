function uniteUnique(arr) {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function(a, b) {
        return a.concat(b);
        }).filter( function(value, index, array) {
        return array.indexOf(value) === index;

    } );
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
