function solve(arr) {
    let str = arr.shift();
    arr.pop();
    let strLength = str.length
    
    for (let command of arr) {
        if (command.includes("TakeOdd")) {
            let finalPass = "";
            for (let m = 0; m < strLength; m++) {
                let currLetter = str[m];
                if(m % 2 !== 0) {
                    finalPass += currLetter;
                }
            }
            str = finalPass
            console.log(str);
        } else if (command.includes("Cut")) {
            let currCommand = command.split(" ")
            let index = Number(currCommand[1])
            let length = Number(currCommand[2])
            let cutOut = str.slice(index, index + length)
            str = str.replace(cutOut, "")
            console.log(str);
        } else if (command.includes("Substitute")) {
            let currCommand = command.split(" ");
            let substr = currCommand[1];
            let substitude = currCommand[2];
            if (str.includes(substr)){
                while(str.includes(substr)) {
                    str = str.replace(substr, substitude);
                }
                console.log(str);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${str}`);
}

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqymnmy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
