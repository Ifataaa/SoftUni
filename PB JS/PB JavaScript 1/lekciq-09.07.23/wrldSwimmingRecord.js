function wsr(input) {
     
    let wsr = Number(input[0]);
    let meters = Number(input[1]);
    let secForMeter = Number(input[2]);

    let time = meters * secForMeter;
    let slowDownInSec = Math.f(meters / 15) * 12.5;
    let totalTime = (time + slowDownInSec);


    if (totalTime < wsr) {
        console.log(`Yes, he succeeded! The new world record is ${(wsr - totalTime).toFixed(2)} seconds.`);
    } else if (totalTime >= wsr) {
        console.log(`No, he failed! He was ${(totalTime - wsr).toFixed(2)} seconds slower.`);
    }

}

wsr(["10464",
"1500",
"20"]);