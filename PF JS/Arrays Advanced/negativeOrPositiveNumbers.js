function negativeOrPositiveNumbers (arr) {
    arr = arr.sort((a,b) => a - b);
    console.log(arr);
    arr = arr.forEach((a) => console.log(a));

}


// negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);