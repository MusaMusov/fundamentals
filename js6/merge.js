function solve(arr1, arr2) {
    let arr3 = []
    let curNum;
    for(let i = 0; i <= arr1.length - 1; i++) {
        if(i % 2 === 0) {
            curNum = Number(arr1[i]) + Number(arr2[i]);
        } else {
            curNum = arr1[i] + arr2[i];
        }
        arr3.push(curNum)
    }

    console.log(arr3.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])