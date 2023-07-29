function solve(arr) {
    let heroesCount = arr.shift()
    let heroesArr = [];

    for(let i = 0; i < Number(heroesCount); i++) {
        let currHero = arr[i];
        let [name, hp, mp] = currHero.split(" ");
        hp = Number(hp);
        mp = Number(mp);
        heroesArr.push({name, hp, mp})
    }
    arr.splice(0, heroesCount);
    
    for (const line of arr) {
        let [command, hero, ...info] = line.split(" - ");
        if(command === "CastSpell") {
            let heroFinder = heroesArr.find((m) => m.name === hero) 
            let [mpNeeded, spellName] = info;
            mpNeeded = Number(mpNeeded)
            if(heroFinder.mp >= mpNeeded) {
                heroFinder.mp -= mpNeeded;
                console.log(`${heroFinder.name} has successfully cast ${spellName} and now has ${heroFinder.mp} MP!`);
            } else {
                console.log(`${heroFinder.name} does not have enough MP to cast ${spellName}!`);
            }
        } else if(command === "TakeDamage") {
            let heroFinder = heroesArr.find((m) => m.name === hero) 
            let [damage, attacker] = info;
            damage = Number(damage)
            if(heroFinder.hp - damage > 0) {
                heroFinder.hp -= damage
                console.log(`${heroFinder.name} was hit for ${damage} HP by ${attacker} and now has ${heroFinder.hp} HP left!`);
            } else {
                heroFinder.hp -= damage
                console.log(`${heroFinder.name} has been killed by ${attacker}!`);
            }
        } else if(command === "Recharge") {
            let heroFinder = heroesArr.find((m) => m.name === hero) 
            let mpStat = Number(info);
            let previousMp = heroFinder.mp;
            if(heroFinder.mp + mpStat > 200) {
                let mpRecovered = 200 - previousMp;
                heroFinder.mp = 200;
                console.log(`${heroFinder.name} recharged for ${mpRecovered} MP!`);
            } else {
                heroFinder.mp += mpStat;
                console.log(`${heroFinder.name} recharged for ${mpStat} MP!`);
            }
        } else if(command === "Heal") {
            let heroFinder = heroesArr.find((m) => m.name === hero);
            let hpStat = Number(info);
            let previousHp = heroFinder.hp;
            if(heroFinder.hp + hpStat > 100) {
                let hpRecovered = 100 - previousHp;
                heroFinder.hp = 100;
                console.log(`${heroFinder.name} healed for ${hpRecovered} HP!`);
            } else {
                heroFinder.hp += hpStat;
                console.log(`${heroFinder.name} healed for ${hpStat} HP!`);
            }
        } else if(command === "End") {
            break;
        }
    }
    for (const member of heroesArr) {
        if(member.hp > 0) {
            console.log(member.name);
            console.log(`HP: ${member.hp}`);
            console.log(`MP: ${member.mp}`);
        }
    }
}

solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 60",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 90",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 60 - ViewEarth",
    "End"
    ])