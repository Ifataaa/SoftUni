function fruitOrVegetable (input) {

    let product = input[0];

    if (product === "banana" || product === "apple" || product === "cherry" || product === "lemon" || product ==="grapes" || product === "kiwi") {
        console.log("fruit");
    } else if ( product === "tomato" || product === "cucumber" || product === "pepper" || product === "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

fruitOrVegetable(["banana"])