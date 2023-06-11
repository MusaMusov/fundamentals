function solve(input) {
    let sameCounter = 1;
    let maxCounter = Number.MIN_SAFE_INTEGER;
    let sequenceNum = 0;
    let sequenceArr = [];
    for(let i = 0; i <= input.length - 1; i++) {
        let currentNum = Number(input[i]);
        let lastNum = Number(input[i - 1]);
        if(currentNum === lastNum && lastNum !== undefined) {
            sameCounter++;
        } else {
            sameCounter = 1;
        }

        if(sameCounter > maxCounter){
            maxCounter = sameCounter;
            sequenceNum = currentNum;
        }
    }

    console.log((sequenceNum + " ").repeat(maxCounter));

    
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] )