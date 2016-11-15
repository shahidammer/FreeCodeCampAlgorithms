
function smallestCommons(arr) {
    var newArr=[];
    var count=0;
    var num;

    arr=arr.sort(function(a,b){
        return a-b;
    });

    for(var a=arr[0];a<=arr[arr.length -1];a++){
        newArr.push(a);
    }

    console.log(newArr);
  //
    outerloop:
    for(var i=newArr[newArr.length -1]; i>0; i++){
        for(var j=0;j<newArr.length;j++){
            console.log("i: "+i+" j: ",j);
            if(i%newArr[j]===0)
                count++;
            else
                break;

            if(count===newArr.length){
                console.log("count",count);
                num=i;
                break outerloop;
            }
        }
        count=0;
    }
    // console.log(num);
  return num;
}

smallestCommons([23, 18]);
