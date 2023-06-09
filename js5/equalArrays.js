function solve(arr1, arr2) {
    let sum = 0;
    let indexCounter = 0;
    let isIdentical = true;
    for(let i = 0; i <= arr1.length - 1; i++) {
        if(arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
            indexCounter++;
        } else {
            isIdentical = false;
            break;
        }
    }
    if(isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexCounter} index`);
    }
    
}

solve(['10','20','30'],
['10','20','30'])