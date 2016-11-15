


function pairElement(str) {
    var myArr= str.split("");
    var pairs = {A: "T",T: "A",G: "C",C: "G"};

    return myArr.map(function(val){
        return [val, pairs[val]];
    });
}

pairElement("GCG");
