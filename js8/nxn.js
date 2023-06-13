function nxnMatrix (num) {

    for(let i = 1; i <= num; i++) {
        let numArray = [];
        for(let j = 1; j <= num; j++) {
            numArray.push(num)
        }
        console.log(numArray.join(" "));
    }
}

nxnMatrix(7)