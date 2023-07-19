function solve(arr) {
    let studentsArr = [];
    let assocArray = {};

    for (const line of arr) {
        let currLine = line.split(" ");
        let studentName = currLine.shift();

        let gradeSum = 0;
        let gradeCounter = 0;

        for (const grade of currLine) {
            let currentGrade = Number(grade);
            gradeSum += currentGrade;
            gradeCounter++;
        }
        let averageGrade = gradeSum / gradeCounter
        
        if(!studentsArr.includes(studentName)) {
            assocArray[studentName] = averageGrade;
            studentsArr.push(studentName);
        } else {
            let newGrade = (assocArray[studentName] + averageGrade) / 2
            assocArray[studentName] = newGrade;
        }
    }

    let sortedArr = Object.entries(assocArray);
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]))

    for (const entry of sortedArr) {
        let [name, address] = entry;

        console.log(`${name}: ${address.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])