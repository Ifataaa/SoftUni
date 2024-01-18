function passwordValidator(pass) {
    let validLength = passLength(pass);
    let validLettersAndDigits = letteresAndDigits(pass);
    let validCountDigits = checkDigitsCount(pass);

    if (validLength && validLettersAndDigits && validCountDigits) {
        console.log("Password is valid");
    }

    function passLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    function letteresAndDigits(password) {
        let isOnlyLettersDigits = Boolean
        for (let currChar of password) {
            let asciCode = currChar.charCodeAt()
            if (!((asciCode >= 48 && asciCode <= 57) || (asciCode >= 65 && asciCode <= 90) || (asciCode >= 97 && asciCode <= 122))) {
                isOnlyLettersDigits = false;
                break;
            } else {
                isOnlyLettersDigits = true;
            }
        }
        if (isOnlyLettersDigits) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }
    function checkDigitsCount(password) {
        let digitsCounter = 0;
        for (let currChar of password) {
            let asciCode = currChar.charCodeAt();
            if (asciCode >= 48 && asciCode <= 57) {
                digitsCounter++
            }
        }
        if (digitsCounter < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
}

passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');
