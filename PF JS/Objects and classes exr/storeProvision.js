function storeProvision(currProduce, orderedProduce) {
    let output = {}
    for (let i = 0; i < currProduce.length; i += 2) {
        output[currProduce[i]] = Number(currProduce[i + 1]);
    }
    for (let i = 0; i < orderedProduce.length; i += 2) {
        let produce = orderedProduce[i];
        let qty = Number(orderedProduce[i + 1]);
        if (produce in output) {
            output[produce] += qty
        } else {
            output[produce] = qty
        }
    }
    let entries = Object.entries(output);
    for (let [product, qty] of entries) {
        console.log(product + ' -> ' + qty);
    }
}

// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])