function addAndRemoveElements (arr) {
    let n = 1;
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add") {
            output.push(n);
            n++
        } else {
            output.pop(n);
            n++
        }
    }
    if (output.length) {
        return output.join("\n")
    } else {
        return "Empty" 
    }
}


// // console.log(addAndRemoveElements(['add', 
// // 'add', 
// // 'add', 
// // 'add']
// // ));
// console.log(addAndRemoveElements(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']
// ));
console.log(addAndRemoveElements(['remove', 
'remove', 
'remove'] 
));