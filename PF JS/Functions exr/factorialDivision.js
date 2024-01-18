function factorialDivision (num1, num2) {
    let num1Fact = findFactoriel(num1);
    let num2Fact = findFactoriel(num2)
    let res = (num1Fact / num2Fact).toFixed(2)
    console.log(res);

    function findFactoriel(num) {
        let fact = 1;
        for(let i = 1; i <= num; i++) {
            fact *= i 
        }
        return fact;
    }
}

// factorialDivision(5,2);
factorialDivision(6,2);
