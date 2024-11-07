let CanSwim = {
    swim: function() {
        console.log("Swiming...");
    }
}

let CanFly = {
    fly: function() {
        console.log("Flying...");
    }
}

class Bird {};
Object.assign(Bird.prototype, CanSwim, CanFly);
let bird = new Bird();
bird.swim();
bird.fly();
