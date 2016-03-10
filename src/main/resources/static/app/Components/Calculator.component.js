var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var CalculatorService_1 = require("../services/CalculatorService");
var browser_1 = require("angular2/platform/browser");
var Calculator = (function () {
    function Calculator(_calculatorService) {
        this._calculatorService = _calculatorService;
    }
    Calculator.prototype.onMultiply = function (num1, num2) {
        this.result = ' ' + this._calculatorService.multiply(+num1, +num2);
    };
    Calculator.prototype.onAdd = function (num1, num2) {
        this.result = ' ' + this._calculatorService.add(+num1, +num2);
    };
    Calculator = __decorate([
        core_1.Component({
            selector: "calculator",
            template: "\n    <div class=\"row\">\n        <div class=\"page-header\">\n            <h1>Calculator Servisi</h1>\n        </div>\n        <p>Add or multiply two numbers</p>\n        <input type=\"text\" #number1>\n        <input type=\"text\" #number2>\n        <button (click)=\"onMultiply(number1.value, number2.value)\">Multiply</button>\n        <button (click)=\"onAdd(number1.value, number2.value)\">Add</button>\n        <br>\n        <p>Result: {{result}}</p>\n    </div>\n\n    ",
            providers: [CalculatorService_1.CalculatorService]
        })
    ], Calculator);
    return Calculator;
})();
exports.Calculator = Calculator;
browser_1.bootstrap(Calculator);
//# sourceMappingURL=Calculator.component.js.map