function solve(arr) {
    let destinations = arr.shift();
    arr.forEach(line => {
        let [command, arg1, arg2] = line.split(":");
        if(command === "Add Stop") {
            destinations = destinations.slice(0, Number(arg1)) + arg2 + destinations.slice(Number(arg1));
            console.log(destinations);
        } else if(command === "Remove Stop") {
            let removedPart = destinations.slice(Number(arg1), Number(arg2));
            destinations.replace(removedPart, "")
            console.log(destinations);
        } else if(command === "Switch") {
            destinations.replace(arg1, arg2);
            console.log(destinations);
        }
    }); 
}

solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
