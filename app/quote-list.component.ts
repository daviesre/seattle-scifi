import { Component, EventEmitter } from 'angular2/core';
import { QuoteComponent } from './quote.component';
import { Quote } from './quote.model';
import { GameLogicService } from './game-logic.service';


@Component({
    selector: 'quote-list',
    inputs: ['quoteList'],
    outputs: ['onQuoteSelect'],
    directives: [QuoteComponent],
    template: `
        <h3>Quotes</h3>
        <quote-display *ngFor="#currentQuote of quoteList"
            (click)="quoteClicked(currentQuote)"
            [quote]="currentQuote">
        </quote-display>
    `,
    providers: [GameLogicService]
})

export class QuoteListComponent {
    public quoteList: Quote[];

    public onQuoteSelect: EventEmitter<Quote>;
    public selectedQuote: Quote;

    constructor(private gameLogicService: GameLogicService) {

    }

    quoteClicked(clickedQuote): void {
        console.log(clickedQuote);
        this.selectedQuote = clickedQuote;
        this.onQuoteSelect.emit(clickedQuote);

        this.sendQuoteToService(clickedQuote.movie);
    }

    sendQuoteToService(movie: String) {
      this.gameLogicService.setQuoteTitle(movie);
    }
}
