function cupid(arr) {
    let neighbourhood = arr.shift().split("@").map(Number);
    let arrayLength = arr.length;
    let jumpCounter = 0;
    for(let i = 0; i < arrayLength; i++) {
        let currCommand = arr[i].split(" ");
        
        if(currCommand[0] === "Love!") {
            break;
        } else if(currCommand[0] === "Jump") {
            let currJump = Number(currCommand[1]);
            let lastJump = Number(arr[i - 1].split(" "))
            jumpCounter += currJump;
            if(currJump < neighbourhood.length) {
                neighbourhood[currJump] -= 2;
            } else {
                let longJump = currJump + jumpCounter % neighbourhood;
                neighbourhood[longJump] -= 2;
            }

            if(neighbourhood.includes(0)) {
                let index = neighbourhood.indexOf(0);
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }
    let failedHouses = 0;
    for (const element of neighbourhood) {
        if(element !== 0) {
            failedHouses++
        } 
    }

    let lastPosition = jumpCounter % (neighbourhood.length - 1);
    console.log(lastPosition);
}


cupid(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
