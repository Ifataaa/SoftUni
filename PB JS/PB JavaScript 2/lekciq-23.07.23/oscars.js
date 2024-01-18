function oscars(input) {

    let actorName = input[0];
    let points = Number(input[1]);
    let juryCount = input[2];

    for (let index = 3; index < input.length; index++) {
        let juryName = input[index];
        index++
        let juryPoints = input[index]
        let juryTotalPoints = juryName.length * juryPoints / 2
        points += juryTotalPoints;
        if (points > 1250.5) {
            console.log(`Congratulations, ${ actorName } got a nominee for leading role with ${ points.toFixed(1) }!`);
            break;
        }
    }
    if (points <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
