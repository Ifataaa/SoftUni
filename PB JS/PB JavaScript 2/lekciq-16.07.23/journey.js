function journey (input) {

    let budget = Number(input[0]);
    let season = input[1];

    let spentMoney = 0;
    let place = "";
    let country = "";

    if (budget <= 100) {
        country = "Bulgaria";
            if (season === "summer") {
                spentMoney = budget * 0.30;
                place = "Camp";
            } else if (season === "winter") {
                spentMoney = budget * 0.70;
                place = "Hotel";
            }
    } else if (budget <= 1000) {
        country = "Balkans";
            if (season === "summer") {
            spentMoney = budget * 0.40;
            place = "Camp";
            } else if (season === "winter") {
            spentMoney = budget * 0.80;
            place = "Hotel";
            }
    } else if (budget > 1000) {
        country = "Europe";
        place = "Hotel";
        spentMoney = budget * 0.90;
    }

    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${spentMoney.toFixed(2)}`);
}


journey(["50", "summer"])