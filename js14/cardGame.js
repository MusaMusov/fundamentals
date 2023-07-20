function solve(arr) {
    let assocArray = {};
    let playerArr = [];
    for (let entry of arr) {
        let [name, cards] = entry.split(": ");

        let cardChecker = [];
        cards = cards.split(", ")
        for (const card of cards) {
            let power = 0;
            let totalPower = 0;

            if (!cardChecker.includes(card)) {
                cardChecker.push(card)
                switch (card[0]) {
                    case "2":
                        power = 2;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "3":
                        power = 3;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "4":
                        power = 4;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "5":
                        power = 5;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "6":
                        power = 6;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "7":
                        power = 7;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "8":
                        power = 8;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "9":
                        power = 9;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "10":
                        power = 10;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "J":
                        power = 11;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "Q":
                        power = 12;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "K":
                        power = 13;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                    case "A":
                        power = 14;
                        switch (card[1]) {
                            case "S":
                                power *= 4;
                                break;
                            case "H":
                                power *= 3;
                                break;
                            case "D":
                                power *= 2;
                                break;
                            case "C":
                                power *= 1;
                                break;
                        }
                        totalPower += power;
                        break;
                }
            } else {
                totalPower = 0
            }
            if (playerArr.includes(name)) {
                assocArray[name] += totalPower;
            } else {
                playerArr.push(name)
                assocArray[name] = totalPower;
            }
        }

    }
    for (let player in assocArray) {
        console.log(`${player} - ${assocArray[player]}`);
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])