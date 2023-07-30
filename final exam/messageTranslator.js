function solve(arr) {
    let lines = arr.shift();
    let template = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}\]/g
    let wordTemplate = /\w+/g
    for (const line of arr) {
        let totalPoints = "";
        if(line.match(template)) {
            let wordArr = line.split(":");
            let correctWord = wordArr[1];
            let command = wordArr[0];
            correctWord = correctWord.match(wordTemplate);
            command = command.match(wordTemplate);
            let correctArr = correctWord[0].split("");
            for(let i = 0; i < correctArr.length; i++) {
                let code = correctWord[0].charCodeAt(i);
                totalPoints += code + " "
            }
            console.log(`${command}: ${totalPoints}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

solve([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])