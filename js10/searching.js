function solve(arr1, taskArray) {
    let takeTask = taskArray[0];
    let deleteTask = taskArray[1];
    let searchedNum = taskArray[2];
    let arrLength = arr1.lengthl

    let newArr = arr1.slice(0, takeTask);
    newArr.splice(0, deleteTask);
    
    let numCounter = 0;

    for(let i = 0; i < newArr.length; i++) {
        let curNum = newArr[i];
        if(curNum === searchedNum) {
            numCounter++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${numCounter} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3])