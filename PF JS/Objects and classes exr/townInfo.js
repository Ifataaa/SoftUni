function towns(arr) {
    for(let info of arr) {
    let townInfo = info.split(' | ');
    let townObj = { town: townInfo[0], latitude: (Number(townInfo[1])).toFixed(2), longitude: (Number(townInfo[2])).toFixed(2)}
    console.log(townObj)
    }
}

towns(['Plovdiv | 136.45 | 812.575'])