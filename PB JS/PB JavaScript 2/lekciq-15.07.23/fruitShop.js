function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let price = 0;
    let totalPrice = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            price = 2.50;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "apple") {
            price = 1.20;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "orange") {
            price = 0.85;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapefruit") {
            price = 1.45;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "kiwi") {
            price = 2.70;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "pineapple") {
            price = 5.50;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapes") {
            price = 3.85;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            price = 2.70;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "apple") {
            price = 1.25;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "orange") {
            price = 0.90;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapefruit") {
            price = 1.60;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "kiwi") {
            price = 3;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "pineapple") {
            price = 5.60;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapes") {
            price = 4.20;
            totalPrice = price * amount;
            console.log(totalPrice.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}
fruitShop(["tomato",
    "Monday",
    "0.5"])

