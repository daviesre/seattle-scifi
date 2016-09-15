import { Component } from 'angular2/core';
import { Quote } from './quote.model';
import { GameLogicService } from './game-logic.service';


@Component ({
  selector: 'quote-display',
  inputs: ['model'],
  template: `
    <div *ngFor="#quote of model.quote"
    (click)="quoteClicked(quote)">
      <p><img src={{quote.image}} height="100" width="200"><p>
      <h4>Quote is: {{quote.body}}</h4>
    </div>
  `,
    providers: [GameLogicService]
})
export class QuoteComponent {
  public selectedQuote;

  constructor(private gameLogicService: GameLogicService) {

  }

  quoteClicked(clickedQuote) : void {
    console.log(clickedQuote.movie);
    this.sendQuoteToService(clickedQuote.movie);
  }

  sendQuoteToService(movie: String) {
    this.gameLogicService.setQuoteTitle(movie);
  }
}
