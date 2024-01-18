function circleArea(command) {
    if (typeof command !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof command}.`);
    } else {
        let area = Math.PI * command * command;
        console.log(area.toFixed(2));
    }
}

circleArea(5);
circleArea('name');