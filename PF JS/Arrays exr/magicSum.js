function magicSum(arr, sum) {
    let sumArr = [];


    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i]

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j]
            
            if((currNum + nextNum) == sum) {
                console.log(currNum + ' ' + nextNum);
            }
        }
    }
    
}

magicSum([1, 7, 6, 2, 19, 23],8);
// magicSum([14, 20, 60, 13, 7, 19, 8],);
// magicSum([1, 2, 3, 4, 5, 6],6)