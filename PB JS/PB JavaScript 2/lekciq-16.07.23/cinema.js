function cinema (input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let ticket = 0;
    let seats = rows * columns;
    let income = 0

    if ( type === "Premiere") {
        ticket = 12;
        income = seats * ticket;
        console.log(`${income.toFixed(2)} leva`);
    } else if ( type === "Normal") {
        ticket = 7.50;
        income = seats * ticket;
        console.log(`${income.toFixed(2)} leva`);
    } else if ( type === "Discount" ) {
        ticket = 5;
        income = seats * ticket;
        console.log(`${income.toFixed(2)} leva`);
    }
}

cinema(["Premiere",
"10",
"12"])
