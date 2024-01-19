function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    num = Number(num);
    let op = [op1, op2, op3, op4, op5];

    for (let command of op) {
        if (command == "chop") {
            num /= 2
            console.log(num);
        } else if (command == "dice") {
            num = Math.sqrt(num);
            console.log(num);
        } else if (command == "spice") {
            num += 1;
            console.log(num);
        } else if (command == "bake") {
            num *= 3;
            console.log(num);
        } else {
            num -= 0.2 * num;
            console.log(num);
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
