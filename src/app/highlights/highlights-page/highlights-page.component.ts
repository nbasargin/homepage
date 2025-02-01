import { Component } from '@angular/core';
import { HighlightCardComponent } from '../highlight-card/highlight-card.component';

@Component({
  selector: 'app-highlights-page',
  imports: [HighlightCardComponent],
  template: `
    <img class="background" src="/assets/stable-diffusion-iceland.jpg" alt="background" />

    <div class="active-area">
      <app-highlight-card></app-highlight-card>
    </div>
  `,
  styleUrl: './highlights-page.component.css',
})
export class HighlightsPageComponent {}
