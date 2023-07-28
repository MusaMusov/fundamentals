function solve(arr) {
    let plantsArr = [];
    let plantsCount = Number(arr.shift());
    for (let i = 0; i < plantsCount; i++) {
        let currPlant = arr[i];
        let rating = 0;
        let ratingCounter = 0;
        let [name, rarity] = currPlant.split("<->");
        let plantFinder = plantsArr.find((m) => m.name === name);
        if(plantFinder) {
            plantFinder.rarity = rarity
        } else {
            plantsArr.push({ name, rarity, rating, ratingCounter });
        }
    }
    arr.splice(0, plantsCount);
    command = arr.shift();

    while (command !== "Exhibition") {
        let [rule, info] = command.split(": ");
        let [name, points] = info.split(" - ");
        if (rule === "Rate") {
            let plantFinder = plantsArr.find((m) => m.name === name);
            if (plantFinder) {
                plantFinder.rating += Number(points);
                plantFinder.ratingCounter++;
            } else {
                console.log("error");
            }
        } else if (rule === "Update") {
            let plantFinder = plantsArr.find((m) => m.name === name);
            if (plantFinder) {
                plantFinder.rarity = Number(points);
            } else {
                console.log("error");
            }
        } else if (rule === "Reset") {
            let plantFinder = plantsArr.find((m) => m.name === name);
            if (plantFinder) {
                plantFinder.rating = 0;
            } else {
                console.log("error");
            }
        }
        command = arr.shift();
    }
    console.log("Plants for the exhibition:");
    for (const line of plantsArr) {
        let averageRating = line.rating / line.ratingCounter;
        console.log(
            `- ${line.name}; Rarity: ${line.rarity}; Rating: ${averageRating.toFixed(
                2
            )}`
        );
    }
}

solve(["4",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Welwitschia<->4",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

