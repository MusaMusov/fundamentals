function fancyBarcode(input) {
    let count = input.shift();
 
    let pattern = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g;
    let text = input.join()
    let matches = text.match(pattern);
 
    for (const line of input) {
        if (!matches) {
            console.log("Invalid barcode");
            break;
          }
        let match1 = " ";
        for (const match of matches) {
            match1+= match + " ";
        }
 
        if (match1.includes(line)) {
            let pattern = /\d/gm
            let nums = line.match(pattern);
            if(nums){
            let result = ' '
            for (const match of nums) {
                result+=match
            }
            console.log(`Product group:${result}`);
            }else{
                console.log("Product group: 00");
            }
        }else{
            console.log("Invalid barcode");
        }
 
    }
 
 
}

fancyBarcode((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)