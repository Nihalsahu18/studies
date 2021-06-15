function wordcount2(str) {
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;

        }
    }
    return count;
}