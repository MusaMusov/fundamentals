function solve(arr) {
    let daysArray = [];

    let assocArray = {};

    for (const line of arr) {
        let currLine = line.split(" ");
        
        if(!daysArray.includes(currLine[0])) {
            daysArray.push(currLine[0]);
            assocArray[currLine[0]] = currLine[1];
            console.log(`Scheduled for ${currLine[0]}`);
        } else {
            console.log(`Conflict on ${currLine[0]}!`);
        }
        
    }

    for(let line in assocArray) {
        console.log(`${line} -> ${assocArray[line]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);