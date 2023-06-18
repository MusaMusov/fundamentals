function solve(arr) {
    let cards = arr.shift().split(", ")
    let commandsCounter = arr.shift().split().map(Number)

    for(let i = 0; i < commandsCounter; i++) {
        let currCommand = arr[i].split(", ")

        if(currCommand[0] === "Add") {
            if(!cards.includes(currCommand[1])) {
                cards.push(currCommand[1]);
                console.log("Card successfully added");
            } else {
                console.log("Card is already in the deck");
            }
        } else if(currCommand[0] === "Remove") {
            if(cards.includes(currCommand[1])) {
                let index = cards.indexOf(currCommand[1])
                cards.splice(index, 1)
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        } else if(currCommand[0] === "Remove At") {
            if(currCommand[1] >= 0 && currCommand[1] < cards.length) {
                cards.splice(currCommand[1], 1) 
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } else if(currCommand[0] === "Insert") {
            if(currCommand[1] >= 0 && currCommand[1] < cards.length) {
                if(!cards.includes(currCommand[2])) {
                    cards.splice(currCommand[1], 0, currCommand[2])
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already added");
                }
            } else{
                console.log("Index out of range");
            }
        }
    }

    console.log(cards.join(", "));
}

solve(["Ace of Diamonds, Queen of Hearts, King of Clubs",

"4",

"Add, King of Diamonds",

"Insert, 0, Jack of Spades",
"Remove At, -1", 
"Remove, Ace of Diamonds"]) 