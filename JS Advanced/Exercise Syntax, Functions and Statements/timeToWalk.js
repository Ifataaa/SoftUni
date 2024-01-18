function timeToWalk (steps,footprint,speed) {
    let km = (steps * footprint) /1000;
    let time = (km / speed) * 3.6;
    console.log(time); 


}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);