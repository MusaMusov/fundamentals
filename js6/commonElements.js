function solve (arr1, arr2) {
    for(let i = 0; i <= arr1.length - 1; i++) {
        for(let m = 0; m <= arr2.length - 1; m++) {
            if(arr1[i] === arr2[m]) {
                console.log(arr1[i]);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])