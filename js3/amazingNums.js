function solve(num) {
    let numAsStr = num.toString()
    let sum = 0;
    let isAmazing = false;
    for(let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]); 
    } 

    let sumAsStr = sum.toString()

    for(let m = 0; m < sumAsStr.length; m++) {
        if(Number(sumAsStr[m]) === 9) {
            isAmazing = true;
        }
    }

    if(isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

solve(1233)