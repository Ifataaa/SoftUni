function numbers1NwithStep3 (input) {
    let num = Number(input[0]);

    for (let i = 1 ; i <= num; i += 3) {
        console.log(i);
    }
}

numbers1NwithStep3(["10"])