function steamrollArray(ary) {
    return ary.reduce(function(a, b) {
        if (Array.isArray(b)) {
            return a.concat(steamrollArray(b));
        }
        return a.concat(b);
    }, []);
}
steamrollArray([1, [2], [3, [[4]]]]);
