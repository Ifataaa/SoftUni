function wordsTracker(arr) {
    let keyWords = arr.shift().split(' ');
    let keyObj = {};

    for(let el of keyWords) {
        keyObj[el] = 0;
    }

    for (let word of arr) {
        if (word in keyObj) {
            keyObj[word] += 1;
        }
    }
    let entries = (Object.entries(keyObj)).sort((a, b) => b[1] - a[1]); 

    for(let [key, value] of entries) {
        console.log(key + ' - ' + value)
    } 
}

// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]
// );
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );
