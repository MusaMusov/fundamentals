function solve(arr) {
    let characterArray = [];
    for (const line of arr) {
        let [name, level, items] = line.split(" / ");
        characterArray.push({name, level, items});
    }

    characterArray.sort((a, b) => a.level - b.level) 

    for (const character of characterArray) {
        console.log(`Hero: ${character.name}`);
        console.log(`level => ${character.level}`);
        console.log(`items => ${character.items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])