function theatrePromotions (day, age) {
    let ticketPrice = ``;
    
    if (age >= 0  && 18 >= age) {
        switch (day) {
            case `Weekday`:ticketPrice += `12$`;break;
            case `Weekend`:ticketPrice += `15$`;break;
            case `Holiday`:ticketPrice += `5$`;break;
        }
    } else if (age > 18  && 64 >= age) {
        switch (day) {
            case `Weekday`:ticketPrice += `18$`;break;
            case `Weekend`:ticketPrice += `20$`;break;
            case `Holiday`:ticketPrice += `12$`;break;
        }
    } else if (age > 64 && 122 >= age) {
        switch (day) {
            case `Weekday`:ticketPrice += `12$`;break;
            case `Weekend`:ticketPrice += `15$`;break;
            case `Holiday`:ticketPrice += `10$`;break;
        }
    }   else {
        ticketPrice += `Error!`
    }
    console.log(`${ticketPrice}`);
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
