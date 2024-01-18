function inventory(arr) {
    let heroes = [];

    for (let command of arr) {
        let hero = command.split(' / ');
        let name = hero[0];
        let level = Number(hero[1]);

        let heroObj = { Hero: name, level: level, };

        let tokens = command.split(`${name} / ${level} / `);
        let items = tokens[1].split(', ');
        heroObj.items = items.join(', ');
        heroes.push(heroObj);
    }
    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    for (let heroInfo of sortedHeroes) {
        let entries = Object.entries(heroInfo);
        console.log(entries[0][0] + ': ' + entries[0][1])
        console.log(entries[1][0] + ' => ' + entries[1][1])
        console.log(entries[2][0] + ' => ' + entries[2][1])

    }
}



// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// );
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);
