function squareOfStars (n) {
    for(let row = 0; row < n; row++) {
        if(row === 0 || row === n - 1) {
            console.log('*'.repeat(n));
            continue;
        }
        console.log(`*${' '.repeat(n - 2)}*`);
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);