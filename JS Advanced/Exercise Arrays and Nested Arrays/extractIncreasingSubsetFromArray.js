function extractIncreasingSubsetFromArray(arr) {
    let result = [];

    for (let i = arr.length; i < arr. length; i++) {
        if (arr[i + 1] > arr[i]) {
            result.push(i);
        } else {
            continue;
        }
    }

    console.log(result)

}

// extractIncreasingSubsetFromArray([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     );
extractIncreasingSubsetFromArray([1, 
2, 
3,
4]
);
// extractIncreasingSubsetFromArray([20, 
// 3, 
// 2, 
// 15,
// 6, 
// 1]
// );