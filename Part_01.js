function mdc(a, b) {
    if (b == 0) {
        return Math.abs(a);
    }
    return mdc(b, a % b);
}

module.exports = mdc;



