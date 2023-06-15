function solve(length, k) {
    let arr = [];
    let finalArr = [];
    for(let i = 1; i <= length; i++) {
        if(i < k) {
            let sum = 0;
            for(let j = 1; j <= i; j++) {
                sum += j;
            }
            arr.push(sum);
            finalArr.push(sum);
        } else {
            arr.shift();
            let sum = 0;
            for(let j = i; i <= k; j++) {
                sum += j;
            }
            arr.push(sum);
            finalArr.push(sum);
        }
    }
    console.log(finalArr.join(" "));
}

solve(6, 3)