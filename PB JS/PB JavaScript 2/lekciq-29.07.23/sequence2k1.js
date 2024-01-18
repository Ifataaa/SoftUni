function sequence2k1 (input) {

    let num = Number(input[0]);

    let sum = 1;

    while (sum <= num) {
        console.log(sum);
        sum = 2 * sum + 1;
    }
}


sequence2k1(["3"])