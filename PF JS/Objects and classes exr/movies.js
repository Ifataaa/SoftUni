function movies(arr) {
    let movies = [];

    for (let currCommand of arr) {
        if (currCommand.includes("addMovie")) {
            let movieName = currCommand.split("addMovie ")[1];
            let movieObj = { name: movieName }
            movies.push(movieObj);

        } else if (currCommand.includes("directedBy")) {
            let [currMovieName, currMoveDirector] = currCommand.split(" directedBy ");
            let movie = movies.find(movie => movie.name == currMovieName);
            if (movie) {
                movie.director = currMoveDirector
            }
        } else if (currCommand.includes("onDate")) {
            let [currMovieName, date] = currCommand.split(" onDate ");
            let movie = movies.find(movie => movie.name == currMovieName);

            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
        // console.log(movie)
    }
}


// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]
// );
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);