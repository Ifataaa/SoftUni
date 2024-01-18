function numberPyramid(input) {
    let n = Number(input[0]);

    let currentNum = 1;
    let isBigger = false;


    for (let row = 1; row <= n; row++) {
        let buff = "";
        for (let column = 1; column <= row; column++) {
            buff += `${currentNum} `;
            if (currentNum === n) {
                isBigger = true;
                break;
            }
            currentNum++

        }
        console.log(buff);
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["7"])