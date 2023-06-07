function solve(string, char, correct) {
    let result = string.replace("_", char) 
    if(result === correct) {
        console.log("Matched"); 
    } else {
        console.log("Not Matched");
    }
}