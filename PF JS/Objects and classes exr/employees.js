function employees (arr) {
    for(let ppl of arr) {
        let personalNumber = ppl.length;
        console.log(`Name: ${ppl} -- Personal Number: ${personalNumber}`)
    }   
}


employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ])
// employees([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ])