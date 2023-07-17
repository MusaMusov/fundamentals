function solve (arr) {

    let obj = {};
    let moviesArr = [];
    for (const line of arr) {
        let currLine = line.split(" ")
        if(currLine[0] === "addMovie") {
            currLine.shift();
            obj.name = currLine.join(" ")
            moviesArr.push(currLine.join(" "))
        } else {
            if(currLine.includes("directedBy")) {
                if(moviesArr.includes(currLine[0])) {
                    obj.director = (currLine.splice(2)).join(" ");
                }
            } else if(currLine.includes("onDate")){
                if(moviesArr.includes(currLine[0])) {
                    obj.date = (currLine.splice(2)).join(" ");
                }
            }
            
        }
    }
    console.log(JSON.stringify(obj));
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])