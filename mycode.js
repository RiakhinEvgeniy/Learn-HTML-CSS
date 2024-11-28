function createRangeIterator(start, end) {
    return {
        next() {
            if(start <= end) {
                return { value: start++, done: false };
            } else {
                return {value: start = undefined, done: true};
            }
        }
    };
}

// Пример использования
const iterator = createRangeIterator(1, 5);
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }