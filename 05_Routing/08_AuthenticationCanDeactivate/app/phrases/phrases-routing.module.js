"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var phrase_list_component_1 = require("./phrase-list/phrase-list.component");
var phrase_details_component_1 = require("./phrase-details/phrase-details.component");
var can_deactivate_guard_service_1 = require("../shared/can-deactivate-guard.service");
var PhrasesRoutingModule = (function () {
    function PhrasesRoutingModule() {
    }
    return PhrasesRoutingModule;
}());
PhrasesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: "phrases", component: phrase_list_component_1.PhraseListComponent },
                {
                    path: "phrases/:id",
                    component: phrase_details_component_1.PhraseDetailsComponent,
                    canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard] // CanDeactivateGuard - проверка возможности перенаправления с PhraseDetailsComponent на другой компонент.
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], PhrasesRoutingModule);
exports.PhrasesRoutingModule = PhrasesRoutingModule;
//# sourceMappingURL=phrases-routing.module.js.map