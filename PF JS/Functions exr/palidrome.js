function palindromeIntegers(nums) {
    for (let idx = 0; idx < nums.length; idx++) {
        let palidrome = '';
        let currNum = nums[idx]
        let currNumAsString = String(currNum);
        for (let i = currNumAsString.length - 1; i >= 0; i--) {
            palidrome += `${Number(currNumAsString[i])}`
        }
        if (palidrome == currNum) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

palindromeIntegers([123, 323, 421, 121])