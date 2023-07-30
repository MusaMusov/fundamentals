function passwordReset(input) {
    let text = input.shift();
    for (const line of input) {
        if (line === "Done") {
            break;
        }
        let splittedEl = line.split(" ");
        if (splittedEl.includes("TakeOdd")) {
            let concatenatedWord = '';
            for (let index = 0; index < text.length; index++) {
                let letters = text[index];
                if (index % 2 !== 0) {
                    concatenatedWord += letters;
                }
            }
            text = concatenatedWord;
            console.log(text);
        } else if (splittedEl.includes("Cut")) {
            let startIndex = Number(splittedEl[1]);
            let length = Number(splittedEl[2]);
            let endIndex = length + startIndex;
            text = text.slice(0, startIndex) + text.slice(endIndex);
            console.log(text);
        } else if (splittedEl.includes("Substitute")) {
            let substring = splittedEl[1];
            let substitute = splittedEl[2];

            if (text.includes(substring)) {
                for (const line of text) {
                    text = text.replace(substring, substitute);
                }
                console.log(text);
            } else {
                console.log("Nothing to replace!");
            }
        }

    }
    console.log(`Your password is: ${text}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])