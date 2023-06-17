function solve(arr) {
    let list = arr.shift().split("!")
    let arrayLength = arr.length
    for (let i = 0; i < arrayLength; i++) {
        let currCommand = arr[i].split(" ");

        if (currCommand[0] === "Urgent") {
            if (!list.includes(currCommand[1])) {
                list.unshift(currCommand[1]);
            }
        } else if (currCommand[0] === "Unnecessary") {
            if (list.includes(currCommand[1])) {
                let productIndex = list.indexOf(currCommand[1]);
                list.splice(productIndex, 1)
            }
        } else if (currCommand[0] === "Correct") {
            if (list.includes(currCommand[1])) {
                let productIndex = list.indexOf(currCommand[1]);
                list.splice(productIndex, 1)
                list.splice(productIndex, 0, currCommand[2])
            }
        } else if (currCommand[0] === "Rearrange") {
            if (list.includes(currCommand[1])) {
                let productIndex = list.indexOf(currCommand[1]);
                let rearrangedProduct = list.splice(productIndex, 1)
                list.push(rearrangedProduct)
            }
        }
    }
    console.log(list.join(", "));
}

solve((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]))