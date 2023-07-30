function solve(arr) {
    let text = arr.shift();
    for (const line of arr) {
        let [command, ...info] = line.split("|");
        if (command === "Move") {
            let lettersAmount = Number(info);
            let removedLetters = text.slice(0, lettersAmount)
            text = text.slice(lettersAmount) + removedLetters
        } else if (command === "Insert") {
            let [index, value] = info;
            index = Number(index);
            text = text.slice(0, index) + value + text.slice(index);
        } else if (command === "ChangeAll") {
            let [substr, substitute] = info;
            if (text.includes(substr)) {
                while (text.includes(substr)) {
                    text = text.replace(substr, substitute)
                }
            }
        }
    }
    console.log(`The decrypted message is: ${text}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )