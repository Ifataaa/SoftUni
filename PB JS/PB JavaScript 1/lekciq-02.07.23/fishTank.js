function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let usedSpace = Number(input[3]) / 100;
    
    let volumeSum = lenght * width * height;

    let volumeSumLiters = volumeSum / 1000;

    let neededLiters = volumeSumLiters * 0.83;

    console.log(neededLiters);
}

fishTank(["85","75","47","17"]);