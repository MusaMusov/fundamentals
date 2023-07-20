function solve(arr) {
    let companyList = {};

    for (const entry of arr) {
        let [company, employees] = entry.split(" -> ")

        if(!companyList.hasOwnProperty(company)) {
            companyList[company] = [];
        }
        companyList[company].push(employees);
    }

    let sortedCompanies = Object.entries(companyList);
    sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));


    for (const entry of sortedCompanies) {
        let [company, people] = entry;
        console.log(company);
        let set = new Set(people);
        for (const person of set) {
            console.log(`-- ${person}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])