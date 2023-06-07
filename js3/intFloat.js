function solve(a, b, c) {
    let sum = a + b + c;
    if(sum % 1 === 0) {
        sum += " - Integer"
    } else {
        sum += " - Float"
    }

    console.log(sum);
}