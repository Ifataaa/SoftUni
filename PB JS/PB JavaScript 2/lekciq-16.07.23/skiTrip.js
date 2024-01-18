function skiTrip(input) {

    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];

    let nights = days - 1;
    let price = 0;
    let total = 0;


    if (type === "room for one person") {
        price = 18;
        total = price * nights;
    } else if (type === "apartment") {
        price = 25;
        total = price * nights;
        if (days < 10) {
            total *= 0.70;
        } else if (days >= 10 && days <= 15) {
            total *= 0.65;
        } else if (days > 15) {
            total *= 0.50;
        }
    } else if (type === "president apartment") {
        price = 35
        total = price * nights;
        if (days < 10) {
            total *= 0.90;
        } else if (days >= 10 && days <= 15) {
            total *= 0.85;
        } else if (days > 15) {
            total *= 0.80;
        }
    }
    if (review === "positive") {
        total *= 1.25;
    } else if (review === "negative") {
        total *= 0.90
    }

    console.log(total.toFixed(2));
}


skiTrip(["14",
    "apartment",
    "positive"])
