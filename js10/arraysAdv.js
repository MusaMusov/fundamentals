function train (input) {
    let wagons = input[0].split(" ").map(Number);
    let wagonCapacity = input[1];

    for(let i = 2; i < input.length; i++) {
        let curNum = input[i].split(" ");
        if(curNum.includes("Add")) {
            wagons.push(curNum[1]);
        } else {
            for(let j = 0; j < wagons.length; j++) {
                if(Number(curNum[0]) + wagons[j] <= wagonCapacity) {
                    wagons[j] += Number(curNum[0]);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])