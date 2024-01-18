function hotelRoom (input) {

    let month = input[0];
    let days = Number(input[1]);

    let studioPrice = 0
    let apartmentPrice = 0
    

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;
            if (days > 7 && days < 14) {
                studioPrice *= 0.95;
            } else if (days > 14) {
                studioPrice *= 0.70;
            }
    } else if (month === "June" || month === "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70; 
            if (days > 14) {
                studioPrice *= 0.80;
            }   
    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (days > 14) {
        apartmentPrice *= 0.90;
    }

    let stFinalSum = studioPrice * days;
    let apFinalSum = apartmentPrice * days;

    console.log(`Apartment: ${apFinalSum.toFixed(2)} lv.`);
    console.log(`Studio: ${stFinalSum.toFixed(2)} lv.`);
}

hotelRoom(["June",
"14"])

