function cleverLily (input) {

    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    
    let savedMoney = 0;
    let toys = 0;
    let stolenMoney = 0;
    let evenBd = 0
   
    
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            evenBd++;
            savedMoney += evenBd * 10;
            stolenMoney++
        } else {
            toys++
        }
    }

    let toysTotalPrice = toys * toyPrice;
    let sum = savedMoney + toysTotalPrice - stolenMoney;

    if (sum >= washingMachine) {
        console.log(`Yes! ${(sum - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - sum).toFixed(2)}`);
    }
}

cleverLily(["10",
"170.00",
"6"])
