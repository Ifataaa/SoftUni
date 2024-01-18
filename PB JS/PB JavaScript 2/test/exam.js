function exam(input) {

    let studentsCounter = Number(input[0]);

    let index = 1;

    let grade = 0
    let sumGrade = 0;
    let grade2To299 = 0;
    let grade3To399 = 0;
    let grade4to499 = 0;
    let grade5To = 0;

    for (let i = index; i < input.length; i++) {
        grade = Number(input[i]);

        sumGrade += grade;

        if (grade < 3) {
            grade2To299++;
        } else if (grade < 4) {
            grade3To399++;
        } else if (grade < 5) {
            grade4to499++
        } else if (grade >= 5) {
            grade5To++
        }
    }

    console.log(`Top students: ${((grade5To / studentsCounter) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((grade4to499 / studentsCounter) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((grade3To399 / studentsCounter) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((grade2To299 / studentsCounter) * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumGrade / studentsCounter).toFixed(2)}`);
}

exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44"])