function mirrorWords(input) {
    let text = input.shift();
    let pattern = /([\@]|[\#])([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
    let matches = text.match(pattern);
    let minorArr = [];
    let isMirror = false;
    let wordCount = 0;
    if (matches) {
        for (const match of matches) {
            wordCount++;
            if (match.includes('#')) {
                let splittedEl = match.split("#")
                let firstWord = splittedEl[1];
                let secondWord = splittedEl[3];
                let reversedSecondWord = secondWord.split("").reverse().join("")
                if (firstWord === reversedSecondWord) {
                    minorArr.push(`${firstWord} <=> ${secondWord}`)
                    isMirror = true
                }
            } else if (match.includes('@')) {
                let splittedEl = match.split("@")
                let firstWord = splittedEl[1];
                let secondWord = splittedEl[3];
                let reversedSecondWord = secondWord.split("").reverse().join("")
                if (firstWord === reversedSecondWord) {
                    minorArr.push(`${firstWord} <=> ${secondWord}`)
                    isMirror = true;
                }
            }
        }
    }
    if (wordCount > 0) {
        console.log(`${wordCount} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

    if (isMirror) {
        console.log("The mirror words are: ");
        console.log(minorArr.join(", "));
    } else {
        console.log('No mirror words!');
    }
    
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])