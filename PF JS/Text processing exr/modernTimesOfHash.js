function modernTimesOfHash(str) {
    let words = str.split(' ');
    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);

    
    for (let currWord of hashWords) {
        currWord = currWord.slice(1);
        let isValid = true;

        for (let char of currWord) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log(currWord)
        }
    }
}

modernTimesOfHash('Nowadays everyone uses # to tag a #special word in #socialMedia');
// modernTimesOfHash('The symbol # is known #vari01ously in English-speaking #regions as the #number sign');