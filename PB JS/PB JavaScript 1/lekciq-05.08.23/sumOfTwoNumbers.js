function sumOfTwoNumbers (input) {

    let starstingInterval = Number(input[0]);
    let endingInterval = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCounter = 0
    let isFound = false

    for (let x = starstingInterval; x <= endingInterval; x++) {
        for (let y = starstingInterval; y <= endingInterval; y++) {
            combinationCounter++
            if ((x + y) === magicNum) {
                console.log(`Combination N:${combinationCounter} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1",
"10",
"5"])
