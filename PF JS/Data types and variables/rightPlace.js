function rightPlace(missspelled, char, string) {

    let result = "";

    for (let i = 0; i < missspelled.length; i++) {
        if (missspelled[i] == "_") {
            result += missspelled.replace("_", char)
        }
    }
    if (result == string) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')