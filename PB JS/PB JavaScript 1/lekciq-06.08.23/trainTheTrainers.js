function trainTheTrainers(input) {

    let judgesCount = Number(input[0]);
    let presentationName = input[1];
    let index = 2;

    let presCounter = 0
    let grade = 0;
    let totalGradesSum = 0;

    while (presentationName !== "Finish") {
        presCounter++

        let counter = index

        for (let i = counter; i < counter + judgesCount; i++) {
            index++
            grade += Number(input[i]);
        }

        let presentationAvgGrade = grade / judgesCount;
        console.log(`${presentationName} - ${(presentationAvgGrade).toFixed(2)}`);
        
        totalGradesSum += presentationAvgGrade;
        presentationName = input[index]
        index++
        grade = 0
    }
    let studentsAverageGrade = totalGradesSum / judgesCount;
    console.log(`Student's finalassessment is ${studentsAverageGrade.toFixed(2)}`);
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
