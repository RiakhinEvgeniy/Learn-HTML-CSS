class Car {
    #brand;
    #model;

    setBrand(brand) {
        this.#brand = brand;
        this.#logChange("Brend", this.#brand);
    }

    setModel(model) {
        this.#model = model;
        this.#logChange("Model", this.#model);
    }

    getBrand() {
        return this.#brand;
    }

    getModel() {
        return this.#model;
    }

    #logChange(brend, model) {
        console.log(`${brend} ${model}`);
    }
}

let myCar = new Car();
myCar.setBrand("VW");
myCar.setModel("CADDY");