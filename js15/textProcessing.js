function solve(sentence, searchedWord) {
    let wordsArr = sentence.split(" ");
    let wordsCounting = {};

    for (const word of wordsArr) {
        if (!wordsCounting.hasOwnProperty(word)) {
            wordsCounting[word] = 1;
        } else {
            wordsCounting[word] += 1;
        }
    }

    if (wordsCounting[searchedWord] > 0) { 
        console.log(wordsCounting[searchedWord]); 
    } else {
        console.log(0);
    }
}

solve('This is a word and it also is a sentence',
    'isd')