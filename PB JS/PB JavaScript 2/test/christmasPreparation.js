function christmasPreparation(input) {

    let wrapingPaper = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let wrapingPaperTotal = wrapingPaper * 5.80;
    let clothTotal = cloth * 7.20;
    let glueTotal = glue * 1.20;

    let finalPercantage = (100 - discountPercentage) / 100;

    let total = (wrapingPaperTotal + clothTotal + glueTotal) * (finalPercantage)

    console.log(total.toFixed(3));

}

christmasPreparation