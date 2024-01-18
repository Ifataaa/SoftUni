function theBiscuitFactory(input) {

    let biscuitsForDayPerWorker = Number(input[0]);
    let workers = Number(input[1]);
    let competingFactoriBiscuits = Number(input[2]);

    let totalBiscuits = 0;

    for (let i = 1; i <= 30; i++) {

        if (i % 3 == 0) {
            totalBiscuits += Math.floor((biscuitsForDayPerWorker * workers) * 0.75);
        } else {
            totalBiscuits += (biscuitsForDayPerWorker * workers)
        }
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

    let diff = Math.abs(((totalBiscuits - competingFactoriBiscuits) / competingFactoriBiscuits) * 100).toFixed(2)

    if (totalBiscuits > competingFactoriBiscuits) {
        console.log(`You produce ${diff} percent more biscuits.`);
    } else {
        console.log(`You produce ${diff} percent less biscuits.`);
    }
}

// theBiscuitFactory(["78", "8", "16000"]);
// theBiscuitFactory(["65", "12", "26000"]);
theBiscuitFactory(["163", "16", "67020"]);