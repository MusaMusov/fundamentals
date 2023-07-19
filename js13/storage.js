function storage (arr){

    let itemsArr = [];
    let assocArray = {};

    for (const line of arr) {
        let currLine = line.split(" ");
        let item = currLine[0];
        let quantity = Number(currLine[1]);
    
        if(!itemsArr.includes(item)) {
            itemsArr.push(item);
            assocArray[item] = quantity;
        } else {
            assocArray[item] += quantity;
        }
    }


    
    for (let line in assocArray) {
        console.log(`${line} -> ${assocArray[line]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])