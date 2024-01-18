function spaceTravel(input) {
    let operations = input[0];
    let commands = operations.split("||");
    let startingFuel = Number(input[1]);
    let startingAmmunition = Number(input[2]);

    for (let i = 0; i < commands.length; i++) {
        let currCommandArr = commands[i].split(' ');
        let currCommand = currCommandArr[0];

        if (currCommand.includes("Travel")) {
            let lightYears = Number(currCommandArr[1]);
            if (!isNaN(lightYears)) {
                startingFuel -= lightYears;
                if (startingFuel >= 0) {
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                } else {
                    console.log("Mission failed.");
                    return;
                }
            }
        } else if (currCommand.includes("Enemy")) {
            let enemyArmor = Number(currCommandArr[1]);
            if (!isNaN(enemyArmor)) {
                if (startingAmmunition >= enemyArmor) {
                    console.log(`An enemy with ${enemyArmor} armour is defeated.`);
                    startingAmmunition -= enemyArmor;
                } else {
                    startingFuel -= enemyArmor * 2;
                    if (startingFuel >= 0) {
                        console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
                    } else {
                        console.log("Mission failed.");
                        return;
                    }
                }
            }
        } else if (currCommand.includes("Repair")) {
            let numFuelAmm = Number(currCommandArr[1]);
            if (!isNaN(numFuelAmm)) {
                startingAmmunition += numFuelAmm * 2;
                startingFuel += numFuelAmm
                console.log(`Ammunitions added: ${numFuelAmm * 2}.`);
                console.log(`Fuel added: ${numFuelAmm}.`);
            }
        } else if (currCommand.includes("Titan")) {
            console.log("You have reached Titan, all passengers are safe.");
            return;
        }
    }
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
// spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']);