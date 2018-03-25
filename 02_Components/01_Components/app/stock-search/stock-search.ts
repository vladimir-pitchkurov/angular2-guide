

import {Component} from "@angular/core";

@Component({
    selector: 'StockSearch',
    providers: [StocksService]
})
@View({
    template: `
	<section>
	<h3>Stock Price & Name Lookup:</h3>
	<form (submit)="doSearch()">
	<input [(ngModel)]="searchText"/>
	</form>
	<StockList [stocks]="stocks"></StockList>
	</section>
	  `,
    directives: [StockList]
})
export class StockSearch{
    searchText: string;
    stocks: Object[];

    constructor(public stockService:StocksService) {}

    doSearch() {
        this.stockService.snapshot(this.searchText).subscribe(
            (data) => {this.stocks= data},
            (err) => {console.log('error!', err)}
        );
    }
}
