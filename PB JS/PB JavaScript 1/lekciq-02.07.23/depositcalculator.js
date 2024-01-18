function depositCalculator(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let lihva = Number(input[2]) / 100;

     let sum = deposit + period * ((deposit * lihva) / 12);

     console.log(sum);
}

depositCalculator(["200","3","5.7"])