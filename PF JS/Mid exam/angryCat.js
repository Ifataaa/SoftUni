function calculateDamageAndPosition(ratings, entryPoint, type) {
    let leftDamage = 0;
    let rightDamage = 0;

    if (type === "cheap") {
        for (let i = 0; i < entryPoint; i++) {
            if (ratings[i] < ratings[entryPoint]) {
                leftDamage += ratings[i];
            }
        }
        for (let i = entryPoint + 1; i < ratings.length; i++) {
            if (ratings[i] < ratings[entryPoint]) {
                rightDamage += ratings[i];
            }
        }
    } else if (type === "expensive") {
        for (let i = 0; i < entryPoint; i++) {
            if (ratings[i] >= ratings[entryPoint]) {
                leftDamage += ratings[i];
            }
        }
        for (let i = entryPoint + 1; i < ratings.length; i++) {
            if (ratings[i] >= ratings[entryPoint]) {
                rightDamage += ratings[i];
            }
        }
    }

    let position = (leftDamage >= rightDamage) ? "Left" : "Right";
    let sum = Math.max(leftDamage, rightDamage);

    console.log(`${position} - ${sum}`);
}

// Example usages
calculateDamageAndPosition([1, 5, 1], 1, "cheap");
calculateDamageAndPosition([5, 10, 12, 5, 4, 20], 3, "cheap");
calculateDamageAndPosition([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
