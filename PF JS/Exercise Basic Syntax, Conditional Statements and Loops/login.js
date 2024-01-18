function login(input) {
    let name = input[0];
    let correctPass = "";

    for (let i = name.length - 1; i >= 0; i--) {
        correctPass += `${name[i]}`
    }

    let index = 2
    let pass = input[1]
    let tries = 0;

    while (pass !== correctPass) {
        tries++
        if (tries == 4) {
            console.log(`User ${name} blocked!`);
            return;
        }
        
        

        console.log("Incorrect password. Try again.");
        
        pass = input[index];
        index++
        
    }
    if (pass == correctPass) {
        console.log(`User ${name} logged in.`);
    }
}

// login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])