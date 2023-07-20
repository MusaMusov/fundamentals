function solve(arr) {
    let companyList = [];
    let assocArray = {};

    for (const line of arr) {
        let [company, employee] = line.split(" -> ");

        if(!companyList.includes(company)) {
            companyList.push(company);
            assocArray[company] = employee;
        } else {
            assocArray[company] += ", " + employee;
        }
    }

    let employeeEntries = Object.entries(assocArray);

    let finalArr = {};

    for (const entry of employeeEntries) {
        let employeeList = [];
        let company = entry[0]
        let employees = (entry[1]).split(", ");

        for (const person of employees) {
            if(!employeeList.includes(person)) {
                employeeList.push(person);
                finalArr[company] = person + ", ";
            }
        }
    }

    for(let line in finalArr) {
        console.log(line, finalArr[line]);
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])