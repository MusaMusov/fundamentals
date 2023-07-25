function solve(numbers) {
    let numsString = numbers[0];

    let template = /\+359([- ])2\1[0-9]{3}\1[0-9]{4}\b/g;

    let result = numsString.match(template);
    
    console.log(result.join(", "));
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])