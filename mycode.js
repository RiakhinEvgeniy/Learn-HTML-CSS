class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(`${this.username} has logged in`);
    }

    logout() {
        console.log(`${this.username} has logged out`);
    }
}

class Admin extends User{
    constructor(adminname, email) {
        super(adminname, email);
        this.adminname = adminname;
        this.email = email;
    }

    deleteUser(user) {
        console.log(`${this.adminname} deleted user ${user.username}`);
    }
}

class Guest extends User{

    constructor(guestname, email) {
        super(guestname, email)
        this.guestname = guestname;
        this.email = email;
    }

    requestAccess() {
        console.log(`${this.guestname} has requested access`)
    }
}

// Демонстрация работы
const user = new User('user1', 'user1@example.com');
user.login();  // вывод: user1 has logged in
user.logout(); // вывод: user1 has logged out

const admin = new Admin('admin1', 'admin1@example.com');
admin.login();  // вывод: admin1 has logged in
admin.deleteUser(user); // вывод: admin1 deleted user user1
admin.logout(); // вывод: admin1 has logged out

const guest = new Guest('guest1', 'guest1@example.com');
guest.login();  // вывод: guest1 has logged in
guest.requestAccess(); // вывод: guest1 has requested access
guest.logout(); // вывод: guest1 has logged out