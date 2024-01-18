function sameNumbers (a) {
    a = a.toString();

    let sum = a[0];
    let isSame = true;
    
    for(let i = 1; i < a.length; i++) {
        sum += Number(a[i]);
        
        if (a[i] !== a[i - 1]) {
            isSame = false;
        }

    }
    
    console.log(isSame);
    console.log(sum);

}

sameNumbers(2222222);
sameNumbers(1234);