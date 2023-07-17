function solve(arr) {
    let obj = {};

    for (const name of arr) {
        obj[name] = name.length;
    }
    for (const key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])