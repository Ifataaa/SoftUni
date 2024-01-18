function accountBalance (input) {

    let index = 0;
    let accMoney = 0;
    
    let command = input[index];
    index++;


    while (command !== "NoMoreMoney") {
        let deposit = Number(command);

        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        }
        
        accMoney += deposit;
        console.log(`Increase: ${deposit.toFixed(2)}`);
        
        command = input[index];
        index++
    }
    console.log(`Total: ${accMoney.toFixed(2)}`);
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
