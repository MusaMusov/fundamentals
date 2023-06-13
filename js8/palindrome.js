function palindromeInt(numsArray) {

    for(let i = 0; i < numsArray.length; i++) {
        let currNumAsStr = numsArray[i].toString();
        let reversedNumAsStr = currNumAsStr.split("").reverse().join("");
        
        if(currNumAsStr === reversedNumAsStr) {
            console.log(true);
        } else {
            console.log(false);
        }
    } 
}

palindromeInt([123,323,421,121])