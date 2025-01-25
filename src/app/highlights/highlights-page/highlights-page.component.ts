import { Component } from '@angular/core';
import { HighlightCardComponent } from '../highlight-card/highlight-card.component';

@Component({
  selector: 'app-highlights-page',
  imports: [HighlightCardComponent],
  template: ` <app-highlight-card></app-highlight-card> `,
  styleUrl: './highlights-page.component.css',
})
export class HighlightsPageComponent {}
