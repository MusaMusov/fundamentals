function solve(arr) {

    for (const town of arr) {
        let obj = {};
        let currInfo = town.split(" | ")
        let currTown = currInfo[0];
        let currLatitude = Number(currInfo[1]);
        let currLongitude = Number(currInfo[2]);

        obj = {
            town: currTown,
            latitude: currLatitude.toFixed(2),
            longitude: currLongitude.toFixed(2)
        }
        console.log(obj);

    }

}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])