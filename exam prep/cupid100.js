function hearDeliverySenior (arr){
    let neighbourhood = arr.shift().split('@').map(Number); 
    let cupidIndex = 0; 
 
    while (arr[0] != 'Love!') {
        let currCommand = arr.shift().split(' '); 
        let jumpRange = Number(currCommand[1]); 
 
        cupidIndex += jumpRange; 
 
        if(cupidIndex >= neighbourhood.length) {
            cupidIndex = 0;
        } 
 
        if (neighbourhood[cupidIndex] == 0){
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        } else {
            neighbourhood[cupidIndex] -= 2; 
            if (neighbourhood[cupidIndex] == 0){
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        }
    } 
 
    let missed = 0; 
    for (let currentHouse of neighbourhood){
        if (currentHouse > 0){
            missed++;
        }
    } 
    console.log(`Cupid's last position was ${cupidIndex}.`);
    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

hearDeliverySenior(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
