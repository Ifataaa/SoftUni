function extractIncreasingSubsetFromArray(arr) {
    let result = [];
    let biggestEl = arr.shift();

    result.push(biggestEl);

    arr.forEach(x => {
        if (x >= biggestEl) {
            result.push(x);
            biggestEl = x
        }
    });

    return result;
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
// extractIncreasingSubsetFromArray([1,
//     2,
//     3,
//     4]
// );
extractIncreasingSubsetFromArray([20,
3,
2,
15,
6,
1]
);