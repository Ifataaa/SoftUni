function trekkingMania1(input) {

    let groups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;


    for (let index = 1; index < input.length; index++) {
        let people = Number(input[index]);

        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            monblan += people;
        } else if (people <= 25) {
            kilimandjaro += people;
        } else if (people <= 40) {
            k2 += people;
        } else {
            everest += people
        }
    }
    let total = musala + monblan + kilimandjaro + k2 + everest;

    console.log(`${(musala / total * 100).toFixed(2)}%  `);
    console.log(`${(monblan / total * 100).toFixed(2)}% `);
    console.log(`${(kilimandjaro / total * 100).toFixed(2)}%    `);
    console.log(`${(k2 / total * 100).toFixed(2)}%  `);
    console.log(`${(everest / total * 100).toFixed(2)}% `);
}

trekkingMania1(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
