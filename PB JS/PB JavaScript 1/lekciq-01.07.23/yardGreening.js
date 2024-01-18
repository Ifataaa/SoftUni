function yardGreening(input) {
    let kvMetra = input[0];
    let suma = kvMetra * 7.61;
    let otstypka = suma * 0.18;
    let krainasuma = suma - otstypka;
    console.log("The final price is: " + krainasuma + " lv.");
    console.log("The discount is: " + otstypka + " lv.");
}

yardGreening(["550"]);