function solve(num, round) {
    if(round > 15) {
        round = 15
    } 

    let result = parseFloat(num.toFixed(round));

    console.log(result);
}