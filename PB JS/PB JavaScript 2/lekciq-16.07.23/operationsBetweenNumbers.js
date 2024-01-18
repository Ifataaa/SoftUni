function operationsBetweenNumbers (input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let op = input[2];

    let res = 0;


    if (op === "+") {
        res = num1 + num2;
        if (res % 2 === 0) {
            console.log(`${num1} ${op} ${num2} = ${res} - even`);
        } else if (res % 2 !== 0) {
            console.log(`${num1} ${op} ${num2} = ${res} - odd`);
        }
    } else if (op === "-") {
        res = num1 - num2
        if (res % 2 === 0) {
            console.log(`${num1} ${op} ${num2} = ${res} - even`);
        } else if (res % 2 !== 0) {
            console.log(`${num1} ${op} ${num2} = ${res} - odd`);
        }
    } else if (op === "*") {
        res = num1 * num2
        if (res % 2 === 0) {
            console.log(`${num1} ${op} ${num2} = ${res} - even`);
        } else if (res % 2 !== 0) {
            console.log(`${num1} ${op} ${num2} = ${res} - odd`);
        }
    } else if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
    } else if (op === "/") {
        res = num1 / num2;
        console.log(`${num1} ${op} ${num2} = ${res.toFixed(2)}`);
    } else if (op === "%") {
        res = num1 % num2;
        console.log(`${num1} ${op} ${num2} = ${res}`);
    }
}

operationsBetweenNumbers(["10",
"12",
"+"])
