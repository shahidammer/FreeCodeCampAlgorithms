function convertHTML(str) {
    // Split by character to avoid problems.

    var entryObj = {
        '<': '&lt;',
        '&': '&amp;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    return str.split('').map(function(items) {
        if (entryObj.hasOwnProperty(items))
            return entryObj[items];
        else
            return items;
    }).join("");

}

convertHTML("Dolce & Gabbana");
