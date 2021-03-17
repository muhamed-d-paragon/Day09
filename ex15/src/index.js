function myDoWhile() {
    var myNumbers = -1;
    var array = [];
    do {
        myNumbers++;
        array.push (myNumbers);
        if (myNumbers === 9) {
        console.log (array.join(', '));
        }
    } while (myNumbers < 10);
}
console.log(myDoWhile());

module.exports = myDoWhile;