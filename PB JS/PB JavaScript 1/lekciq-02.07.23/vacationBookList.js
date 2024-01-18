function bookList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = pages / pagesPerHour;
    let period = hours / days ;

    console.log(period);
}

bookList(["212","20","2"]);