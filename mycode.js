function* dynamicUpdateGenerator(initialValue) {
   let currentValue = initialValue;
   while(true) {
    let fromOuter = yield currentValue;
    currentValue += fromOuter !== undefined ? fromOuter : 0;
   }
}

// Инициализируем генератор с начальным значением 10
const generator = dynamicUpdateGenerator(10);

// Демонстрация работы генератора
console.log(generator.next().value);   // 10
console.log(generator.next(5).value);  // 15 (10 + 5)
console.log(generator.next(3).value);  // 18 (15 + 3)
setTimeout(() => console.log(generator.next(-2).value), 1000); // 16 (18 - 2)
console.log(generator.next(7).value);  // 23 (16 + 7)