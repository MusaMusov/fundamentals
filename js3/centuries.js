function solve(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let mins = hours * 60;
    console.log(`${Math.floor(centuries)} centuries = ${Math.floor(years)} years = ${Math.floor(days)} days = ${Math.floor(hours)} hours = ${Math.floor(mins)} minutes`);
}

solve(5)