function examPreparation1(input) {

    let badGrade = Number(input[0]);
    let index = 1;
    let command = input[index];
    let grade = 0;
    let badGradeCounter = 0;
    let problems = 0;
    let gradesCounter = 0
    let gradeSum = 0;

    while (command !== "Enough") {
        index++
        problems++
        gradesCounter++

        grade = Number(input[index]);
        gradeSum += grade;

        if (grade <= 4) {
            badGradeCounter++
        }

        if (badGradeCounter === badGrade) {
            console.log(`You need a break, ${badGradeCounter} poor grades.`);
            break;
        }

        index++
        command = input[index];
    }
    if (command === "Enough") {
        let avg = gradeSum / gradesCounter;
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${problems}`);
        console.log(`Last problem: ${input[index - 2]}`);
    }
}

examPreparation1(["3",
    "Money",
    "6",
    "Story",
    "4",
    "SpringTime",
    "5",
    "Bus",
    "6",
    "Enough"])
