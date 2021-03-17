function inverseWhile() {
    var fiveNumbers = 6;
    var array = [];
    while (fiveNumbers >= 1) {
    fiveNumbers--;
    array.push (fiveNumbers); 
    if (fiveNumbers === 0) {
    console.log(array.join(','));
    }
}
}

console.log (inverseWhile());

module.exports = inverseWhile;