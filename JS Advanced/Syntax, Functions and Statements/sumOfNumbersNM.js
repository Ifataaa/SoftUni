function sumOfNumbersNM(a,b) {
    let num1 = Number(a);
    let num2 = Number(b)
    let sum;

    for (let i = num1; i <= num2; i ++) {
        sum += i;
    }
    
    console.log(sum);
}

sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');
