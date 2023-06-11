function solve(arr, num) {
    let finalArr = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        let curNum = Number(arr[i]);
        for(let j = i + 1; j <= arr.length - 1; j++) {
            let secondNum = Number(arr[j]);
            finalArr = []
            if(curNum + secondNum === num) {
                finalArr.push(curNum);
                finalArr.push(secondNum);
                console.log(finalArr.join(" "));
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8)