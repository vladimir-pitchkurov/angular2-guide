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
var StockSearch = (function () {
    function StockSearch(stockService) {
        this.stockService = stockService;
    }
    StockSearch.prototype.doSearch = function () {
        var _this = this;
        this.stockService.snapshot(this.searchText).subscribe(function (data) { _this.stocks = data; }, function (err) { console.log('error!', err); });
    };
    StockSearch = __decorate([
        core_1.Component({
            selector: 'StockSearch',
            providers: [StocksService]
        }),
        View({
            template: "\n\t<section>\n\t<h3>Stock Price & Name Lookup:</h3>\n\t<form (submit)=\"doSearch()\">\n\t<input [(ngModel)]=\"searchText\"/>\n\t</form>\n\t<StockList [stocks]=\"stocks\"></StockList>\n\t</section>\n\t  ",
            directives: [StockList]
        }),
        __metadata("design:paramtypes", [Object])
    ], StockSearch);
    return StockSearch;
}());
exports.StockSearch = StockSearch;
//# sourceMappingURL=stock-search.js.map