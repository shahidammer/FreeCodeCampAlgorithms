function palindrome(str) {

    str = str.replace(/\W/g, '').replace("_", "");
    var newStr = str.split("").reverse().join("");

    return newStr.toLowerCase() === str.toLowerCase();
}



palindrome("eye");
