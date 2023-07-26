function solve(arr) {

    let template = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quanity>\d+)/
    console.log("Bought furniture:");
    let totalPrice = 0;
    
    for (const line of arr) {
        let purchase = line.match(template)
        if(purchase) {
            let name = purchase.groups.name;
            let price = purchase.groups.price;
            let quanity = purchase.groups.quanity;

            totalPrice += (Number(price) * Number(quanity))
            console.log(name);
        }
        
    }
    
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])