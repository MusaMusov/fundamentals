function solve(arr) {
    let str = arr.shift();

    for (const line of arr) {
        let [command, ...info] = line.split(" ");
        if(command === "Change") {
            let [char, replacement] = info;
            while(str.includes(char)) {
                str = str.replace(char, replacement)
            }
            console.log(str);
        } else if(command === "Includes") {
            if(str.includes(info)){
                console.log("True");
            } else {
                console.log("False");
            }
        } else if(command === "End") {
            if(str.endsWith(info)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if(command === "Uppercase") {
            str = str.toUpperCase()
            console.log(str);
        } else if(command === "FindIndex") {
            let index = str.indexOf(info);
            console.log(index);
        } else if(command === "Cut") {
            let [startIndex, count] = info.map(Number);
            let cutChars = str.substring(startIndex, startIndex + count)
            console.log(cutChars);
        } else if(command === "Done") {
            break;
        }
    }
}

solve(["//Th1s 1s my str1ng!//", 
"Change 1 i", 
"Includes string", 
"End my", "Uppercase", 
"FindIndex I", 
"Cut 5 5", 
"Done"])