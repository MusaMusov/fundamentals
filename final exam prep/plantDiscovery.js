function solve(arr) {
    let plantsArr = [];
    let plantsCount = Number(arr.shift());
    for (let i = 0; i < plantsCount; i++) {
        let currPlant = arr[i];
        let rating = 0;
        let ratingCounter = 0;
        let [name, rarity] = currPlant.split("<->");
        let plantFinder = plantsArr.find((m) => m.name === name);
        if (plantFinder) {
            plantFinder.rarity = rarity
        } else {
            plantsArr.push({ name, rarity, rating, ratingCounter });
        }
    }
    arr.splice(0, plantsCount)

    for (const line of arr) {
        if (line === "Exhibition") {
            break;
        }
        let [command, info] = line.split(": ");
        let [name, points] = info.split(" - ");
        if (command === "Rate") {
            let plantFinder = plantsArr.find(m => m.name === name);
            if (plantFinder) {
                if (!isNaN(Number(points))) {
                    plantFinder.rating += Number(points);
                    plantFinder.ratingCounter++;
                }
            } else {
                console.log("error");
            }
        } else if (command === "Update") {
            let plantFinder = plantsArr.find(m => m.name === name);
            if (plantFinder) {
                if (!isNaN(Number(points))) {
                plantFinder.rarity = Number(points);
            }
            } else {
                console.log("error");
            }
        } else if (command === "Reset") {
            let plantFinder = plantsArr.find(m => m.name === name);
            if (plantFinder) {
                plantFinder.rating = 0;
                plantFinder.ratingCounter = 0;
            } else {
                console.log("error");
            }
        }
    }
    console.log("Plants for the exhibition:");
    for (const line of plantsArr) {
        if (line.rating) {
            let averageRating = line.rating / line.ratingCounter;
            console.log(`- ${line.name}; Rarity: ${line.rarity}; Rating: ${averageRating.toFixed(2)}`);
        } else {
            console.log(`- ${line.name}; Rarity: ${line.rarity}; Rating: 0.00`);
        }
    }
}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - -10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])



