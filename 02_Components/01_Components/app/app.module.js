"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router"); // модуль для маршрутизации
var app_component_1 = require("./app.component");
var list1_component_1 = require("./list1/list1.component");
var list2_component_1 = require("./list2/list2.component");
var my_table_component_1 = require("./my-table/my-table.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_1.NgModule,
                forms_1.FormsModule,
                core_1.Input,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: "list1", component: list1_component_1.List1Component },
                    { path: "list2", component: list2_component_1.List2Component },
                    { path: "", redirectTo: "list1", pathMatch: "full" },
                    { path: "myTable", component: my_table_component_1.MyTableComponent }
                ])
            ],
            declarations: [app_component_1.AppComponent, list1_component_1.List1Component, list2_component_1.List2Component, my_table_component_1.MyTableComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map