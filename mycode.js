class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }

    display() {
        console.log(`Title: ${this.title}, Year: ${this.year}`);
    }
}

class Book extends LibraryItem {
    constructor(title, year, author) {
        super(title, year);
        this.author = author;
    }

    display() {
        console.log(`Title: ${this.title}, Year: ${this.year}, Author: ${this.author}`);
    }
}

class Magazine extends LibraryItem{
    constructor(title, year, issue) {
        super(title, year);
        this.issue = issue;
    }

    display() {
        console.log(`Title: ${this.title}, Year: ${this.year}, Issue Number: ${this.issue}`);
    }
}

// Демонстрация работы методов:
const book = new Book("JavaScript: The Good Parts", 2008, "Douglas Crockford");
const magazine = new Magazine("National Geographic", 2021, 12);

book.display();  // Title: JavaScript: The Good Parts, Year: 2008, Author: Douglas Crockford
magazine.display();  // Title: National Geographic, Year: 2021, Issue Number: 12