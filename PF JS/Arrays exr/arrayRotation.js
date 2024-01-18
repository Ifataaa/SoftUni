function arrayRotation(arr, r) {
    for (let i = 0; i < r; i++) {
        let el = arr.shift(arr[i])
        arr.push(el)
    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)