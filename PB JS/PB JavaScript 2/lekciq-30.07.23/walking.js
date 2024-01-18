function walking(input) {

    let target = 10000;
    let index = 0;
    let command = input[index];
    let totalSteps = 0;


    while (command !== "Going home") {

        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - target} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        totalSteps += stepsToHome;

        if (totalSteps >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - target} steps over the goal!`);
        } else {
            console.log(`${target - totalSteps} more steps to reach goal.`);
        }
    }
}

walking(["1000",
    "1500",
    "2000",
    "6500"])
