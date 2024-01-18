function minNumber (input) {

    let index = 0;
    let command = input[0];
    let minNum = Number.MAX_SAFE_INTEGER
    index++


    while (command !== "Stop") {
        let num = Number(command);
        
        if (minNum > num) {
            minNum = num
        }

        command = input[index];
        index++
    }
    console.log(minNum);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
