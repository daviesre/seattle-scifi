import { Component, EventEmitter } from 'angular2/core';
import { QuoteComponent } from './quote.component';
import { Quote } from './quote.model';

@Component({
    selector: 'quote-list',
    inputs: ['quoteList'],
    outputs: ['onQuoteSelect'],
    directives: [QuoteComponent],
    template: `
        <quote-display *ngFor="#currentQuote of quoteList"
            (click)="quoteClicked(currentQuote)"
            [class.selected]="currentQuote === selectedQuote"
            [quote]="currentQuote">
        </quote-display>
    `
})
export class QuoteListComponent {
    public quotes: Quote[];
    public onQuoteSelect: EventEmitter<Quote>;
    public selectedQuote: Quote;
    constructor() {
        this.onQuoteSelect = new EventEmitter();
    }
    quoteClicked(clickedQuote: Quote): void {
        this.selectedQuote = clickedQuote;
        this.onQuoteSelect.emit(clickedQuote);
    }
}
