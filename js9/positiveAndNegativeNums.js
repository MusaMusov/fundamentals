function solve(arr) {

    let finalArr = [];

    for (const element of arr) {
        if(element < 0) {
            finalArr.unshift(element)
        } else {
            finalArr.push(element)
        }
    }
    for (const index of finalArr) {
        console.log(index);
    }
    
}