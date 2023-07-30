function imitationGame(input) {
    let text = input.shift();
    for (const line of input) {
        let splittedEl = line.split("|");
        if (line.includes("Move")) {
            let numLetters = splittedEl[1];
            let letters = text.slice(0, numLetters);
            text = text.slice(numLetters) + letters;
        } else if (line.includes("Insert")) {
            let index = Number(splittedEl[1]);
            let value = splittedEl[2];
            text = text.slice(0, index) + value + text.slice(index);
        } else if (line.includes("ChangeAll")) {
            let substring = splittedEl[1];
            let replacement = splittedEl[2];
            if (text.includes(substring)) {
                for (const line of text) {
                    text = text.replace(substring, replacement)
                }
            }
        }
    }
    console.log(`The decrypted message is: ${text}`);
}

imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]
)