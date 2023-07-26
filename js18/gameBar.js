function solve(arr) {
    let infoTemplate = /%(?<name>[A-Z][a-z]+)%.*<(?<product>\w+)>.*\|(?<quantity>\d+)\|\D*(?<price>\d+.?\d*)\$/
    let customersObj = {};
    let finalPrice = 0;
    for (const line of arr) {

        if(line === 'end of shift') {
            break;
        }

        let result = line.match(infoTemplate)
        let priceTemplate = /\d+.?\d?/

        if(result) {
            let name = result.groups.name;
            let product = result.groups.product;
            let quanity = result.groups.quantity;
            let price = (result.groups.price).match(priceTemplate);

            let totalPrice = Number(quanity) * Number(price);
            finalPrice += totalPrice

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${finalPrice.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])