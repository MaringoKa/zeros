module.exports = function getZerosCount(number) {
    // your implementation
    var count = 0;
    var n = 5;
    while (number != 0) {
        number = Math.floor(number / n);
        count = count + number;
    }
    return count;
}