function sumNumbers (input) {

    let index = 0;
    let num = Number(input[0]);
    index++

    let sum = 0

    while (sum < num) {
        let currentNum = Number(input[index]);
        index++
        sum += currentNum

    }
    console.log(sum);
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])

