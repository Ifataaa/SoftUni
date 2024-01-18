function everest(input) {

    let index = 0;

    let command = input[index]
    index++

    let startingMeters = 5364
    let days = 1;
    let meters = 0;

    while (command !== "END") {

        if (command === "Yes") {
            days++
        }
        
        meters = Number(input[index])
        index++
        startingMeters += meters

        if (days > 5) {
            console.log(`Failed!`);
            console.log(`${startingMeters - meters}`);
            break;
        }

        if (startingMeters >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            break;
        }

        command = input[index]
        index++

    } 
    if (startingMeters < 8848 && days <= 5 ) {
        console.log(`Failed!`);
        console.log(`${8848 - (8848 - startingMeters)}`);
    }
}

everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])