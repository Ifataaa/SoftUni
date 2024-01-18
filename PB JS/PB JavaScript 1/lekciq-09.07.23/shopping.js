function shopping(input) {

    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = gpu * 250;
    let cpuPrice = (gpuPrice * 0.35) * cpu;
    let ramPrice = (gpuPrice * 0.10) * ram;

    let totalPrice = gpuPrice + cpuPrice + ramPrice;

    if(gpu > cpu) {
        totalPrice *= 0.85
    }

    if(budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else if (totalPrice > budget) {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"])
