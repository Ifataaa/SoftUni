function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let condensed = Array(arr.length - 1);
        
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = Number(arr[i]) + Number(arr[i + 1])
        }
        arr = condensed
    }
    console.log(arr[0]);
}

condenseArrayToNumber([2, 10, 3])

// function sumAll(nums) {
//     while (nums.length > 1) {
//         let condensed = Array(nums.length-1);
//         for (let i = 0; i < nums.length - 1; i++) {
//             condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
//         }
//         nums = condensed;
//     }
//     console.log(nums[0])
// }
