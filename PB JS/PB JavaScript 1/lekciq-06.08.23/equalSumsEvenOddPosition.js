function equalSumsEvenOddPosition(input) {

    let startInt = Number(input[0]);
    let endInt = Number(input[1]);
    let buff = "";

    for (let i = startInt; i <= endInt; i++) {
        let numAsString = String(i)
        let sumEvenPosition = 0;
        let sumOddPosition = 0;
        for (let ch = 0; ch < numAsString.length; ch++) {
            if (ch % 2 === 0) {
                sumEvenPosition += Number(numAsString[ch]);
            } else {
                sumOddPosition += Number(numAsString[ch])
            }
        }
        if (sumEvenPosition === sumOddPosition) {
            buff += `${numAsString} `
        }
    }
    console.log(buff);
}

equalSumsEvenOddPosition(["100000",
    "100050"])
