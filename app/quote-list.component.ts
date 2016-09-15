import { Component, Input } from 'angular2/core';
import { QuoteComponent } from './quote.component';
import { Quote } from './quote.model';


@Component({
    selector: 'quote-list',
    inputs: ['model'],
    directives: [QuoteComponent],
    template: `
        <h3>Quotes</h3>
        <quote-display *ngFor="#currentQuote of model"
            [model]="currentQuote">
        </quote-display>
    `,
})

export class QuoteListComponent {

}
