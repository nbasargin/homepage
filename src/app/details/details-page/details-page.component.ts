import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-details-page',
  imports: [CommonModule, MatCardModule, RouterModule, PageWrapperComponent],
  template: `
    <app-page-wrapper>
      <router-outlet></router-outlet>
    </app-page-wrapper>
  `,
  styleUrl: 'details-page.component.css',
})
export class DetailsPageComponent {}
