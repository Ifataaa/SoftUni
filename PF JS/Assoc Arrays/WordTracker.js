function wordTracker(arr) {
    let keyWords = arr[0].split(' ')
    arr.shift
    let keyWordsObj = {}

    for (let word of keyWords) {
        keyWordsObj[word] = 0

    }
    let trueKeys = Object.keys(keyWordsObj)
    for (let token of trueKeys) {
        if (token in trueKeys) {
            keyWordsObj[token] += 1
        }
    }

    console.log(keyWordsObj);


}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]
);
// // wordTracker([
// 'is the',
// 'first', 'sentence', 'Here', 'is',
// 'another', 'the', 'And', 'finally', 'the',
// 'the', 'sentence']);

