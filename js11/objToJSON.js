function solve(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor,
    }
    let objAsString = JSON.stringify(person);
    console.log(objAsString);

}

solve('George', 'Jones','Brown' )