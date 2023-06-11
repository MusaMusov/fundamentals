function solve(input){
    
    let firstSum = 0;
    let secondSum = 0;
    let finalArr = []
    for(let i = 0; i <= input.length - 1; i++) {
        firstSum += Number(input[i]);
    }
    
    for(let m = 0; m <= input.length - 1; m++) {
        let curNum = Number(input[m]);
        if(curNum % 2 === 0) {
            curNum += m
        } else {
            curNum -= m
        }
        secondSum += curNum;
        finalArr.push(curNum)
    }
    console.log(finalArr);
    console.log(firstSum);
    console.log(secondSum);
    
}

solve([5, 15, 23, 56, 35])