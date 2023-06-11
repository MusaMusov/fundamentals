function solve(input) {
    let arr1 = [];
    let finalArr = [];
    let finalArr2 = [];
    let biggestNum = Number. MIN_SAFE_INTEGER
    for(let i = input.length - 1; i >= 0; i--) {
        let curNum = Number(input[i]);
        arr1.push(curNum);
        if(curNum > biggestNum) {
            biggestNum = curNum;
            finalArr.push(biggestNum)
        }
    }
    for(let m = finalArr.length - 1; m >= 0; m--) {
        finalArr2.push(finalArr[m])
    }
    console.log(finalArr2.join(" "));
    
}

solve([1, 4, 3, 2])