function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let el of arr) {
        if (el % 2 == 0) {
            evenSum += el
        } else {
            oddSum += el
        }
    }
    let diff = evenSum - oddSum
    console.log(diff);
}

evenAndOddSubtraction([1,2,3,4,5,6]);