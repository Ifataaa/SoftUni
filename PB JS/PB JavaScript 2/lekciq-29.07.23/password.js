function password (input) {
    let index = 0;

    let name = input[index];
    let password = input[1];
    let userPassword = input[2];
     
    index++

    while (userPassword !== password) {
        userPassword = input[index]
        index++
    }

    console.log(`Welcome ${name}!`);

}


password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
