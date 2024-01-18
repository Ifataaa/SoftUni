function revealWords(wordStr, text) {
    let words = wordStr.split(', ');

    for (let word of words) {
        let astTemplate = '*'.repeat(word.length);
        text = text.replace(astTemplate, word)
    }
    console.log(text);
}

// revealWords('great',
//     'softuni is ***** place for learning new programming languages'
// );

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);