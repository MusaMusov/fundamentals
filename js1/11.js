function solve(n) {
    let counter = 1;
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        
        if(i % 2 !== 0) {
            console.log(i);
            sum += i
            counter++;
        }
        if(counter > n) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}

solve(5)