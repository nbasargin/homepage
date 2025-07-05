import { Component } from '@angular/core';

@Component({
  selector: 'hp-page-home',
  imports: [],
  template: ` <div class="block-title">Hi!</div>
    <div>
      <p>Welcome to the homepage! Work in progress...</p>
    </div>
    <div class="block-title">Selected Projects</div>
    <div class="project-list">highlights to be added</div>`,
  host: {
    class: 'page-width',
  },
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}
