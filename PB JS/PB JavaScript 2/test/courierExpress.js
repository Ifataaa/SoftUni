function courierExpress(input) {

    let weight = Number(input[0]);
    let typeDelivery = input[1];
    let distance = Number(input[2]);

    let basePricePerKm = 0;
    let expressPricePerkm = 0
    let total = 0;

    if (typeDelivery === "standard") {
        if (weight <= 1) {
            basePricePerKm = 0.03
        } else if (weight <= 10) {
            basePricePerKm = 0.05
        } else if (weight <= 40) {
            basePricePerKm = 0.10
        } else if (weight <= 90) {
            basePricePerKm = 0.15;
        } else if (weight <= 150) {
            basePricePerKm = 0.20;
        }
        total = basePricePerKm * distance

    } else if (typeDelivery === "express") {
        if (weight <= 1) {
            basePricePerKm = 0.03
            expressPricePerkm = 0.80 * basePricePerKm;
        } else if (weight <= 10) {
            basePricePerKm = 0.05
            expressPricePerkm = 0.40 * basePricePerKm;
        } else if (weight <= 40) {
            basePricePerKm = 0.10
            expressPricePerkm = 0.05 * basePricePerKm;
        } else if (weight <= 90) {
            basePricePerKm = 0.15;
            expressPricePerkm = 0.02 * basePricePerKm;
        } else if (weight <= 150) {
            basePricePerKm = 0.20;
            expressPricePerkm = 0.01 * basePricePerKm;
        }
        total = (basePricePerKm + weight * expressPricePerkm) * distance
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`);
}

courierExpress(["87",
    "express",
    "130"])