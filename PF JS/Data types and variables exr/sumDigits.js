function sumDigits(param) {

    let paramAsString = String(param);
    let sum = 0;

    for(let i = 0; i < paramAsString.length; i++) {
        sum += Number(paramAsString[i])
    }
    console.log(sum);
}

sumDigits(245678)