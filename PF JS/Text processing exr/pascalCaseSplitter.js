function splitPascalCase(input) {
    let words = [];
    let currentWord = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        // Check if the character is uppercase and it's not the first character
        if (char === char.toUpperCase() && i > 0) {
            words.push(currentWord);
            currentWord = char;
        } else {
            currentWord += char;
        }
    }

    // Add the last word
    words.push(currentWord);

    // Join the words with comma and space
    const result = words.join(', ');

    console.log(result);
}