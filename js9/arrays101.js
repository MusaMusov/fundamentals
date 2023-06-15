function solve(arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());

    let result = firstNum + lastNum;
    console.log(result);
}

