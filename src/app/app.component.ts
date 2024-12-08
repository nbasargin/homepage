import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="home-section">
      <h1 class="main-header">Welcome to the homepage!</h1>
      <img class="background" src="/assets/stable-diffusion-iceland.jpg" alt="main image" />
      <div class="down-arrow-container">
        <img class="down-arrow" src="/assets/down-arrow.svg" alt="down arrow" />
      </div>
    </div>

    <router-outlet />

    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
