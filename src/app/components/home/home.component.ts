import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="home-section">
      <img class="background" src="/assets/stable-diffusion-iceland.jpg" alt="main image" />
      <div class="down-arrow-container">
        <img class="down-arrow" src="/assets/down-arrow.svg" alt="down arrow" />
      </div>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
