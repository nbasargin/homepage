import { Component } from '@angular/core';

@Component({
  selector: 'hp-page-home',
  imports: [],
  template: ` <div class="block-title">Hi!</div> `,
  host: {
    class: 'page-width',
  },
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}
