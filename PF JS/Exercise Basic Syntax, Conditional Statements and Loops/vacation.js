function vacation(people, type, day) {
    let price = 0;

    if (day == "Friday") {
        switch (type) {
            case "Students": price += 8.45; break;
            case "Business": price += 10.90; break;
            case "Regular": price += 15; break;
        }
    } else if (day == "Saturday") {
        switch (type) {
            case "Students": price += 9.8; break;
            case "Business": price += 15.6; break;
            case "Regular": price += 20; break;
        }
    } else if (day == "Sunday") {
        switch (type) {
            case "Students": price += 10.46; break;
            case "Business": price += 16; break;
            case "Regular": price += 22.50; break;
        }
    }

    let totalPrice = price * people;

    if (type == "Students" && people >= 30) {
        totalPrice *= 0.85;
    } else if (type == "Buisenss" && people >= 100) {
        totalPrice -= (10 * price);
    } else if (type == "Regular" && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")