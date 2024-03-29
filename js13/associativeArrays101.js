function solve(arr) {

    let assocArray = {};

    for (const line of arr) {
        let currLine = line.split(" ");
        assocArray[currLine[0]] = currLine[1];
    }

    for(let line in assocArray) {
        console.log(`${line} -> ${assocArray[line]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])