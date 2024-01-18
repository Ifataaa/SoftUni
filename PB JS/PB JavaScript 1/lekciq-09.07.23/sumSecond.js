function sumSecond(input) {

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;

    let mins = Math.floor(totalTime / 60);
    let secs = totalTime % 60;

    if(secs < 10) {
        console.log(mins + `:0` + secs);
    } else {
        console.log(mins + `:` + secs);

    }

}

sumSecond(["35","45","44"])
