function solve(arr) {
    
    let addressesArray = {};

    for (const line of arr)  {
        let [name, address] = line.split(":");
        
        addressesArray[name] = address;
    }

    let addressEntries = Object.entries(addressesArray);

    addressEntries.sort(((a, b) => a[0].localeCompare(b[0])))

    for (const entry of addressEntries) {
        let [name, address] = entry;

        console.log(`${name} -> ${address}`);
    }

    
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])