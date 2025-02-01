import { Component } from '@angular/core';
import { HighlightCardComponent } from '../highlight-card/highlight-card.component';

@Component({
  selector: 'app-highlights-page',
  imports: [HighlightCardComponent],
  template: `
    @for (slide of slides; track slide.backgroundUrl) {
      <img
        class="background cross-fade"
        [class.shown]="$index == activeIndex"
        [src]="slide.backgroundUrl"
        alt="background"
      />
    }
    <div class="active-area">
      @let activeSlide = slides[activeIndex];
      <div>
        <app-highlight-card
          [title]="activeSlide.title"
          [subtitle]="activeSlide.subtitle"
          [description]="activeSlide.description"
        >
        </app-highlight-card>
        <div class="controls">
          <button (click)="prevClick()">Prev</button>
          {{ activeIndex + 1 }} / {{ slides.length }}
          <button (click)="nextClick()">Next</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './highlights-page.component.css',
})
export class HighlightsPageComponent {
  activeIndex = 0;
  slides = [
    {
      backgroundUrl: '/assets/stable-diffusion-iceland.jpg',
      title: 'Hightlight 1',
      subtitle: 'sub 1',
      description: 'description 1',
    },
    {
      backgroundUrl: '/assets/stable-diffusion-forest-shrooms.jpg',
      title: 'Hightlight 2',
      subtitle: 'sub 2',
      description: 'description 2',
    },
    {
      backgroundUrl: '/assets/stable-diffusion-desert-canyon.jpg',
      title: 'Hightlight 3',
      subtitle: 'sub 3',
      description: 'description 3',
    },
  ];

  prevClick() {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }
  nextClick() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }
}
