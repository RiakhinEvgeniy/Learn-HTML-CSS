class User {
    username;
    email;

    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }
}

let person = new User("Evgeniy", "evgeniiyr.e.u@gmail.com");
console.log(person.getUsername());
console.log(person.getEmail());