function myForLoop1() {
    var array = [];
    for (evenNumbers = 0; evenNumbers <= 8; evenNumbers++) {
        if (evenNumbers % 2 == 0)
        array.push (evenNumbers); 
        if (evenNumbers === 8) {
        console.log(array.join(', '));
        }
        } 
    }
function myForLoop2() {
    var array = [];
    for (evenInverseNumbers = 8; evenInverseNumbers >= 0; evenInverseNumbers--) {
        if (evenInverseNumbers % 2 == 0)
        array.push (evenInverseNumbers); 
        if (evenInverseNumbers === 0) {
        console.log(array.join(', '));
        }
    } 
}

console.log (myForLoop1());
console.log (myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};