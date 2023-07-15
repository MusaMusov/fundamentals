function solve(text) {
    let stringToObj = JSON.parse(text);

    for (const key of Object.keys(stringToObj)) {
        console.log(`${key}: ${stringToObj[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')