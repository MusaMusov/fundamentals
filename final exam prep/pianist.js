function solve(arr) {
    let pieces = arr.shift();
    let piecesArr = [];
    for (let i = 0; i < pieces; i++) {
        let [name, composer, key] = arr[i].split("|");
        piecesArr.push({ name, composer, key });
    }
    arr.splice(0, pieces);
    arr.pop();

    for (const line of arr) {
        let [command, ...info] = line.split("|");
        if (command === "Add") {
            let [name, composer, key] = info;
            let pieceFinder = piecesArr.find((m) => m.name === name);
            if (pieceFinder) {
                console.log(`${name} is already in the collection!`);
            } else {
                piecesArr.push({ name, composer, key});
                console.log(`${name} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {
            let name = info[0];
            let pieceFinder = piecesArr.find((m) => m.name === name);
            if (pieceFinder) {
                console.log(`Successfully removed ${info}!`);
                pieceFinder.name = undefined
            } else {
                console.log(`Invalid operation! ${info} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let [name, newKey] = info;
            let pieceFinder = piecesArr.find((m) => m.name === name)
            if (pieceFinder) {
                pieceFinder.key = newKey;
                console.log(`Changed the key of ${name} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }

    for (const line of piecesArr) {
        if (line.name) {
            console.log(`${line.name} -> Composer: ${line.composer}, Key: ${line.key}`);
        }
    }

}

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]  
)