import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details-page',
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="details-page">
      <div class="details-area">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: 'details-page.component.css',
})
export class DetailsPageComponent {}
