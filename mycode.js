function* sequenceGenerator(start, end) {
    for (let i = start; i <= end; i++)
        yield i;
}

// Демонстрация работы генератора
const generator = sequenceGenerator(1, 5);

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: 5, done: false }
console.log(generator.next()); // { value: undefined, done: true }