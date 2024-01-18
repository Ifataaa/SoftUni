function traveling(input) {
    let destination = input[0];
    let neededMoney = Number(input[1]);
    
    let index = 2;
    let collectedMoney = 0;
    let currentMoney = Number(input[index]);

    while (destination !== "End") {
        while (collectedMoney < neededMoney) {
            currentMoney = Number(input[index]);
            collectedMoney += currentMoney;
            index++;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        neededMoney = Number(input[index + 1]);
        index += 2;
        collectedMoney = 0;
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
