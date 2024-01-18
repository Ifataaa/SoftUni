function requiredReading (pages, pagesAnHour, day) {

    let timeToRead = pages / pagesAnHour;
    let hoursPerDay = timeToRead / day

    console.log(hoursPerDay);
}

requiredReading(212,20 ,2 )