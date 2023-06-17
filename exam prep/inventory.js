function inventory(input) {
    let array = input[0].split(", ");
    let index = 1;
    let command = input[index];
    index++;
    while (command !== 'Craft!') {
    let command1 = command.split(" - ");
    if (command1[0] === "Collect") {
        if (!array.includes(command1[1])) {
            array.push(command1[1]);
        }
    }
    if (command1[0] === "Drop") {
        if (array.includes(command1[1])) {
            let itemIndex = array.indexOf(command1[1]);
            array.splice(itemIndex,1);
        }
    }
    if (command1[0] === "Combine Items") {
        let command2 = command1.pop().split(":");
        let currItem = command2[0];
        let itemToSplice = command2[1];
        if (array.includes(currItem)) {
            let itemIndex = array.indexOf(currItem);
            array.splice(itemIndex + 1, 0, itemToSplice);
        }
    }
    if (command1[0] === "Renew") {
        let itemToSplice = command1[1];
        if (array.includes(itemToSplice)) {
            let itemIndex = array.indexOf(itemToSplice);
            let splicedItem = array.splice(itemIndex,1);
            array.push(splicedItem)
        }
    }
 
 
    command = input[index];
    index++;
    }
    console.log(array.join(", "));
}
inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!'])