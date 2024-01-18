function fishingBoat (input) {

    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);

    let price = 0


    if (season === "Spring") {
        price = 3000
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200
    } else if (season === "Winter") {
        price = 2600
    }

    if (count <= 6) {
        price *= 0.90;
    } else if (count > 6 && count <= 11) {
        price *= 0.85;
    } else if (count > 12) {
        price *= 0.75;
    }

    if (count % 2 === 0 && season !== "Autumn") {
        price *= 0.95
    }    

    let leftMoney = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else if (price > budget) {
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva.`);
    }
}


fishingBoat(["3600",
"Autumn",
"6"])
