function sumEvenNumbers (arr) {
    let sum = 0;
    for ( let el of arr) {
        let elAsNum = Number(el)
        if (elAsNum % 2 == 0) {
            sum += elAsNum
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])