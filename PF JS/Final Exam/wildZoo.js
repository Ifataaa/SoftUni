function wildZoo(input) {
    let animals = []


    while (input[0] != "EndDay") {
        let command = input.shift();


        if (command.includes("Add")) {
            let tokens = command.split(': ');
            let info = tokens[1].split('-');
            let name = info[0];
            let neededFood = Number(info[1])
            let area = info[2];

            for (let el of animals) {
                if (name in el) {
                    animals.neededFood += neededFood
                } else {
                    let animal = {}
                    animal.name = name;
                    animal.neededFood = neededFood;
                    animal.area = area;
                    animals.push(animal)
                }
            }

        }
        if (command.includes('Feed')) {
            let feeding = command.split(': ');
            let feedInfo = feeding[1].split('-');
            let currName = feedInfo[0];
            let foodQty = Number(feedInfo[1]);
            for (let el of animals) {
                if (el.name == currName) {
                    el.neededFood -= foodQty;
                    if (el.neededFood <= 0) {
                        console.log(`${el.name} was successfully fed`)
                    }
                }
            }
        }
    }

    console.log(animals);

}

wildZoo((["Add: Adam-4500-ByTheCreek",

    "Add: Maya-7600-WaterfallArea",

    "Add: Maya-1230-WaterfallArea",

    "Feed: Jamie-2000",

    "EndDay"]));


// wildZoo((["Add: Jamie-600-WaterfallArea",

//     "Add: Maya-6570-WaterfallArea",

//     "Add: Adam-4500-ByTheCreek",

//     "Add: Bobbie-6570-WaterfallArea",

//     "Feed: Jamie-2000",

//     "Feed: Adam-2000",

//     "Feed: Adam-2500",

//     "EndDay"]));


// wildZoo((["Add: Bonie-3490-RiverArea",

// "Add: Sam-5430-DeepWoodsArea",

// "Add: Bonie-200-RiverArea",

// "Add: Maya-4560-ByTheCreek",

// "Feed: Maya-2390",

// "Feed: Bonie-3500",

// "Feed: Johny-3400",

// "Feed: Sam-5500",

// "EndDay"]));
