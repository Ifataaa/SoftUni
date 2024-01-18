function graduation (input) {

    let index = 0;
    let name = input[0];
     
    index++
    
    let clas = 1;
    let sumGrade = 0;
    let totalBadGrades = 0;
    let excluded = false;
     
    while (clas <= 12) {
        let grade = Number(input[index]);
        index++

        if (grade < 4) {
            totalBadGrades++
            if (totalBadGrades === 2) {
                console.log(`${name} has been excluded at ${clas} grade`);
                excluded = true
                break;
            }
            continue;
        }

        sumGrade += grade
        clas++
    }
    let average = sumGrade / 12;
    if (!excluded) {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
