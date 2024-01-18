function foodDelivery(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegyMenu = Number(input[2]);
    let delivery = 2.5;

    let chikenMenuSum = chikenMenu * 10.35;
    let fishMenuSum = fishMenu * 12.40;
    let vegyMenuSum = vegyMenu * 8.15;
    
    let menuSum = chikenMenuSum + fishMenuSum + vegyMenuSum;
    
    let dessert = menuSum * 0.20;
    let totalSum = menuSum + dessert + delivery;

    console.log(totalSum);

}

foodDelivery(["2","4","3"]);