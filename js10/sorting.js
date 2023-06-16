function sorting(arr) {

    let finalArr = [];
    let sortedArr = arr.sort((a, b) => {
        return b - a;
    })
    let arrLength = sortedArr.length;

    for(let i = 0; i <= arrLength / 2; i++) {
        let firstNum = sortedArr.shift();
        let lastNum = sortedArr.pop();
        finalArr.push(firstNum)
        finalArr.push(lastNum)
    }

    console.log(finalArr.join(" "));
}