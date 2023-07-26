function solve(arr) {
    let playersList = arr.shift().split(", ");
    let playerObj = {};
    let lettersTemplate = /(?<letters>[A-Za-z]+)/g
    let pointsTemplate = /(?<points>\d)/g

    for (const player of playersList) {
        playerObj[player] = 0;
    }

    for (const line of arr) {
        let totalPoints = 0;
        if(line === "end of race") {
            break;
        }
        let name = (line.match(lettersTemplate)).join("")
        let points = line.match(pointsTemplate)
        for (const point of points) {
            totalPoints += Number(point)
        }

        if(playerObj.hasOwnProperty(name)) {
            playerObj[name] += totalPoints
        }
    }

    let playerEntries = Object.entries(playerObj);
    playerEntries.sort((a, b) => b[1] - a[1]);
    let topThreeList = playerEntries.splice(0, 3);
    
    

    console.log(`1st place: ${topThreeList[0][0]}`);
    console.log(`2nd place: ${topThreeList[1][0]}`);
    console.log(`3rd place: ${topThreeList[2][0]}`);
}

solve(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])