function echoType(param) {

    let typeParam = typeof param;

    if (typeParam == "string" || typeParam == "number") {
        console.log(typeParam);
        console.log(param);
    } else {
        console.log(typeParam);
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);