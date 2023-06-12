function solve(num1, num2, num3) {
    let isNegative = false;
    let counter = 0;
    if(num1 < 0) {
        counter++;
    }
    if(num2 < 0) {
        counter++;
    }
    if(num3 < 0){
        counter++;
    }

    if(counter % 2 !== 0) {
        isNegative = true
    }

    if(isNegative) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
} 

solve(5, 12, -15)

