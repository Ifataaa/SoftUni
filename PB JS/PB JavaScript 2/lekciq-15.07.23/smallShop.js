function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let ammount = Number(input[2]);
    let price = 0;
    let totalPrice = 0;

    if (town === "Sofia") {
        if ( product === "coffee" )
        {
            price = 0.50;
            let totalPrice = price * ammount;
            console.log(totalPrice); 
        }  else if (product === "water") {
            price = 0.80;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "beer") {
            price = 1.20;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "sweets") {
            price = 1.45;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "peanuts") {
            price = 1.60;
            totalPrice = price * ammount;
            console.log(totalPrice);
        }
    } else if ( town === "Plovdiv") {
        if ( product === "coffee" )
        {
            price = 0.40;
            let totalPrice = price * ammount;
            console.log(totalPrice); 
        }  else if (product === "water") {
            price = 0.70;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "beer") {
            price = 1.15;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "sweets") {
            price = 1.30;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "peanuts") {
            price = 1.50;
            totalPrice = price * ammount;
            console.log(totalPrice);
        }
    } else if ( town === "Varna") {
        if ( product === "coffee" ) {
            price = 0.45;
            let totalPrice = price * ammount;
            console.log(totalPrice); 
        }  else if (product === "water") {
            price = 0.70;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "beer") {
            price = 1.10;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "sweets") {
            price = 1.35;
            totalPrice = price * ammount;
            console.log(totalPrice);
        } else if ( product === "peanuts") {
            price = 1.55;
            totalPrice = price * ammount;
            console.log(totalPrice);
        }
    } 
}


smallShop(["sweets","Sofia","2.23"])


