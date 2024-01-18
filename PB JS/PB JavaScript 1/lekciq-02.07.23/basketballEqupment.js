function basketballEquipment(input) {
    let tax = Number(input[0]);
    let shoes = tax * 0.60;
    let suit = shoes * 0.80;
    let ball = suit * 0.25;
    let accessories = ball * 0.2;
    
    let totalSum = tax + shoes + suit + ball + accessories;

    console.log(totalSum);
}

basketballEquipment(["365"]);