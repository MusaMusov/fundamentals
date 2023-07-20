function solve(arr) {
    let carCounter = 0;
    let carsArray = {};

    for (let car of arr) {
        car = car.split(", ")
        let [info, plate] = car;

        if (info === "IN") {
            carsArray[plate] = true;
            carCounter++;
        } else if (info === "OUT") {
            carsArray[plate] = false
            carCounter--;
        }
    }

    let sortedArr = Object.entries(carsArray);
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]))


    if (carCounter > 0) {
        for (const entry of sortedArr) {
            let [plate, status] = entry;

            if (status) {
                console.log(plate);
            }
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])