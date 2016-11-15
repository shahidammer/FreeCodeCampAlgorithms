function truncateString(str, num) {
    // Clear out that junk in your trunk
    //    num=str.length-num;
    var myStr;
    if (str.length > num) {
        if (num > 3) num -= 3;
        return str.substring(0, num).concat("...");
    } else
        return str.substring(0, num);



}

truncateString("Peter Piper picked a peck of pickled peppers", 14);
