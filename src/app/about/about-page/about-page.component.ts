import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';

@Component({
  selector: 'app-about-page',
  imports: [PageWrapperComponent, PageTitleComponent],
  template: `
    <app-page-wrapper>
      <app-page-title>About</app-page-title>
    </app-page-wrapper>
  `,
  styleUrl: './about-page.component.css',
})
export class AboutPageComponent {}
