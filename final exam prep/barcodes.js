function solve(arr) {
    let template = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g
    arr.shift();
    for (const line of arr) {
        if(line.match(template)) {
            let numsTemplate = /\d/g
            if(line.match(numsTemplate)) {
                let matches = line.match(numsTemplate);
                let productGroup = ""
                for (const num of matches) {
                    productGroup += num
                }
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}

solve((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)