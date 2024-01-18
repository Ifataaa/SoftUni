function oddOccurrences(str) {
    let converted = str.toLowerCase().split(' ');
    let object = {};
    let output = '';
    for (let el of converted) {
        if (!(el in object)) {
            object[el] = 1
        } else {
            object[el]++
        }
    }
    for (let [key, value] of Object.entries(object)) {
        if (value % 2 == 1) {
            output += key + ' '
        }
    }
    console.log(output)
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');