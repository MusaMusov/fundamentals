function solve(arr) {
    let moviesArr = [];

    for (const line of arr) {

        if(line.includes("addMovie")) {
            let currMovie = line.split("addMovie ")[1]
            moviesArr.push({name: currMovie})
        } else if(line.includes("directedBy")){
            let [movie, director] = line.split(" directedBy ");
            let movieFinder = moviesArr.find(m => m.name === movie)

            if(movieFinder) {
                movieFinder.director = director;
            }
        } else if(line.includes("onDate")) {
            let [movie, date] = line.split(" onDate ")
            let movieFinder = moviesArr.find(m => m.name === movie)
            if(movieFinder) {
                movieFinder.date = date;
            }
        }
    }

    for (const movie of moviesArr) {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
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