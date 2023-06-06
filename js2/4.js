function solve (people, type, day) {
    let sum = 0;
    if(type === "Business" && people >= 100) {
        people -= 10
    }
    if(type === "Students") {
        switch(day) {
            case "Friday" :
                sum = 8.45 * people;
                break;
            case "Saturday" : 
                sum = 9.8 * people;
                break;
            case "Sunday" :
                sum = 10.46 * people;
                break;
        }
    } else if(type === "Business") {
        switch(day) {
            case "Friday" :
                sum = 10.9 * people;
                break;
            case "Saturday" : 
                sum = 15.6 * people;
                break;
            case "Sunday" :
                sum = 16 * people;
                break;
        }
    } else if(type === "Regular") {
        switch(day) {
            case "Friday" :
                sum = 15 * people;
                break;
            case "Saturday" : 
                sum = 20 * people;
                break;
            case "Sunday" :
                sum = 22.5 * people;
                break;
        }
    }

    if(type === "Students" && people >= 30) {
        sum *= 0.85
    }
    if(type === "Regular" && people >= 10 && people <= 20) {
        sum *= 0.95
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}