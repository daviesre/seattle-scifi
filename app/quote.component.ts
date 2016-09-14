import { Component } from 'angular2/core';
import { Quote } from './quote.model';


@Component ({
  selector: 'quote-display',
  inputs: ['quote'],
  template: `
    <h4>Quote is: {{quote.body}}</h4>
    <p><img src={{quote.image}} height="100" width="200"><p>
  `
})
export class QuoteComponent {
  public quote: Quote;
}
