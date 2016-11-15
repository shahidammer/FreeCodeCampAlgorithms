function repeatStringNumTimes(str, num) {
    // repeat after mr
    var myStr = "";
    if(!num) return str;
    for (var i = 0; i < num; i++)
        myStr = myStr.concat(str);

    return myStr;
}

repeatStringNumTimes("abc",5);
