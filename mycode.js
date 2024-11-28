const myIterable = {
    n: 14,

    *[Symbol.iterator]() {
        let x = 0, y = 1;
        while(x < this.n) {
            yield x;
            [x, y] = [y, x + y];
        }
    }

}

for (const num of myIterable) {
    console.log(num);
}