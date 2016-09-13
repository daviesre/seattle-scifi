import { Component } from 'angular2/core';
import { Quote } from './quote.model';


@Component ({
  selector: 'quote-display',
  inputs: ['quote'],
  template: `
    <h3>{{quote.content}}</h3>
  `
})
export class QuoteComponent {
  public quote: Quote;
}