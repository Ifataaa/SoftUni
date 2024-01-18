function reverseAnArrayOfNumbers (n , arr) {
    let res = ""
    let resultArr = [];
    let output = [];
    for( let i = 0; i < n ; i++) {
       resultArr.push(arr[i])
    }   
    for (let i = resultArr.length;i > 0; i--) {
        output.push(resultArr[i - 1])
    }
    console.log(output.join(" "))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])