function lunchBreak(input) {

    let serialName = input[0];
    let serialLenght = Number(input[1]);
    let lunchLenght = Number(input[2]);

    let eatingTime = lunchLenght / 8;
    let restTime = lunchLenght / 4;
     
    let leftTime = lunchLenght - (eatingTime + restTime);

    if(leftTime >= serialLenght) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime - serialLenght)} minutes free time.`);
    } else if ( serialLenght > leftTime) {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(serialLenght - leftTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones","60","96"])
