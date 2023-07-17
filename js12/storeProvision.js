function solve(currProvision, delivery) {
    let obj = {};
    let arrLength = currProvision.length;
    for (let i = 0; i < arrLength; i += 2) {
        let currProduct = currProvision[i];
        let currAmount = Number(currProvision[i + 1]);

        obj[currProduct] = currAmount;

    }

    for (let i = 0; i < delivery.length; i += 2) {
        let currDelivery = delivery[i];
        let deliveryAmount = Number(delivery[i + 1]);

        if (!currProvision.includes(currDelivery)) {
            obj[currDelivery] = deliveryAmount;
        } else {
            obj[currDelivery] += deliveryAmount
        }

    }

    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])