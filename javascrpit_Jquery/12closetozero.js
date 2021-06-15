function CloseToZero(arr) {
    let len = arr.length;
    let arrspace = arr.join('').trim();
    if (!len) {
        console.log("Temperature is 0 as no input given");
        return;
    } else if (!arrspace.length) {
        console.log("Temperature closest to 0 is 0 as no valid input given [" + arr + ']');
        return;
    } else if (arr.indexOf(0) > -1) {
        console.log("Temperature closest to 0 is 0 from given inputs [" + arr + ']');
        return;
    }
    let closest = 0;
    let posclosest = 0;
    let negclosest = 0;

    for (let i = 0; i < len; i++) {

        if (closest === 0) {
            closest = arr[i];
            posclosest = arr[i];
            negclosest = arr[i];
        } else if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
            closest = arr[i];
            posclosest = arr[i];
        } else if (arr[i] < 0 && -arr[i] <= Math.abs(closest)) {
            closest = arr[i];
            negclosest = arr[i];
        }
    }
    if (posclosest === -negclosest) {
        console.log("Temperature closest to 0 are " + posclosest + " & " + negclosest + " from given inputs [" + arr + ']');
        return;
    } else {
        console.log("Temperature closest to 0 is " + closest + " from given inputs [" + arr + ']');
        return;
    }

}

CloseToZero([]);
CloseToZero([" "]);
CloseToZero([-1, 0, -5, 2, 18]);
CloseToZero([1, -10, -1, 2, 18]);
CloseToZero([5, -10, -1, 2, 18]);
CloseToZero([5, 10, 1, 2, 18]);
CloseToZero([-5, -10, -1, -2, -18]);
CloseToZero([-5, -11, -1, -2, -18]);