var result = "5 or smaller";
function functionElse(num) {
    if (num <= 5) {
        return result;
    } else {
        return "Bigger than 5";
    }
}

console.log (functionElse(4));
console.log (functionElse(5));
console.log (functionElse(6));
console.log (functionElse(10));
functionElse();

module.exports = functionElse;