function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);
    let bag = 0.40;

    let nylonSum = (nylon + 2) * 1.5;
    let paintSum = (paint * 1.1) * 14.50;
    let thinnerSum = thinner * 5;
    
    let materialsSum = nylonSum + paintSum + thinnerSum + bag;
    let workersSum = (materialsSum * 0.3) * workHours;
    let totalSum = materialsSum + workersSum;

    console.log(totalSum);
}

repainting(["10","11","4","8"])