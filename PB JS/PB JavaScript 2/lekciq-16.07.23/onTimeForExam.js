function onTimeForExam(input) {

    let hoursExam = Number(input[0]);
    let minsExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minsArrive = Number(input[3]);

    let timeExam = hoursExam * 60 + minsExam;
    let timeArrive = hoursArrive * 60 + minsArrive;
    let diff = Math.abs(timeExam - timeArrive)
    let h = 0;
    let mins = 0

    if (timeArrive < timeExam && (timeExam - timeArrive) > 30) {
        console.log("Early");
        h = Math.floor(diff / 60);
        mins = diff % 60
            if (h > 0) {
                if (mins < 10) {
                    console.log(`${h}:0${mins} hours before the start`);
                } else if (mins >= 10) {
                    console.log(`${h}:${mins} hours before the start`);
                }
            } else {
                console.log(`${mins} minutes before the start`);
            }
    } else if (timeArrive <= timeExam) {
        console.log("On time");
        mins = diff % 60;
        if (mins > 0)
        console.log(`${mins} minutes before the start`);
    } else if (timeArrive > timeExam) {
        console.log("Late");
        h = Math.floor(diff / 60);
        mins = diff % 60;
        if (h > 0) {
            if (mins < 10) {
                console.log(`${h}:0${mins} hours after the start`);
            } else if (mins >= 10) {
                console.log(`${h}:${mins} hours after the start`);
            }
        } else {
            console.log(`${mins} minutes after the start`);
        }
    }
}

onTimeForExam(["10",
"00",
"10",
"00"])




