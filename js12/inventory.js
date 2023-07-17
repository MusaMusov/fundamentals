function solve(arr) {
    
    class Hero {
        constructor(name, level, items) {
            this.name = name
            this.level = level
            this.items = items
        }
        
        info() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);
        }
    }
    for (const character of arr) {
        let currInfo = character.split(" / ");
        let currName = currInfo[0];
        let currLevel = currInfo[1];
        let currItems = currInfo[2];

        let currCharacter = new Hero (currName, currLevel, currItems);
        currCharacter.info()
    }

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])