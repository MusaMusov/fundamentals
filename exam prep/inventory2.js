function solve(arr) {
    let inventory = arr.shift().split(", ")
    let arrayLength = arr.length;
    for(let i = 0; i < arrayLength; i++) {
        let currCommand = arr[i].split(" - ");

        if(currCommand[0] === "Craft!") {
            break;
        } else if(currCommand[0] === "Collect") {
            if(!inventory.includes(currCommand[1])) {
                inventory.push(currCommand[1]);
            }
        } else if(currCommand[0] === "Drop") {
            if(inventory.includes(currCommand[1])) {
                let index = inventory.indexOf(currCommand[1]);
                inventory.splice(index, 1);
            }
        } else if(currCommand[0] === "Combine Items") {
            let currItem = currCommand[1].split(":")
            if(inventory.includes(currItem[0])) {
                let index = inventory.indexOf(currItem[0]);
                inventory.splice(index + 1, 0, currItem[1]);
            }
        } else if(currCommand[0] === "Renew") {
            if(inventory.includes(currCommand[1])) {
                let index = inventory.indexOf(currCommand[1]);
                let renewedItem = inventory.splice(index, 1);
                inventory.push(renewedItem);
            }
        }
    }

    console.log(inventory.join(", "));
}

solve(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!'])