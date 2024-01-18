function loadingBar(num) {
    let dividedNum = num / 10;
    let percent = '%'.repeat(dividedNum)
    let dot = '.'.repeat(10 - dividedNum)
    let res = `${num}% [${percent}${dot}]`

    if(num !== 100) {
        console.log(res);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${percent}]`);
    }
}


// loadingBar(30);
// loadingBar(50);
loadingBar(100);
