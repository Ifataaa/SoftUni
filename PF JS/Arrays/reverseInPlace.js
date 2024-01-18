function reverseInPlace(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    console.log(res.join(" "));

}


reverseInPlace(['a', 'b', 'c', 'd', 'e']);