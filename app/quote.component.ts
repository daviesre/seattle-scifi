import { Component } from 'angular2/core';
import { Quote } from './quote.model';
import { GameLogicService } from './game-logic.service';


@Component ({
  selector: 'quote-display',
  inputs: ['model'],
  template: `
    <div *ngFor="#quote of model.quote"
    (click)="quoteClicked(quote)">

      <div class="temp-hide">
        <p><img src={{quote.image}} height="100" width="200"><p>
      </div>

      <h4 class="quote-block jumbotron"><span class="quote-text">{{quote.body}}</span></h4>

    </div>
  `
})
export class QuoteComponent {
  public selectedQuote;

  constructor(private gameLogicService: GameLogicService) {

  }

  quoteClicked(clickedQuote) {
    this.gameLogicService.setQuoteRole(clickedQuote.role);
  }
}
