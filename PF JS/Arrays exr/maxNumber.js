function maxNumber(arr) {
    let output = [];
    

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let isTop = true

        for (let j = i + 1; j < arr.length; j++) {
            let rigthNum = arr[j];
            
            if (num <= rigthNum) {
                isTop = false;
                break;
            } 
        }

        if (isTop) {
            output.push(num)
        }
    }
    console.log(output.join(" "));
}


maxNumber([1, 4, 3, 2])
// maxNumber([27, 19, 42, 2, 13, 45, 48])
// maxNumber([14, 24, 3, 19, 15, 17])
// maxNumber([41, 41, 34, 20])