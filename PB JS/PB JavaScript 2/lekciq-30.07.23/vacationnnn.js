function vacation(input) {

    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let command = input[index];

    let savedMoney = 0
    let spendMoney = 0
    let spendDays = 0;
    let days = 0

    while (index < input.length) {
        index++
        days++

        let operationMoney = Number(input[index]);

        switch (command) {
            case "spend":
                spendMoney += operationMoney;
                availableMoney -= spendMoney;
                if (availableMoney < 0) {
                    availableMoney = 0;
                }
                spendDays++;


                if (spendDays === 5) {
                    console.log(`You can't save the money.`);
                    console.log(`${days}`);
                    break;
                }
                break;
            case "save":
                spendDays = 0;
                savedMoney += operationMoney;
                availableMoney += savedMoney;
                break;
        }
        index++
        command = input[index]
    }
    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
