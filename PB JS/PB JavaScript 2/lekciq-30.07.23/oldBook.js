function oldBook(input) {

    let favBook = input[0]
    let index = 1;
    let command = input[index];
    let isfound = false;

    while (command !== "No More Books") {
        if (command === favBook) {
            isfound = true;
            break;
        }
        index++
        command = input[index];
    }

        if (isfound === false) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${index - 1} books.`);
        } else {
            console.log(`You checked ${index - 1} books and found it.`);

        }
}

oldBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
