import { Component } from 'angular2/core';
import { QuoteComponent } from './quote.component';
import { Quote } from './quote.model';

@Component({
    selector: 'quote-list',
    inputs: ['quoteList'],
    directives: [QuoteComponent],
    template: `
        <h4>Quotes</h4>
        <quote-display *ngFor="#currentQuote of quoteList"
            [quote]="currentQuote">
        </quote-display>
    `
})
export class QuoteListComponent {
    public quoteList: Quote[];
    constructor() {
        this.quoteList = [
            new Quote(0, "We need you, Sebastian. You're our best and only friend.", "Pris", "Bladerunner"),
            new Quote(1, "Isn't it strange, to create something that hates you?", "Ava", "Ex Machine"),
            new Quote(2, "Stilgar, do we have wormsign?", "Paul", "Dune"),
            new Quote(3, "My name is not pretty-pretty, it is Barbarella", "Barbarella", "Barbarella")
        ];
    }
}
