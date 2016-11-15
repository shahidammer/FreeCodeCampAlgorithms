function rot13(str) { // LBH QVQ VG!
    var arr = str.toUpperCase().split("");
    var amount = 13;
    var temp = [];

    return arr.reduce(function(accum,item) {
        return appendStr(item);
    },"");



    function appendStr(item) {
        if (item.match(/[A-Z]/i)) {
            var charCode = item.charCodeAt(0);
            item = String.fromCharCode(((charCode - 65 + amount) % 26) + 65);
        }
        return temp += item;
    }



}
rot13("SERR PBQR PNZC");
