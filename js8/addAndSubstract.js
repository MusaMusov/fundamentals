function solve(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }
    
    let sumOfTwoNums = sum(num1, num2);

    function subtract(sumOfTwoNums, num3) {
        return sumOfTwoNums - num3;
    }

    let finalResult = subtract(sumOfTwoNums, num3)
    return finalResult;
}