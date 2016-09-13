import { Component, EventEmitter } from 'angular2/core';
import { QuoteComponent } from './quote.component';
import { Quote } from './quote.model';
import { EditQuoteDetailsComponent } from './edit-quote-details.component';
import { AddQuoteComponent } from './add-quote.component';

@Component({
    selector: 'quote-list',
    inputs: ['quoteList'],
    outputs: ['onQuoteSelect'],
    directives: [QuoteComponent, EditQuoteDetailsComponent, AddQuoteComponent],
    template: `
        <h3>Quotes</h3>
        <quote-display *ngFor="#currentQuote of quoteList"
            (click)="quoteClicked(currentQuote)"
            [quote]="currentQuote">
        </quote-display>
        <edit-quote-details *ngIf="selectedQuote" [quote]="selectedQuote">
        </edit-quote-details>
        <add-quote></add-quote>
    `
})
export class QuoteListComponent {
    public quoteList: Quote[];

    public onQuoteSelect: EventEmitter<Quote>;
    public selectedQuote: Quote;

    constructor() {
        this.quoteList = [
            new Quote(0, "We need you, Sebastian. You're our best and only friend.", "Pris", "Bladerunner"),
            new Quote(1, "Isn't it strange, to create something that hates you?", "Ava", "Ex Machine"),
            new Quote(2, "Stilgar, do we have wormsign?", "Paul", "Dune"),
            new Quote(3, "My name isn't pretty-pretty, it's Barbarella.", "Barbarella", "Barbarella")
        ];
        this.onQuoteSelect = new EventEmitter();
    }
    quoteClicked(clickedQuote: Quote): void {
        console.log(clickedQuote);
        this.selectedQuote = clickedQuote;
        this.onQuoteSelect.emit(clickedQuote);
    }
}
