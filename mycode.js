Array.prototype.sum = function() {
    return this.reduce((res, num) => res + num, 0);
}

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.sum()); // 15