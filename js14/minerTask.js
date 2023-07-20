function solve(arr) {
    let resourcesArray = {};

    for(let i = 0; i < arr.length; i += 2) {
        let currResource = arr[i];
        let currAmount = Number(arr[i + 1]);

        if(!resourcesArray.hasOwnProperty(currResource)) {
            resourcesArray[currResource] = currAmount
        } else {
            resourcesArray[currResource] += currAmount
        }
    }

    for(let line in resourcesArray) {
        console.log(`${line} -> ${resourcesArray[line]}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])