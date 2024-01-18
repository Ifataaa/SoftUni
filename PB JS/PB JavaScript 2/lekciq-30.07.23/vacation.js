function vacation (input) {

    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    
    let index = 2;
    let command = input[index];
    index++

    let spendDays = 0;
    let days = 0

    while (availableMoney > 0) {
        index++
        days++

        let operationMoney = Number(input[index]);

        switch(command) {
            case "spend":
                spendMoney += operationMoney;
                availableMoney -= spendMoney;
                spendDays++;


                if (spendDays === 5) {
                    spendDays = 0;
                    console.log(`You can't save the money.`);
                    console.log(`${days}`);
                    break;
                }
            break;
            case "save":
                savedMoney += operationMoney;
                availableMoney += savedMoney;
            break;
        }

        if (spendDays === 5) {
            spendDays = 0;
            console.log(`You can't save the money.`);
            console.log(`${days}`);
        }

        index++
        command = input[index]

    }     
    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
