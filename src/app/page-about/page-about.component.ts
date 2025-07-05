import { Component } from '@angular/core';

@Component({
  selector: 'hp-page-about',
  template: ` <div class="block-title">About</div> `,
  host: {
    class: 'page-width',
  },
  styleUrl: './page-about.component.css',
})
export class PageAboutComponent {}
