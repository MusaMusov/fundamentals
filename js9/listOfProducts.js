function solve(productArr) {
    let sortedProducts = productArr.sort();

    for(let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`)
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions',
'Apples'])