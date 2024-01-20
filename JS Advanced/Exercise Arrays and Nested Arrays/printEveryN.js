function printEveryN (arr, n) {
    let output = [];

    for (let i = 0; i < arr.length; i += n) {
        output.push(arr[i]);
    }

    return output

}

console.log(printEveryN(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));


// console.log(printEveryN(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// ));


// console.log(printEveryN(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6
// ));