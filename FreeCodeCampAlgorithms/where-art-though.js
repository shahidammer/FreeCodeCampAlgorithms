function whatIsInAName(collection, source) {
    var arr = [];
    var srcKey = Object.keys(source);

    return collection.filter(function(cObj) {
        return srcKey.every(function(key){
            return cObj.hasOwnProperty(key) && cObj[srcKey] === source[srcKey];
        });
    });
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
