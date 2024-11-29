function* iterableObject(o) {
    let keys = Object.keys(o);
    for (const key of keys) {
        yield [key, o[key]]
    }
}

let simpleObject = {name: 'Evgeniy', age: '44', city: 'Wolfsburg', country: 'Germany'}

let itOb = iterableObject(simpleObject);

for (const [key, value] of itOb) {
    console.log(`${key} -> ${value}`);
}