// Декоратор для класса
// Декоратор должен представлять функцию возвращающую новый конструктор
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testClassDecorator() {
    return function (target) {
        var newConstructor = function () {
            target.apply(this); // выполняем конструктор класса для которого применен декоратор
            this.newProp = 123; // добавляем новое свойство
        };
        return newConstructor;
    };
}
var Test3 = (function () {
    function Test3() {
        this.prop1 = 10;
    }
    Test3 = __decorate([
        testClassDecorator() // применяем новый декоратор
    ], Test3);
    return Test3;
}());
var t3 = new Test3();
console.log(t3);
//# sourceMappingURL=simple_script.js.map