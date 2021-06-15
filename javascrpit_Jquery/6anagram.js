console.log("Start");
//both string length should be same.
// both have same unique letter.
// should repeat same letter in both words.

function anagram1(str1, str2) {
    console.log("*********Method 1***********")
    var first = str1.toLowerCase()
    var second = str2.toLowerCase()
        // if both the string length are not same.
    if (first.length == second.length) {
        for (i = 0; i < first.length; i++) {
            var fcount = 0;
            var scount = 0;
            for (j = 0; j < first.length; j++) {
                if (first[i] == first[j]) {
                    fcount++;
                }
                if (first[i] == second[j]) {
                    scount++;
                }
            }
            if (fcount != scount) {
                console.log("Strings are not Anagram as string doesn't contain same letters");
                return;
            }
        }
        console.log("Strings are Anagram")
    } else {
        console.log("Strings are not anagram as length are not same");
    }
}
anagram1("SILENT", "Listen")

// simple clean method
function anagram2(str1, str2) {
    console.log("*********Method 2***********")
    var first = str1.toLowerCase()
    var second = str2.toLowerCase()

    if (sorted(first) == sorted(second)) {
        console.log("String are anagram");
    } else {
        console.log("String are not anagram");
    }

    function sorted(word) {
        word = word.split("").sort().join("");
        return word;
    }
}
anagram2("SILENT", "Lssten")