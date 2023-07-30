function secretChat(input) {
    let wordToCorrect = input.shift();
   
    for (const line of input) {
      let isError = false;
   
      if (line === 'Reveal') {
        console.log(`You have a new text message: ${wordToCorrect}`);
        break;
      }
   
      if (line.includes(":|:")) {
        let splittedEl = line.split(":|:");
   
        if (splittedEl.includes("InsertSpace")) {
          let spaceIndex = Number(splittedEl[1]);
          wordToCorrect = wordToCorrect.slice(0, spaceIndex) + " " + wordToCorrect.slice(spaceIndex);
        } else if (splittedEl.includes("Reverse")) {
          let stringToReverse = splittedEl[1];

          if (wordToCorrect.includes(stringToReverse)) {
            let reversedString = stringToReverse.split("").reverse().join("");
            wordToCorrect = wordToCorrect.replace(stringToReverse, reversedString);
          } else {
            isError = true;
            console.log("error");
          }
        } else if (splittedEl.includes("ChangeAll")) {
          let substring = splittedEl[1];
          let replacement = splittedEl[2];
          while(wordToCorrect.includes(substring)){
            wordToCorrect = wordToCorrect.replace(substring, replacement)
        }
        }
      }
      if (isError === false) {
        console.log(wordToCorrect);
      }
    }
  }
  secretChat([
    'heVVodar!gni',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )