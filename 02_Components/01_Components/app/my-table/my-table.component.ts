import {Component, Input, OnInit} from "@angular/core";
import {AppComponent} from "../app.component";
import { NgModule } from "@angular/core"

@Component({
    //moduleId: module.id,
    selector: "my-table",
    templateUrl: "app/my-table/my-table.component.html",
    styleUrls: ["app/my-table/my-table.component.css"],
    inputs: [ 'rows' ],
    providers: [ AppComponent ]

})

export class MyTableComponent implements OnInit{

    rows: any;
    value: number = 40;
    xValue: number = 0;
    yValue: number = 0;
    result: number;

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
    constructor() {

    }
    ngOnInit(){
        //this.products.length = this.rows;
    }


    public products: Product[] = [
        { id: 1, name : "product 1", price: 100 },
{ id: 2, name: "product 2", price : 200 },
{ id: 3, name : "product 3", price : 300 },
{ id: 4, name : "product 4", price : 400 },
{ id: 5, name : "product 5", price : 500 },
{ id: 6, name : "product 6", price : 600 },
{ id: 7, name : "product 7", price : 700 },
{ id: 8, name : "product 8", price : 800 },
{ id: 9, name : "product 9", price : 900 },
{ id: 10, name : "product 10", price : 1000 }];



}

export class Product{
    id: number;
    name: string;
    price: number;
}