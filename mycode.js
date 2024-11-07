// Функция canRun, добавляющая метод run
function canRun(o) {
    o.run = function() {
        console.log("Running...");
    }
}

// Функция canJump, добавляющая метод jump
function canJump(o) {
    o.jump = function() {
        console.log("Jumping...");
    }
}

// Функция-конструктор Athlete
function Athlete() {}

// Создание объекта athlete
const athlete = new Athlete();

canRun(athlete);
canJump(athlete);

// Демонстрация методов run и jump
athlete.run(); // Вывод: Running...
athlete.jump(); // Вывод: Jumping...