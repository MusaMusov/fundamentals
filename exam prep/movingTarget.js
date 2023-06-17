function solve(arr) {
    let targets = arr.shift().split(" ").map(Number)
    let arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        let currCommand = arr[i].split(" ");
        if (currCommand[0] === "End") {
            break;
        } else if (currCommand[0] === "Shoot") {
            if (currCommand[1] >= 0 && currCommand[1] < targets.length) {
                if (targets[currCommand[1]] - currCommand[2] > 0) {
                    targets[currCommand[1]] -= currCommand[2]
                } else {
                    targets.splice(currCommand[1], 1)
                }
            }
        } else if (currCommand[0] === "Add") {
            {
                if (currCommand[1] >= 0 && currCommand[1] < targets.length) {
                    targets.splice(currCommand[1], 0, currCommand[2])
                } else {
                    console.log("Invalid placement!");
                }
            }
        } else if (currCommand[0] === "Strike") {
            let index = currCommand[1];
            let radius = currCommand[2];
            let start = index - radius;
            let end = index + radius;
            let strikedArea = radius * 2 + 1;
            if (start < 0 || start > targets.length && end > 0 || end < targets.length) {
                console.log("Strike missed!");
                continue;
            } else {
                targets.splice(start, strikedArea)
            }
        }
    }
    console.log(targets.join("|"));
}

solve(["1 2 3 4 5",
    "Strike 0 1",
    "End"])