function solve(arr) {
    let regularList = [];
    let vipList = [];

    let command = arr.shift();

    while(command !== "PARTY") {

        if(Number(command[0])) {
            vipList.push(command);
        } else {
            regularList.push(command);
        }
        command = arr.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of arr) {
        if(allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1)
        }
    }

    console.log(allGuests.length);
    console.log(allGuests.join("\n"));
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
    'SVQXQCbc'
    ])