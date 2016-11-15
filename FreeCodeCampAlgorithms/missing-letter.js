function fearNotLetter(str) {

    var code;
    console.log(str.charCodeAt(1) - str.charCodeAt(0));
    for(var i=0; i<str.length-1; i++){
        if(str.charCodeAt(i+1) - str.charCodeAt(i) !== 1){
            code=str.charCodeAt(i);
            return String.fromCharCode(code+1);
        }
    }

  return undefined;
}

fearNotLetter("abce");
