function solve(arr){
    let text = arr[0];
    let template = /([\|#])(?<name>[\w\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
    let totalCalories = 0;
    let matches = text.match(template);
    if(matches){for (let match of matches) {
        if(match.includes("#")) {
            match = match.split("#");
            totalCalories += Number(match[3]);
        } else if(match.includes("|")) {
            match = match.split("|");
            totalCalories += Number(match[3]);
        }
    }}
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    if(matches){for (let match of matches) {
        if(match.includes("#")) {
            match = match.split("#");
            console.log(`Item: ${match[1]}, Best before: ${match[2]}, Nutrition: ${match[3]}`);
        } else if(match.includes("|")) {
            match = match.split("|");
            console.log(`Item: ${match[1]}, Best before: ${match[2]}, Nutrition: ${match[3]}`);
        }
    }}
}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])