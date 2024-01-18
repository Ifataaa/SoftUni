function addAndSubtract(a, b, c) {
    function sum(num1, num2) {
        sum = num1 + num2;
        return sum;
    }

    function subtract(sum, num3) {
        result = sum - num3;
        return result;
    }

    sum(a, b);
    subtract(sum, c);
    console.log(result)
}


// addAndSubtract(23,6,10);
// addAndSubtract(1,17,30);
addAndSubtract(42,58,100);