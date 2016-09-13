import { Component, EventEmitter } from 'angular2/core';
import { Quote } from './quote.model';

@Component ({
  selector: 'add-quote',
  outputs: ['onSubmitNewQuote'],
  template: `
    <div class="quote-form">
      <h3>Create a New Quote</h3>
      <input placeholder="Body" class="col-sm-6 input-lg" #newBody>
      <input placeholder="Role" class="col-sm-3 input-lg" #newRole>
      <input placeholder="Movie" class="col-sm-3 input-lg" #newMovie>
      <button (click)="addQuote(newBody, newRole, newMovie)">Add</button>
    </div>
  `
})
export class AddQuoteComponent{
  public onSubmitNewQuote: EventEmitter<Quote>;
  constructor() {
    this.onSubmitNewQuote = new EventEmitter();
  }

  addQuote(newBody: HTMLInputElement, newRole: HTMLInputElement, newMovie: HTMLInputElement) {
    var newQuote = new Quote(0, newBody.value, newRole.value, newMovie.value);
    console.log(newQuote);
    this.onSubmitNewQuote.emit(newQuote);
    newBody.value="";
  }
}