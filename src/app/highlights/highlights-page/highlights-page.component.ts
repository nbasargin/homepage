import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights-page',
  imports: [],
  template: `
    <div class="highlights-page">
      <img class="background" src="/assets/stable-diffusion-iceland.jpg" alt="main image" />
    </div>
  `,
  styleUrl: './highlights-page.component.css',
})
export class HighlightsPageComponent {}
