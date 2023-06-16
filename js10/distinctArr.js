function distinctArr(arr) {
    let finalArr = [];

    for (const element of arr) {
        if(!finalArr.includes(element)) {
            finalArr.push(element)
        }
    }

    console.log(finalArr.join(" "));
}

distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])