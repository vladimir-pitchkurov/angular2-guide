"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("../app.component");
var MyTableComponent = (function () {
    /*calculate() {
        this.result = +this.xValue + +this.yValue;
    }

    reset() {
        this.xValue = this.yValue = 0;
        this.result = undefined;
    }

    onSave() {
        alert("saved.");
    }

    testEvent(event) {
        for (let prop in event) {
            console.log(prop + " = " + event[prop]);
        }
    }

    increase() {
        this.value ++;
    }

    decrease() {
        this.value --;
    }
*/
    function MyTableComponent() {
        this.value = 40;
        this.xValue = 0;
        this.yValue = 0;
        this.products = [
            { id: 1, name: "product 1", price: 100 },
            { id: 2, name: "product 2", price: 200 },
            { id: 3, name: "product 3", price: 300 },
            { id: 4, name: "product 4", price: 400 },
            { id: 5, name: "product 5", price: 500 },
            { id: 6, name: "product 6", price: 600 },
            { id: 7, name: "product 7", price: 700 },
            { id: 8, name: "product 8", price: 800 },
            { id: 9, name: "product 9", price: 900 },
            { id: 10, name: "product 10", price: 1000 }
        ];
    }
    MyTableComponent.prototype.ngOnInit = function () {
        //this.products.length = this.rows;
    };
    MyTableComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: "my-table",
            templateUrl: "app/my-table/my-table.component.html",
            styleUrls: ["app/my-table/my-table.component.css"],
            inputs: ['rows'],
            providers: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], MyTableComponent);
    return MyTableComponent;
}());
exports.MyTableComponent = MyTableComponent;
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=my-table.component.js.map