class Calculator {
    add(x, y) {
        if(typeof x === "number" && typeof y === "number") {
            return x + y;
        } else if(Array.isArray(x) && Array.isArray(y)) {
            return x.concat(y);
        }
        else {
            throw new Error("Invalid arguments!");
        }
    }
}

let calc = new Calculator();
console.log(calc.add(5, 50));
console.log(calc.add([1, 2, 3], [4, 5, 6]));