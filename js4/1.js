function solve (num) {

    let numAsDigit = num.toString();
    let sum = 0;
    for(let i = 0; i < numAsDigit.length; i++) {
        sum += Number(numAsDigit[i]);
    }

    console.log(sum);
}

solve(245678)