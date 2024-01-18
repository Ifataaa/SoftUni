function triplesOfLatinLetters(num) {
    let numAsNum = Number(num);

    for (let i = 0; i < numAsNum; i++) {
        let firstLetter = String.fromCharCode(i + 97)
        for (let j = 0; j < numAsNum; j++) {
            let secondLetter = String.fromCharCode(j + 97)
            for (let k = 0; k < numAsNum; k++) {
                let thirdLetter = String.fromCharCode(k + 97)
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters(3)