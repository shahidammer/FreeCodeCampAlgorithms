
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

    newArr= arr1.concat(arr2);

    var filtered1 = newArr.filter(function(value) {
        if(arr2.indexOf(value)===-1)
            return value;
        if(arr1.indexOf(value)===-1)
            return value;

    });
  return filtered1;
}


diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
