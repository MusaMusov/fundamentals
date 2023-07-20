function solve(arr) {

    let guestsArr = {};

    let invitedArr = [];
    for (const guest of arr) {
        if(guest !== "PARTY") {
            invitedArr.push(guest)
        } else {
            break;
        }
    }

    let partyIndex = arr.indexOf("PARTY");
    arr.splice(0, partyIndex + 1)

    for (const guest of invitedArr) {
        if(arr.includes(guest)) {
            guestsArr[guest] = true;
        } else {
            guestsArr[guest] = false;
        }
    }

    let missingCounter = 0;
    let missingArr = [];
    let missingVIP = [];

    for (const guest in guestsArr) {
        if(guestsArr[guest] === false) {
            missingCounter++;
            if(isNaN(guest[0])) {
                missingArr.push(guest);
            } else {
                missingVIP.push(guest);
            }
        } 
    }

    
    console.log(missingCounter);
    console.log(missingVIP.join("\n"));
    console.log(missingArr.join("\n"));
}

solve([
'9NoBUajQ',
'Ce8vwPmE',
'7IK9Yo0h',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'7IK9Yo0h',
'SVQXQCbc'
])