function footballKit (input) {

    let shirtPrice = Number(input[0]);
    let targetPrice = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (shirtPrice + shortsPrice) * 2;

    let total = (shirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85;

    if (total >= targetPrice) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${total.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(targetPrice - total).toFixed(2)} lv. more.`);
    }
}


footballKit(["25",
"100"])
