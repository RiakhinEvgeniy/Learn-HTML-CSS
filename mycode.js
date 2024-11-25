// Установка глобального обработчика ошибок для window.onerror
window.onerror = function(message, source, lineno, colno, error) {
  console.error(`Ошибка: ${message} в ${source}:${lineno}:${colno}`, error);
};

// Установка глобального обработчика ошибок для window.onunhandledrejection
window.onunhandledrejection = function (event) {
  console.error(event.reason);
}

// Асинхронная функция, которая генерирует ошибку через 1 секунду
async function generateErr() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('Error from generateERR');
};

// Создание отклоненного промиса

Promise.reject(new Error('Errors from Promice reject'));
// Вызов асинхронной функции для генерации ошибки
let e = generateErr();