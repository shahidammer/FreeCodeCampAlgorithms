function sumAll(arr) {
    var myArr=[];
    for(var i= Math.min.apply(null, arr); i<=Math.max.apply(null, arr);i++ )
        myArr.push(i);

  return myArr.reduce(function(accum,next){
        return accum+next;
    });
}

sumAll([1, 4]);
