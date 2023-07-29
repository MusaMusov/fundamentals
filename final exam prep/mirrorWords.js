function solve(arr) {
    let template = /([@#])([A-Za-z]{3,})\1{2}[A-Za-z]{3,}\1/g;
    let isMirror = false;
    let finalArr = [];
    let matches = arr[0].match(template)
    let wordsArr = {};
    let validCounter = 0;
    if (matches) {
        for (let pair of matches) {
            if (pair.includes("#")) {
                let validPair = pair.split("#")
                validCounter++;
                let reversedWord = validPair[3].split("").reverse().join("");
                if (validPair[1] === reversedWord) {
                    isMirror = true
                    wordsArr[validPair[1]] = validPair[3];
                }
            } else if (pair.includes("@")) {
                let validPair = pair.split("@")
                validCounter++;
                let reversedWord = validPair[3].split("").reverse().join("");
                if (validPair[1] === reversedWord) {
                    isMirror = true
                    wordsArr[validPair[1]] = validPair[3];
                }
            }
        }
    }
    for (const word in wordsArr) {
        finalArr.push(`${word} <=> ${wordsArr[word]}`);
    }
    if (validCounter > 0) {
        console.log(`${validCounter} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    if (isMirror) {
        console.log(`The mirror words are: \n ${finalArr.join(", ")}`);
    } else {
        console.log("No mirror words!");
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)