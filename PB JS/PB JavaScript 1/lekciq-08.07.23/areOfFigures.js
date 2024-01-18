function areaOfFigures(input) {
    let figure = input[0];
    

    if (figure === "square") {
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1])
        let area = Math.pow(r,2) * Math.PI;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b / 2;
        console.log(area.toFixed(3));
    }
 }

areaOfFigures(["circle", "6"])