function sumMultiples() {
    let sum = 0;

    for (let i = 0; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }

    return sum;
}

module.exports = sumMultiples;

