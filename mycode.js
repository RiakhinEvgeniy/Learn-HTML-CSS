let email = new Set();

email.add('ryahin@gmail.com');
email.add('ryahinr.e.u@gmail.com');
email.add('apellesodeskiy@gmail.com');
email.add('ryahin@gmail.com');
email.add('ryahina@gmail.com');
email.add('ryahina2@gmail.com');

// Проверка наличия одного из email

console.log(email.has('ryahinr.e.u@gmail.com'))
// Удаление одного из email
email.delete('ryahina@gmail.com')
// Вывод всех уникальных email адресов с использованием цикла for...of
for (const userEmail of email) {
    console.log(userEmail);
}
// Очистка Set, удаление всех email адресов
email.clear();
console.log(email.size);