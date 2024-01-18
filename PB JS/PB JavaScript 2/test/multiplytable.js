function  multplyTable([input]) {
    let n = Number(input[0])

    let hundreds = n % 10;
    let left1 = (n - hundreds)/ 10;
    let decimals = left1 % 10;
    let edenici = (left1 - decimals) / 10;
    
 
    for (let i = 1; i <= hundreds; i++) {
        for (let j = 1; j <= decimals; j++) {
            for (let k = 1; k <= edenici; k++) {
                let result = i * j * k;
               console.log(`${i} * ${j} * ${k} = ${result};`);  
                
            }
            
        }
        
    }
    
}


multplyTable(["324"])