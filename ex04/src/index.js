function compareDifferentValues(m, n) {
    if (m === n) {
        return "Not equal";
    }
    return "Equal";
}
console.log (compareDifferentValues(8, "8"));
console.log (compareDifferentValues("8", 8));
console.log (compareDifferentValues('8', 8));
console.log (compareDifferentValues("8", "8"));
console.log (compareDifferentValues(8, 8));
compareDifferentValues();

module.exports = compareDifferentValues;