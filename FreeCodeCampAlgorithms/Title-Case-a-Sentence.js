function titleCase(str) {
    return str.split(" ").map(function(val) {
        var trimArr = val.slice(0, 1).toUpperCase();
        return trimArr.concat(val.slice(1, val.length).toLowerCase());
    }).join(" ");
}

titleCase("I'm a little tea pot");
