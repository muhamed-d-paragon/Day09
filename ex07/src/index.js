function logicalAndOperator(num) {
    if (num >= 40 && num <= 80) {
    return "yes";}
    return "No";
}
console.log (logicalAndOperator(0));
console.log (logicalAndOperator(24));
console.log (logicalAndOperator(45));
console.log (logicalAndOperator(57));
console.log (logicalAndOperator(100));
logicalAndOperator();

module.exports = logicalAndOperator;