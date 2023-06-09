function solve(numsArray) {

    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i <= numsArray.length - 1; i++) {
        let currentNum = Number(numsArray[i]);
        if(currentNum % 2 === 0) {
            evenSum += currentNum
        } else {
            oddSum += currentNum
        }
    }

    console.log(evenSum - oddSum);
}