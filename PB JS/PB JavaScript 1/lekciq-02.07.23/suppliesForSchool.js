function SupFroSch(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let solution = Number(input[2]);
    let discount = Number(input[3]) / 100;
    
    let pensSum = pens * 5.8;
    let markersSum = markers * 7.2;
    let solutionSum = solution * 1.2

    let sum = pensSum + markersSum + solutionSum;
    let totalSum = sum - (sum * discount);
    
    console.log(totalSum)
}

SupFroSch(["2","3","4","25"]);