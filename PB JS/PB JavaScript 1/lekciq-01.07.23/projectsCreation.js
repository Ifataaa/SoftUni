function projectsCreation(input) {
    let firstName = input[0];
    let projects = input[1];
    let needhr = projects * 3;
    console.log("The architect" + ` ` + firstName + ` ` + "will need" + ` ` + needhr + ` ` + "hours to complete" + ` `+ projects + ` ` + "project/s" + `.`)
}
projectsCreation(["George","4"]);
projectsCreation(["Sanya", "9"]);
projectsCreation(["ifataaa", "10"]);