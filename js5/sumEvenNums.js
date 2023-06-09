function solve(numsArray) {
    let sum = 0;
    for(let i = 0; i <= numsArray.length - 1; i++) {
        if(Number(numsArray[i]) % 2 === 0) {
            sum += Number(numsArray[i]);
        }
        
    }

    console.log(sum);
}