function printType(klass) {
    console.log(klass.name);
}
var Person = (function () {
    function Person() {
    }
    return Person;
}());
printType(Person);
//# sourceMappingURL=test.js.map