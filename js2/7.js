function solve(n) {
    let buff = "";

    for(let rows = 1; rows <= n; rows++) {
        for(let cols = 1; cols <= rows; cols++) {
            buff += `${rows} `
            
        }
        console.log(buff);
        buff = ""
    }
}

solve(5)