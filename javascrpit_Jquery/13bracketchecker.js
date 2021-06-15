function BracketChecker(str) {
    //to remove anything escape brackets
    let repstr = str.replace(/[^(\(\)\[\]\{\})]/g, "");
    console.error(repstr);
    //Removing bracket pair
    for (let i = 0; i < str.length ** 2; i++) {
        var before = repstr.length;
        repstr = repstr.replace(/[\(\)|\[\]|\{\}]/g, "");
        var after = repstr.length;
        if (before == after) {
            break;
        }
    }

    if (repstr.length == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
    return;
}

BracketChecker('hel(l){}([({}{()([])})])o{}w(orld)');