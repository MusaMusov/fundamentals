function solve(arr) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currCat = arr[i];
        let catInfo = currCat.split(" ");
        let name = catInfo[0];
        let age = Number(catInfo[1]);

        let tempCat = new Cat(name, age)
        tempCat.meow()
    }
    
}

solve(['Mellow 2', 'Tom 5'])