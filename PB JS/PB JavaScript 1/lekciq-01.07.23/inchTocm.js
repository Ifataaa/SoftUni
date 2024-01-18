function inchTocm(input) {
    let inch = Number([2.54]);
    let cm = Number(input);
    let acm = inch * cm ;
    console.log(acm);
}

inchTocm(1);