function solve(arr) {
    let smallToBigNum = arr.sort((a, b) => {
        return a - b;
    });
    let smallestTwo = smallToBigNum.slice(0, 2);
    console.log(smallestTwo.join(" "));
}

solve([30, 15, 50, 5])