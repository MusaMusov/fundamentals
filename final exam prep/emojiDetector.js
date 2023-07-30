function solve(arr) {
    let template = /([:*]){2}[A-Z][a-z]{2,}\1{2}/g
    let coolTresholdTemplate = /\d/g
    let emojiObj = {};
    let emojiMatches = arr[0].match(template);
    let coolnessTresholdMatches = arr[0].match(coolTresholdTemplate);
    let emojisOnly = /\w+/g;
    let coolnessTreshold = 1;
    for (const digit of coolnessTresholdMatches) {
        coolnessTreshold *= Number(digit);
    }

    console.log(`Cool threshold: ${coolnessTreshold}`);

    for (const match of emojiMatches) {
        let currMatch = match.match(emojisOnly);

        let letterArr = currMatch[0].split("");
        let totalPoints = 0;
        for(let i = 0; i < letterArr.length; i++) {
            let points = currMatch[0].charCodeAt(i);
            totalPoints += points;
        }
        emojiObj[match] = totalPoints;
    }
    console.log(`${emojiMatches.length} emojis found in the text. The cool ones are:`);
    for(let line in emojiObj) {
        if(emojiObj[line] > coolnessTreshold){
            console.log(line);
        }
    }
    

}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])