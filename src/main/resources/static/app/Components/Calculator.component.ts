import {Component} from "angular2/core";
import {CalculatorService} from "../services/CalculatorService";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector:"calculator",
    template:`
    <div>
        <h1>Calculator Service</h1>
        <p>Add or multiply two numbers</p>
        <input type="text" #number1>
        <input type="text" #number2>
        <button (click)="onMultiply(number1.value, number2.value)">Multiply</button>
        <button (click)="onAdd(number1.value, number2.value)">Add</button>
        <br>
        <p>Result: {{result}}</p>
    </div>

    `,
    providers: [CalculatorService]
})
export class Calculator{
    result: string;
    constructor(private _calculatorService: CalculatorService){}

    onMultiply(num1: string, num2: string){
        this.result = ' ' + this._calculatorService.multiply(+num1, +num2);
    }

    onAdd(num1: string, num2: string){
        this.result = ' ' + this._calculatorService.add(+num1, +num2);
    }
}

bootstrap(Calculator);