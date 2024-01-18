function charactersInRange(char1, char2) {
    let result = [];

    let char1Code = char1.charCodeAt(0)
    let char2Code = char2.charCodeAt(0)

    let minStart = Math.min(char1Code, char2Code);
    let maxEnd = Math.max(char1Code, char2Code);

    for(let currCode = minStart + 1; currCode < maxEnd; currCode++) {
        let currChar = String.fromCharCode(currCode)
        result.push(currChar)
    }
    console.log(result.join(' '));
}

// charactersInRange('a', 'd');
// charactersInRange('#',':');
charactersInRange('C','#');