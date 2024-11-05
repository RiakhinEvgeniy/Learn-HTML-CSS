// Создаем объект machine с методом start
let machine = {
    start: function() {
        console.log("Start");
    }
};

// Создаем объект robot, который наследует от machine
let robot = Object.create(machine);

// Добавляем метод stop в прототип объекта machine
machine.stop = function() {
    console.log("Stop");
}

// Вызываем метод stop у объекта robot
robot.stop();