import { Component } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  imports: [],
  template: ` <div class="page-content"><ng-content></ng-content></div> `,
  styleUrl: 'page-wrapper.component.css',
})
export class PageWrapperComponent {}
