function oddAndEvenSum(num) {
    let numAsString = String(num);

    let evenSum = 0;
    let oddSum = 0;
    

    for (let i = 0; i < numAsString.length; i++) {
        let currNum = Number(numAsString[i]);
        
        if (currNum % 2 == 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}

oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);