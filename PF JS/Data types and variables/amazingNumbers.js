function amazingNumbers(num) {
    let numToString = String(num);
    let sum = 0;
    let res = ""

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i])
    }

    let sumToString = String(sum);

    for (let i = 0; i < sumToString.length; i++) {
        if (Number(sumToString[i] == 9)) {
            res += "Amazing? True"
        } else {
            res += "Amazing? False"
        }
    }
    console.log(`${num} ${res}`);
}

amazingNumbers(1233)