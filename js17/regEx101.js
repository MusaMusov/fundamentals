function solve(input) {

    let template = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = input.match(template);

    console.log(validNames.join(" "));
    

}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")