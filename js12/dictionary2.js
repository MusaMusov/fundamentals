function solve(arr) {
    let termsArray = [];
    
    for (let line of arr) {
        line = JSON.parse(line)
        for (const [name, definition] of Object.entries(line)) {
            

            let termFinder = termsArray.find(m => m.name === name)

            if(termFinder) {
                termFinder.definition = definition
            } else {
                termsArray.push({name, definition})
            }
        }
    }

    termsArray.sort((a, b) => a.name.localeCompare(b.name))

    for (const term of termsArray) {
            console.log(`Term: ${term.name} => Definition: ${term.definition}`);
    }

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])