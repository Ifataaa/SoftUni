function godzVsKong(input) {

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPricePerOne = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothingTotal = extras * clothingPricePerOne;

    if(extras > 150) {
        clothingTotal *= 0.90
    }

    let totalMoney = clothingTotal + decorPrice;

    if ( budget >= totalMoney) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalMoney).toFixed(2)} leva left.`);
    } else  {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalMoney - budget).toFixed(2)} leva more.`)
    }

}

godzVsKong(["15437.62",
"186",
"57.99"])


