// Синхронная операция
console.log('Console1')

// Асинхронная операция через Promise
Promise.resolve().then(() => console.log('Promice1'))

// Синхронная операция
console.log('Console2')

// Асинхронная операция через setTimeout
setTimeout(() => console.log('Set Timeout'))