class Library {

    books = [];

    constructor(name) {
        this.name = name;
    }

    addBook(nameOfBook) {
        this.books.push(nameOfBook);
    }

    listBooks() {
        return this.books;
    }
}

// Пример использования и тестирования
const myLibrary = new Library('My Library');

myLibrary.addBook('To Kill a Mockingbird');
myLibrary.addBook('1984');
myLibrary.addBook('The Great Gatsby');

console.log(myLibrary.listBooks()); // ['To Kill a Mockingbird', '1984', 'The Great Gatsby']