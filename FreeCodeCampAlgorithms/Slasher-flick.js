function mutation(arr) {
    var myArr=arr[0].toLowerCase().split("");
    var e=arr[1].toLowerCase().split("");

    return e.every(function(element){
        if(myArr.indexOf(element) == -1)
            return false;
         return true;
    });
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
