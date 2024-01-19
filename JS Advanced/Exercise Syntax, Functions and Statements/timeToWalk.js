function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let meterInSecs = speed / 3.6;
    let time = distance / meterInSecs;

    let rest = Math.floor(distance / 500);
    time += rest * 60;

    let secs = Math.round(time % 60);
    let mins = Math.floor(time / 60);
    let hours = Math.floor(mins / 60);

    mins -= hours * 60;

    let outputHours = hours < 10 ? `0${hours}` : `${hours}`;
    let outputMins = mins < 10 ? `0${mins}` : `${mins}`;
    let outputSecs = secs < 10 ? `0${secs}` : `${secs}`;

    console.log(`${outputHours}:${outputMins}:${outputSecs}`);
}


timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);