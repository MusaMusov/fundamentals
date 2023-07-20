function solve(arr) {
    let searchedWords = arr.shift().split(" ");

    let assocArray = {};
    for (const word of searchedWords) {
        assocArray[word] = 0
    }

    for (const word of arr) {
        if(searchedWords.includes(word)) {
            assocArray[word] += 1;
        } 
    }

    let wordEntries = Object.entries(assocArray);
    wordEntries.sort((a, b) => b[1] - a[1])

    for(let entry of wordEntries) {
        let [word, repetitions] = entry
        console.log(`${word} - ${repetitions}`);
    }


}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])