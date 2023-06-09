function solve(arr1) {
    let sum = 0;
    for(let i = 0; i <= arr1.length - 1; i++) {
        if(arr1[i + 1] === undefined) {
            continue;
        } else {
            sum += arr1[i] + arr1[i + 1];
        }
    }
    console.log(sum);
}
solve([5,0,4,1,2])