function addTogether() {
    function checkNum(num) {
        if (typeof num === 'number')
            return num;
        else
            return undefined;
    }
    var args = Array.prototype.slice.call(arguments);
    console.log(args);

    if (args.length > 1) {

        return args.reduce(function(a, b) {
            if (checkNum(a) && checkNum(b))
                return a + b;
            else
                return undefined;
        });

    }
    else {
        if (checkNum(args[0])) {
            return function(arg2) {
                if (args[0] === undefined || checkNum(arg2) === undefined)
                    return undefined;
                else
                    return args[0] + arg2;
            };
        }
        else
            return undefined;
    }

}



addTogether(2, 3);
