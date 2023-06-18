function spaceTravel(arr) {
    let commands = arr.shift().split("||")
    let startingFuel = arr.shift().split(" ").map(Number)
    let startingAmmo = arr.shift().split(" ").map(Number)        
    let arrLength = commands.length;
    for(let i = 0; i < arrLength; i++) {
        let currCommand = commands[i].split(" ");

        if(currCommand[0] === "Travel") {
            if(currCommand[1] <= startingFuel) {
                console.log(`The spaceship travelled ${currCommand[1]} light-years.`);
                startingFuel[0] -= currCommand[1];
            } else {
                console.log("Mission failed.");
                break;
            }
        } else if(currCommand[0] === "Enemy") {
            if(currCommand[1] <= startingAmmo[0]) {
                console.log(`An enemy with ${currCommand[1]} armour is defeated.`); 
                startingAmmo[0] -= currCommand[1];
            } else {
                if(startingFuel[0] / 2 >= currCommand[1]) {
                    console.log(`An enemy with ${currCommand[1]} armour is outmaneuvered.`);
                    startingFuel[0] -= (currCommand[1] * 2);
                } else {
                    console.log("Mission failed.");
                    break;
                }
            }
        } else if(currCommand[0] === "Repair") {
            console.log(`Ammunitions added: ${currCommand[1] * 2}.`);
            startingAmmo[0] += Number(currCommand[1]);
            console.log(`Fuel added: ${currCommand[1]}.`);
            startingFuel[0] += Number(currCommand[1]);
        } else if(currCommand[0] === "Titan") {
            console.log(`You have reached Titan, all passengers are safe.`);
        }
    }
}

spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',

'60',

'100' ])