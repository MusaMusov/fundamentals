function solve(input) {
    let isEqual = false;
    let equalIndex = 0;
    for (let i = 0; i <= input.length - 1; i++) {
        let curNum = Number(input[i]);
        let leftSum = 0;
        let rightSum = 0;

        for (let left = i - 1; left >= 0; left--) {
            leftSum += Number(input[left]);
        }
        for (let right = i + 1; right <= input.length - 1; right++) {
            rightSum += Number(input[right]);
        }
        if (leftSum === rightSum) {
            isEqual = true;
            equalIndex = i;

        }
    }
    if (isEqual) {
        console.log(equalIndex);
    } else {
        console.log("no");
    }
}

solve([1])