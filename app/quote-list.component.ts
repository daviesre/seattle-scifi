

@Componnt({
    selector: 'quote-list',
    inputs: ['quoteList'],
    outputs: ['onQuoteSelect'],
    directives: [QuoteComponent],
    template: `
        <quote-display *ngFor="currentQuote of quoteList"
            (click)="quoteClicked(currentQuote):
            [class.selected]="currentQuote === selectedQuote"
            [quote]="currentQuote">
        </quote-display>
    `
})