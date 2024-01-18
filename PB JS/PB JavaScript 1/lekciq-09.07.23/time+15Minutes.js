function time15Minutes(input) {

    let hours = Number(input[0]);
    let mins = Number(input[1]);
    let totalMins = mins + 15;


    if( totalMins > 59) {
        hours = hours + 1;
        totalMins = totalMins - 60;
    }

    if(hours >= 24) {
        hours = hours - 24;
    }
   
    if (totalMins < 10 ) {
        console.log(hours + `:0` + Math.ceil(totalMins));
    } else {
        console.log(hours + `:` + Math.ceil(totalMins));
    }
}

time15Minutes(["12", "49"])