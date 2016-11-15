function truthCheck(collection, pre) {
    var fArray = collection.filter(function(val) {
        return val.hasOwnProperty(pre) && val[pre];
    });

    console.log(fArray + " = " + collection);

    if (fArray.length === collection.length)
        return true;


    return false;

}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
