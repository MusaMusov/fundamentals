function solve(startingYield) {

    let days = 0;
    let totalSpices = 0;
    let dailyConsume = 0;
    for(let i = startingYield; i >= 100; i -= 10) {
        totalSpices += i;
        days++;
        
    }
    if(totalSpices >= 26) {
        totalSpices -= 26
    }

    console.log(days);
    console.log(totalSpices - days * 26);
}

solve(111)