
function nonDecreasingSubset(input) {
    let filteredArr = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < input.length; i++) {
        filteredArr = input.filter(x, biggestNum => {
            x > biggestNum;
            x = biggestNum;
            
        })
    }
    console.log(filteredArr.join(' '));

}
