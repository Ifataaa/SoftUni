function sumPrimeNonPrime(input) {

    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    let command = input[index];
    index++;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++
            continue;
        }

        if (currentNum === 1) {
            primeSum += currentNum
            console.log("Number is negative.");
            command = input[index];
            index++
            continue;
        }
        let isPrime = true;
        for (let x = 2; x < currentNum; x++) {
            if (currentNum % x === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }
        command = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is:${primeSum}`);
    console.log(`Sum of all non prime numbers is:${nonPrimeSum}`);
}

sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
