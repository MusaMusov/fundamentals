function solve(arr) {
    
    let cities = arr.shift()
    let totalProfit = 0;
    let cityCounter = 0;
    for(let i = 0; i < arr.length; i += 3) {
        let currCity = arr[i];
        let currIncome = arr[i + 1];
        let currExpense = arr[i + 2];
        cityCounter++;

        
            if(cityCounter % 3 === 0 && cityCounter % 5 === 0) {
            currIncome *= 0.9;
        } else if(ci % 3 === 0) {
            currExpense *= 1.5;
        } else if(ci % 5 === 0) {
            currIncome *= 0.9
        }
    

        let currProfit = currIncome - currExpense;

        console.log(`In ${arr[i]} Burger Bus earned ${currProfit.toFixed(2)} leva.`);
        totalProfit += currProfit
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

    
}

solve(["5",

"Lille",

"2226.00",

"1200.60",

"Rennes",

"6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"]) 