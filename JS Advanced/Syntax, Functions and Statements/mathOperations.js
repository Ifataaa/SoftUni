function mathOperations(num1, num2, command) {
    let output = 0;
    if (command == "+") {
        output = num1 + num2;
    } else if (command == "-") {
        output = num1 - num2;
    } else if (command == "*") {
        output = num1 * num2;
    } else if (command == "/") {
        output = num1 / num2;
    } else if (command == "%") {
        output = num1 % num2;
    } else if (command == "**") {
        output = num1 ** num2;
    }
    console.log(output);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');