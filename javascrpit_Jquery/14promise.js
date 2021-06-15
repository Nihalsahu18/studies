var MyFirstPromise = new Promise(function(resolve, reject) {
    conditions = true;
    if (conditions) {
        resolve("Promise is fulfilled 1");
    } else {
        reject("Promise is rejected 2");
    }
});
//MyFirstPromise.then((m) => console.log("Inside " + m)).catch((e) => console.error("Error " + e));
console.log(MyFirstPromise);

function printdata(data) {
    console.log(data);
    return data;
}

async function test() {
    console.log("inside async test function 1");
    let num = 10;
    await printdata("test set 1");
    await printdata("test set 2");

    setTimeout(() => {
        console.log("inside async set timeout test function 2");
    }, 00)

    await printdata("test set 3");
    return num;
}


//test().then((m) => console.log("Asyc Then " + m)).catch((e) => console.error("Asyc Error " + e))
console.log(test());