function solve(arr) {
    let companyArr = {};
    let companyList = [];

    for (const line of arr) {
        let [company, employee] = line.split(" -> ");

        if (!companyList.includes(company)) {
            companyList.push(company);
            companyArr[company] = employee;
        } else {
            companyArr[company] += ", " + employee;
        }

    }

    for(let entry in companyArr) {
        let employeeList = (companyArr[entry]).split(", ")
        let list = [];
        for (const person of employeeList) {
            if(!list.includes(person)) {
                list.push(person);
            } else {
                console.log(person);
            }
        }
    }


    let companyEntries = Object.entries(companyArr);
    companyEntries.sort((a, b) => a[0].localeCompare(b[0]))

    // for(let entry of companyEntries) {
    //     let [company, employees] = entry
    //     console.log(`${company}`);
    //     employees = employees.split(", ");

    //     for (const employee of employees) {
    //         console.log(`-- ${employee}`);
    //     }
    // }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])