function* toUpperCase(array) {
    for (const item of array) {
        yield item.toUpperCase();
    }
}

let arr = ['laptop', 'book', 'pen', 'smartphone'];

let gen = toUpperCase(arr);

for (const element of gen) {
    console.log(element);
}