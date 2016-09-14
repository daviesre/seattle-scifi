import { Component } from 'angular2/core';
import { Quote } from './quote.model';

@Component({
  selector: 'edit-quote-details',
  inputs: ['quote'],
  template: `
    <h4>Edit this quote:</h4>
    <input [(ngModel)]="quote.body" class="col-sm-i input-lg task-form"/>
  `
})
export class EditQuoteDetailsComponent{
  public quote: Quote;
}

