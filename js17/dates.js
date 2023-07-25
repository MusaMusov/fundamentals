function solve(input) {
    let template = /[0-9]{2}([.\-/])[A-Z][a-z]{2}\1[0-9]{4}/g;

    let result = input[0].match(template);
    
    
    for (const number of result) {
        let separator = number[2];
        let [day, month, year] = number.split(separator);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])