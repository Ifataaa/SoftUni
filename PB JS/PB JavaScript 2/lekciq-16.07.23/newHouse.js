function newHouse (input) {

    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    let leftMoney = 0;

    switch (type) {
        case "Roses" :
            price = count * 5;
            if (count > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias" :
            price = count * 3.80;
            if (count > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips" :
            price = count * 2.80;
            if (count > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus" :
            price = count * 3;
            if (count < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus" :
            price = count * 2.50;
            if ( count < 80) {
                price = price * 1.20;
            }
            break;
    }



    if (budget >= price) {
        leftMoney = (budget - price).toFixed(2);
        console.log(`Hey, you have a great garden with ${count} ${type} and ${leftMoney} leva left.`);      
    } else if (budget < price) {
        leftMoney = (price - budget).toFixed(2);
        console.log(`Not enough money, you need ${leftMoney} leva more.`);
    } 
}

newHouse(["Gladiolus",
"64",
"160"])
