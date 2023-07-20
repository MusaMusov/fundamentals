function solve(input) {
    let arr = input.split(" ");
    let assocArray = {};
    let lowerCaseArr = [];
    for (const word of arr) {
        lowerCaseArr.push(word.toLowerCase());
    }



    for (const word of lowerCaseArr) {
        assocArray[word] = 0;
    }

    let wordsArr = [];
    for (const word of lowerCaseArr) {
        
        if(!wordsArr.includes(word)) {
            wordsArr.push(word);
        } else {
            assocArray[word] += 1;
        }
    }

    let finalArr = [];

    for(let word in assocArray) {
        if(assocArray[word] % 2 === 0) {
            finalArr.push(word)
        }
    }

    console.log(finalArr.join(" "));
} 

solve("Cake IS SWEET is Soft CAKE sweet Food")