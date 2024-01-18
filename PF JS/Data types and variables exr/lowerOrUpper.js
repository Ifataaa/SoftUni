function lowerOrUpper (letter) {
    let code = letter.charCodeAt()
    let type = ""
    if (code >= 65 && code <= 90){
        type += 'upper-case'
    } else {
        type += 'lower-case'
    }
    console.log(type);
}

lowerOrUpper('L')