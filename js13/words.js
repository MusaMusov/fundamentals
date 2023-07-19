function solve(arr) {
    let assocArray = {};
    let wordsArray = [];
    for (const word of arr) {

        if(!wordsArray.includes(word)) {
            assocArray[word] = 1;
            wordsArray.push(word);
        } else {
            assocArray[word] += 1;
        }
    }

    let wordEntries = Object.entries(assocArray);
    wordEntries.sort((a, b) => b[1] - a[1])

    for (const entry of wordEntries) {
        let [word, repetitions] = entry;

        console.log(`${word} -> ${repetitions} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])