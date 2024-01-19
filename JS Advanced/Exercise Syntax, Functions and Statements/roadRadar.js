function roadRadar (speed, area) {
    let output = "";
    let difference = 0;
    let speedLimit = 0;
    let status = "";

    let normal = true;

    
    if (area == "city") {
        speedLimit = 50;
        if (speed >= speedLimit) {
            normal = false;
            difference = speed - speedLimit;            
            if (difference <= 20 ) {
                status = "speeding";
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
        }
    } else if (area == "residential") {
        speedLimit = 20;
        if (speed >= speedLimit) {
            normal = false;
            difference = speed - speedLimit;            
            if (difference <= 20 ) {
                status = "speeding";
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
        }
    } else if (area == "interstate") {
        speedLimit = 90;
        if (speed >= speedLimit) {
            normal = false;
            difference = speed - speedLimit;            
            if (difference <= 20 ) {
                status = "speeding";
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
        }
    } else if (area == "motorway") {
        speedLimit = 130;
        if (speed >= speedLimit) {
            normal = false;
            difference = speed - speedLimit;            
            if (difference <= 20 ) {
                status = "speeding";
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
        }
    }

    if (normal) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

// roadRadar(40, 'city');
roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');