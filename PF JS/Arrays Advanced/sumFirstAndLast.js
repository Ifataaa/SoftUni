function sumFirstAndLast(arr) {
    arr = arr.map(Number);
    console.log(arr[0] + arr[arr.length - 1])


}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);