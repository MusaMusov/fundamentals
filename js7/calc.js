function solve(num1, num2, operator) {
    let result = 0;
    if(operator === "multiply") {
        result = (num1, num2) => num1 * num2;
    } else if(operator === "divide") {
        result = (num1, num2) => num1 / num2;
    } else if(operator === "add") {
        result = (num1, num2) => num1 + num2;
    } else if(operator === "subtract") {
        result = (num1, num2) => num1 - num2;
    }

    console.log(result(num1, num2));
}

solve(5,
    5,
    'multiply')