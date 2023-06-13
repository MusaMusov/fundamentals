function factorial(num1, num2) {

    let subtraction = 0;
    function factorialNumberOne(num1) {
        for(let i = num1 - 1; i >= 1; i--) {
            num1 *= i;
            
        }
        return num1;
    }
    let result1 = factorialNumberOne(num1);

    function factorialNumberTwo(num2) {
        for(let j = num2 - 1; j >= 1; j--) {
            num2 *= j;
        }
        return num2;
    }
    let result2 = factorialNumberTwo(num2);

    subtraction = result1 / result2;
    return subtraction.toFixed(2);
}

factorial(5, 2)