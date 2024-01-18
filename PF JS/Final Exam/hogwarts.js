function hogwarts(input) {
    let text = input.shift();


    while (input[0] != "Abracadabra") {
        let command = input.shift();

        if (command == "Abjuration") {
            text = text.toUpperCase();
            console.log(text);
        } else if (command == "Necromancy") {
            text = text.toLowerCase();
            console.log(text);
        } else if (command.includes("Illusion")) {
            let tokens = command.split(' ');
            let index = Number(tokens[1]);
            if (index < text.length) {
                let char = tokens[2];
                text = text.substring(0, index) + char + text.substring(index + 1); console.log("Done!");
            } else {
                console.log("The spell was too weak.");
            }
        } else if (command.includes("Divination")) {
            let tokens = command.split(' ');
            let firstSubStr = tokens[1];
            let secondSubStr = tokens[2];
            if (text.includes(firstSubStr)) {
                text = text.replace(firstSubStr, secondSubStr);
                console.log(text);
            } else {
                continue;
            }
        } else if (command.includes("Alteration")) {
            let tokens = command.split(' ');
            let str = tokens[1];
            if (text.includes(str)) {
                let startIndex = text.indexOf(str[0]);
                let endIndex = str.length - 1;
                text = text.slice(startIndex, startIndex + str.length);
                console.log(text);
            } else {
                continue;
            }
        } else {
            console.log("The spell did not work!");
        }
    }
}


// hogwarts([
//     'A7ci0',
//     'Illusion 1 c',
//     'Illusion 4 o',
//     'Abjuration',
//     'Abracadabra'
// ]);


//  hogwarts([
//   'TR1GG3R',
//   'Necromancy',
//   'Illusion 8 m',
//   'Illusion 9 n',
//   'Abracadabra'
// ]);


hogwarts([
    'SwordMaster',
    'Target Target Target',
    'Abjuration',
    'Necromancy',
    'Alteration master',
    'Abracadabra'
]
);