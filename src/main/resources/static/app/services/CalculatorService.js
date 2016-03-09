var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("/angular2/core");
var CalculatorService = (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    CalculatorService.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    CalculatorService = __decorate([
        core_1.Injectable()
    ], CalculatorService);
    return CalculatorService;
})();
exports.CalculatorService = CalculatorService;
//# sourceMappingURL=CalculatorService.js.map