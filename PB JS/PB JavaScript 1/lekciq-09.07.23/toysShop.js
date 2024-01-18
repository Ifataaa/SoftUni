function toysShop(input) {
     
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    
    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let toysPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    let toysCount = puzzles + dolls + bears + minions + trucks;

    if (toysCount >= 50) {
        toysPrice *= 0.75
    }

    toysPrice *= 0.90;

    if(tripPrice <= toysPrice) {
        console.log(`Yes! ${(toysPrice - tripPrice).toFixed(2)} lv left.`);
    } else if (tripPrice >= toysPrice) {
    console.log(`Not enough money! ${(tripPrice - toysPrice).toFixed(2)} lv needed.`);
}
}

toysShop(["320",
"8",
"2",
"5",
"5",
"1"])
