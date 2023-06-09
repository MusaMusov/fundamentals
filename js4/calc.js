function solve (num1, symbol, num2) {
    let sum = 0;
    switch(symbol) {
        case "+":
            sum = num1 + num2;
            break;
        case "-":
            sum = num1 - num2;
            break;
        case "*":
            sum = num1 * num2;
            break;
        case "/":
            sum = num1 / num2;
            break;
    }

    console.log(sum.toFixed(2));
}