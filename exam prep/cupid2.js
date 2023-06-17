function cupid(arr) {
    let neighbourhood = arr.shift().split("@").map(Number);
    let cupidIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        let currCommand = arr[i].split(" ")
        
        if(currCommand[0] === "Love!") {
            break;
        } else {
            let currJump = Number(currCommand[1]);
            cupidIndex += currJump;
            
            if(cupidIndex >= neighbourhood.length) {
                cupidIndex = 0;
            }
            let currentHouse = Number(neighbourhood[cupidIndex])
            if(currentHouse === 0) {
                console.log(`Place ${cupidIndex} already had Valentine's day.`);
            } else {
                currentHouse -= 2;
                neighbourhood[cupidIndex] -= 2
                if(currentHouse === 0) {
                    console.log(`Place ${cupidIndex} has Valentine's day.`);
                } 
            }
        }
    }

    let missedHouses = 0;

    for (const houses of neighbourhood) {
        if(houses != 0) {
            missedHouses++
        }
    }
    if(cupidIndex > neighbourhood.length){
        cupidIndex %= neighbourhood.length
        console.log(`Cupid's last position was ${cupidIndex}.`);
    } else {
        console.log(`Cupid's last position was ${cupidIndex}.`);
    }
    if(missedHouses === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${missedHouses} places.`);
    }
}

cupid(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3", 
"Jump 1",
"Love!"])
