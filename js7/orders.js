function solve(product, amount) {
    let total = 0;
    if(product === "coffee") {
        total = amount * 1.5;
    } else if(product === "water") {
        total = amount * 1;
    } else if(product === "coke") {
        total = amount * 1.4;
    } else if(product === "snacks") {
        total = amount * 2;
    }

    console.log(total.toFixed(2));
}