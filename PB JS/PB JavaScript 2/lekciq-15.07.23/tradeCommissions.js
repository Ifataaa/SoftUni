function tradeCommissions (input) {

    let town = input[0];
    let sales = Number(input[1]);
    let tradeCommissions = 0
    let totalCommissions = 0



    if (town === "Sofia") {
        if (0 <= sales &&  sales <= 500) {
            tradeCommissions = 0.05;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if (500 <= sales &&  sales <= 1000) {
            tradeCommissions = 0.07;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if (1000 <= sales &&  sales <= 10000) {
            tradeCommissions = 0.08;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if ( sales > 10000) {
            tradeCommissions = 0.12;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (town === "Varna") {
        if (0 <= sales &&  sales <= 500) {
            tradeCommissions = 0.045;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if (500 <= sales &&  sales <= 1000) {
            tradeCommissions = 0.075;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if (1000 <= sales &&  sales <= 10000) {
            tradeCommissions = 0.10;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if ( sales > 10000) {
            tradeCommissions = 0.13;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else {
            console.log("error");
        }
    } else if(town === "Plovdiv") {
        if (0 <= sales &&  sales <= 500) {
            tradeCommissions = 0.055;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if (500 <= sales &&  sales <= 1000) {
            tradeCommissions = 0.08;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if (1000 <= sales &&  sales <= 10000) {
            tradeCommissions = 0.12;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else if ( sales > 10000) {
            tradeCommissions = 0.145;
            totalCommissions = sales * tradeCommissions;
            console.log(totalCommissions.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}




tradeCommissions(["Sofia","1500"])
