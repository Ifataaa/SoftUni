function addAndSubtract(arr) {
    let output = [];
    let num = 0;
    let originalSum = 0;
    let modifiedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        originalSum += num

        if (num % 2 == 0) {
            num += i
            output.push(num)
            modifiedSum += num
        } else {
            num -= i
            output.push(num)
            modifiedSum += num
        }
    }
    console.log(output);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35])