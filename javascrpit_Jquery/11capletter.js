function capeachletter(str) {
    var arr = str.toLowerCase().split(" ");
    arr = arr.map((m) => {
        m = m.charAt(0).toUpperCase() + m.slice(1);
        return m;
    })

    arr = arr.join(" ");

    console.log(arr);
    arr.map()
}

capeachletter("h E ll o   w OR Ld")