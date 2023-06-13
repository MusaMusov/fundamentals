function oddEvenSum (num) {

    let evenSum = 0;
    let oddSum = 0;

    let numAsStr = num.toString();

    for(let i = 0; i <= numAsStr.length - 1; i++) {
        let currDigit = Number(numAsStr[i]);
        
        if (currDigit % 2 === 0) {
            evenSum += currDigit;
        } else {
            oddSum += currDigit;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    
}


console.log(oddEvenSum(1000435));